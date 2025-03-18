import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  timestamp: string;
  isUser: boolean;
}

interface ChatInfo {
  id: number;
  senderId: number;
  senderName: string;
  senderImage: string;
  messages: Message[];
}

interface ChatViewProps {
  chat: ChatInfo;
  setActiveChat: (chatId: number | null) => void;
}

const ChatView: React.FC<ChatViewProps> = ({ chat, setActiveChat }) => {
  const [newMessage, setNewMessage] = useState('');
  const navigate = useNavigate();

  const handleBack = () => {
    setActiveChat(null);
    navigate('/messages');
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, you would update the state with the new message
      // For this demo, we'll just clear the input
      setNewMessage('');
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col h-[600px]">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-700 flex items-center">
        <button 
          onClick={handleBack}
          className="mr-2 p-1 rounded-full hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        
        <div className="flex items-center">
          <img 
            src={chat.senderImage} 
            alt={chat.senderName} 
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div>
            <h3 className="font-medium">{chat.senderName}</h3>
            <p className="text-xs text-gray-400">Online</p>
          </div>
        </div>
      </div>
      
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chat.messages.map(message => (
          <div 
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] p-3 rounded-lg ${
                message.isUser 
                  ? 'bg-blue-600 text-white rounded-br-none' 
                  : 'bg-gray-700 text-white rounded-bl-none'
              }`}
            >
              <p>{message.text}</p>
              <p className={`text-xs mt-1 ${message.isUser ? 'text-blue-200' : 'text-gray-400'}`}>
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Message Input */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center">
          <input 
            type="text" 
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-gray-700 border border-gray-600 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <button 
            onClick={handleSendMessage}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatView;