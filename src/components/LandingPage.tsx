import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Code,
  Users,
  MessageSquare,
  Zap,
  CheckCircle,
  Star,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <div className="w-full text-center py-24 px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <Code className="h-20 w-20 text-blue-400 drop-shadow-lg" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Connect with Developers
        </motion.h1>

        <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
          Find your perfect coding partner. Match with developers, collaborate
          on projects, and build something amazing together.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/signup")}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium text-lg shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Get Started
          </motion.button>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full px-8 py-16 grid md:grid-cols-3 gap-10">
        {[
          {
            title: "Match with Developers",
            icon: <Users className="h-12 w-12 text-blue-400" />,
            desc: "Find developers who match your tech stack, experience level, and project interests.",
          },
          {
            title: "Instant Messaging",
            icon: <MessageSquare className="h-12 w-12 text-purple-400" />,
            desc: "Connect instantly with your matches and discuss project ideas in real-time.",
          },
          {
            title: "Start Collaborating",
            icon: <Zap className="h-12 w-12 text-yellow-400" />,
            desc: "Work on projects together and grow your portfolio while making connections.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/20 hover:scale-105 transition-transform"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-300 mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* How It Works */}
      <div className="w-full px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "Sign Up",
              icon: <CheckCircle className="h-12 w-12 text-green-400" />,
              desc: "Create a profile and set your developer preferences.",
            },
            {
              step: "Match & Chat",
              icon: <MessageSquare className="h-12 w-12 text-blue-400" />,
              desc: "Connect with developers and discuss projects in real-time.",
            },
            {
              step: "Collaborate",
              icon: <Terminal className="h-12 w-12 text-yellow-400" />,
              desc: "Work on projects together and grow your portfolio.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-gray-800/50 rounded-xl text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.step}</h3>
              <p className="text-gray-400 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="w-full px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Developers Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Alex J.",
              text: "This platform helped me find an amazing coding partner. Our project won a hackathon!",
            },
            {
              name: "Samantha K.",
              text: "I met incredible developers here. We launched a startup together!",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white/10 rounded-xl text-center border border-white/20"
            >
              <Star className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <p className="text-gray-300 italic">"{testimonial.text}"</p>
              <h3 className="text-lg font-semibold mt-3">{testimonial.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full text-center py-16 bg-gradient-to-r from-blue-500 to-purple-600"
      >
        <h2 className="text-3xl font-bold mb-4 text-black">
          Join the Future of Developer Networking
        </h2>
        <p className="text-lg text-gray-900 mb-6">
          Don't miss out—connect with like-minded developers today!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/signup")}
          className="px-10 py-3 bg-black text-white rounded-lg font-medium text-lg shadow-lg hover:opacity-90 transition-opacity"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LandingPage;
