import React from "react";
import { useNavigate } from "react-router-dom";
import { Code, Users, MessageSquare, Zap } from "lucide-react";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero Section */}
      <div className="text-center py-16 md:py-24">
        <div className="flex justify-center mb-6">
          <Code className="h-16 w-16 text-blue-400" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Connect with Developers
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Find your perfect coding partner. Match with developers who share your
          interests, collaborate on projects, and build something amazing
          together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/signup")}
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium text-lg transition-colors"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium text-lg transition-colors"
          >
            Login
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 py-16">
        <div className="bg-gray-800/50 p-6 rounded-xl">
          <Users className="h-12 w-12 text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Match with Developers</h3>
          <p className="text-gray-300">
            Find developers who match your tech stack, experience level, and
            project interests.
          </p>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-xl">
          <MessageSquare className="h-12 w-12 text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Instant Messaging</h3>
          <p className="text-gray-300">
            Connect instantly with your matches and discuss project ideas in
            real-time.
          </p>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-xl">
          <Zap className="h-12 w-12 text-yellow-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Start Collaborating</h3>
          <p className="text-gray-300">
            Begin working on projects together and build your portfolio while
            making connections.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-16 border-t border-gray-700">
        <h2 className="text-3xl font-bold mb-4">
          Ready to find your coding partner?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Join thousands of developers already connecting on DevSwipe
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 rounded-lg font-medium text-lg transition-opacity"
        >
          Join Now
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
