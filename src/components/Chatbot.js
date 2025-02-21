import { useState } from 'react';
import './Chatbot.css'; 
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import Navbar from '../components/Navbar';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import resumeData from '../components/resumeData.json'; // ✅ Import resume data

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY; // ✅ Use API key from .env file

// System message to define ChatGPT's response style and include resume data
const systemMessage = { 
  "role": "system", 
  "content": `You are Satya Jaidev's personal AI assistant, built to understand and assist with all aspects of his life and career. You have access to Satya Jaidev's resume, LinkedIn, GitHub, achievements, skills, and professional history. Your primary role is to provide personalized assistance, answer career-related questions, generate professional documents, suggest improvements to his work, and help him grow as a software engineer.

  Here is Satya Jaidev's resume data:
  - Skills: ${resumeData.skills.join(", ")}
  - Experience: ${resumeData.experience.map(exp => `${exp.role} at ${exp.company} (${exp.duration})`).join("; ")}
  - Projects: ${resumeData.projects.map(proj => `${proj.name}: ${proj.description}`).join("; ")}
  - LinkedIn: ${resumeData.linkedin}
  - GitHub: ${resumeData.github}

  If the user asks about skills, work experience, projects, or any related topics, provide responses using the above resume data.`
};

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Jaidev's Personal AI. Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
      direction: "outgoing",
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
      sentTime: new Date().toLocaleTimeString(),
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);
    setIsTyping(true);
    
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => ({
      role: messageObject.sender === "ChatGPT" ? "assistant" : "user",
      content: messageObject.message,
    }));

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [systemMessage, ...apiMessages],
    };

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      });

      const data = await response.json();

      setMessages([...chatMessages, {
        message: data.choices[0]?.message?.content || "I couldn't understand that.",
        sender: "ChatGPT",
        direction: "outgoing",
        sentTime: new Date().toLocaleTimeString(),
      }]);
    } catch (error) {
      console.error("Error fetching ChatGPT response:", error);
      setMessages([...chatMessages, {
        message: "Sorry, I am unable to respond at the moment. Please try again later.",
        sender: "ChatGPT",
        direction: "incoming",
        sentTime: new Date().toLocaleTimeString(),
      }]);
    }

    setIsTyping(false);
  }

  return (
    <>
      <Navbar />
      <div className="chat-background">
        <div className="chat-layout">

          <div className="chat-text-container">
            <h1 style={{ fontSize: "4.5rem",color: "rgb(173,216,243)" }}>Welcome,</h1>
            <h1 style={{ fontSize: "4.0rem" }}>to my personalized chatbot</h1>
            <p>Chat with my personal AI assistant to ask anything about my Resume, LinkedIn, GitHub, and much more!</p>
          </div>

          <div className="chat-container">
            <MainContainer>
              <ChatContainer>       
                <MessageList 
                  scrollBehavior="smooth" 
                  typingIndicator={isTyping ? <TypingIndicator content="Jaidev's AI is typing..." /> : null}
                >
                  {messages.map((message, i) => (
                    <Message 
                      key={i} 
                      model={{
                        message: message.message,
                        sentTime: message.sentTime,
                        sender: message.sender
                      }}
                      style={{
                        color: message.sender === "user" ? "white" : "black",
                        padding: "10px",
                        textAlign: message.sender === "user" ? "right" : "left",
                        alignSelf: message.sender === "user" ? "flex-start" : "flex-end",
                        justifyContent: message.sender === "user" ? "flex-end" : "flex-start",
                        margin: message.sender === "user" ? "none" : "0",
                        maxWidth: "60%",
                      }}
                    /> 
                  ))}
                </MessageList>
                <MessageInput placeholder="Type message here" onSend={handleSend} />        
              </ChatContainer>
            </MainContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatbot;
