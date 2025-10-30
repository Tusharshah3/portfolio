import React, { useState } from "react";
import type { ChangeEvent } from "react";
import { FaRobot, FaUser } from "react-icons/fa";

// ✅ Define a type for message objects
interface Message {
  text: string;
  sender: "bot" | "user";
}

const Chatbot: React.FC = () => {
  // ✅ Strongly type your useState hooks
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [userInput, setUserInput] = useState<string>("");

  // ✅ Handle send message safely
  const handleSendMessage = (): void => {
    if (userInput.trim() === "") return;

    const userMessage: Message = { text: userInput, sender: "user" };
    const botMessage: Message = { text: `You said: "${userInput}"`, sender: "bot" };

    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    setUserInput(""); // Clear input field
  };

  // ✅ Handle controlled input safely
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserInput(e.target.value);
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 h-[500px] rounded-lg shadow-lg bg-white flex flex-col border border-gray-300">
      <div className="flex flex-col grow p-3 overflow-y-auto">
        <div className="flex flex-col space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 ${
                message.sender === "bot" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.sender === "bot" ? "bg-gray-400" : "bg-blue-500"
                }`}
              >
                {message.sender === "bot" ? (
                  <FaRobot className="text-white text-lg" />
                ) : (
                  <FaUser className="text-white text-lg" />
                )}
              </div>
              <p
                className={`p-3 rounded-lg max-w-[70%] ${
                  message.sender === "bot"
                    ? "bg-gray-100 text-gray-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {message.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center p-3 border-t border-gray-200">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type a message..."
          className="grow p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
