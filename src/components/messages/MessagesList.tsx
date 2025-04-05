import React from "react";
import { useNavigate } from "react-router-dom";

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

interface MessagesListProps {
  messages: ChatInfo[];
  setActiveChat: (chatId: number) => void;
}

const MessagesList: React.FC<MessagesListProps> = ({
  messages,
  setActiveChat,
}) => {
  const navigate = useNavigate();

  const handleChatClick = (chatId: number) => {
    setActiveChat(chatId);
    navigate(`/messages/${chatId}`);
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg mt-3">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold">Your Matches</h2>
      </div>
      <div className="mt-6 mx-4 p-4 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-md text-black text-center border-l-4 border-yellow-800">
        <h3 className="text-lg font-semibold flex items-center justify-center gap-2">
          🚧 Under Development
        </h3>
        <p className="mt-2 text-sm font-medium">
          This chat feature is not functional yet. Stay tuned for updates! 🚀
        </p>
      </div>

      <div className="divide-y divide-gray-700">
        {messages.map((chat) => (
          <div
            key={chat.id}
            className="p-4 hover:bg-gray-700/50 cursor-pointer transition-colors"
            onClick={() => handleChatClick(chat.id)}
          >
            <div className="flex items-center">
              <img
                src={chat.senderImage}
                alt={chat.senderName}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div className="flex-1">
                <h3 className="font-medium">{chat.senderName}</h3>
                <p className="text-gray-400 text-sm truncate">
                  {chat.messages[chat.messages.length - 1].text}
                </p>
              </div>
              <span className="text-xs text-gray-500">
                {chat.messages[chat.messages.length - 1].timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>
      {messages.length === 0 && (
        <div className="p-8 text-center text-gray-400">
          <p>No messages yet. Start swiping to match with developers!</p>
        </div>
      )}
    </div>
  );
};

export default MessagesList;
