import React from "react";
import { useNavigate } from "react-router-dom";
import { User, MessageCircle, Settings, LogOut, Users } from "lucide-react";

interface UserMenuProps {
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
  handleLogout: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({
  showMenu,
  setShowMenu,
  handleLogout,
}) => {
  const navigate = useNavigate();

  if (!showMenu) return null;

  return (
    <div className="absolute right-4 top-16 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-2 w-48 z-10">
      <button
        className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center"
        onClick={() => {
          navigate("/profile");
          setShowMenu(false);
        }}
      >
        <User className="h-4 w-4 mr-2" />
        <span>Profile</span>
      </button>
      <button
        className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center"
        onClick={() => {
          navigate("/connections");
          setShowMenu(false);
        }}
      >
        <Users className="h-4 w-4 mr-2" />
        <span>Connections</span>
      </button>
      <button
        className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center"
        onClick={() => {
          navigate("/messages");
          setShowMenu(false);
        }}
      >
        <MessageCircle className="h-4 w-4 mr-2" />
        <span>Messages</span>
      </button>
      <button
        className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center"
        onClick={() => {
          navigate("/settings");
          setShowMenu(false);
        }}
      >
        <Settings className="h-4 w-4 mr-2" />
        <span>Settings</span>
      </button>
      <div className="border-t border-gray-700 my-1"></div>
      <button
        className="w-full text-left px-4 py-2 hover:bg-gray-700 text-red-400 flex items-center"
        onClick={() => {
          handleLogout();
          setShowMenu(false);
        }}
      >
        <LogOut className="h-4 w-4 mr-2" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default UserMenu;
