import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Code, User, ArrowLeft } from "lucide-react";

interface HeaderProps {
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
  isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({
  showMenu,
  setShowMenu,
  isLoggedIn,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getTitle = () => {
    const path = location.pathname;
    if (path === "/") return "DevSwipe";
    if (path === "/feed") return "Find Developers";
    if (path === "/profile") return "My Profile";
    if (path === "/messages") return "Messages";
    if (path.startsWith("/messages/")) return "Chat";
    if (path === "/settings") return "Settings";
    if (path === "/login") return "Sign In";
    if (path === "/signup") return "Sign Up";
    return "DevSwipe";
  };

  const showBackButton =
    location.pathname !== "/" && location.pathname !== "/feed";

  return (
    <header className="px-4 py-3 flex justify-between items-center border-b border-gray-700">
      <div className="flex items-center">
        {showBackButton ? (
          <button
            onClick={() => navigate(-1)}
            className="mr-2 p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
        ) : (
          <Code className="h-8 w-8 text-blue-400 mr-2" />
        )}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {getTitle()}
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <button
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            onClick={() => setShowMenu(!showMenu)}
          >
            <User className="h-6 w-6" />
          </button>
        ) : (
          location.pathname !== "/login" &&
          location.pathname !== "/signup" && (
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
            >
              Sign In
            </button>
          )
        )}
      </div>
    </header>
  );
};

export default Header;
