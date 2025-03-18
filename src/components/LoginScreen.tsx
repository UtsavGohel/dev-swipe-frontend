import React from "react";
import { Code } from "lucide-react";

interface LoginScreenProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ setIsLoggedIn }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <Code className="h-10 w-10 text-blue-400 mr-2" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            DevSwipe
          </h1>
        </div>
        <h2 className="text-xl font-semibold mb-6 text-center">
          Log in to continue
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
          <button
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
            onClick={() => setIsLoggedIn(true)}
          >
            Log In
          </button>
          <p className="text-sm text-gray-400 text-center mt-4">
            Don't have an account?{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
