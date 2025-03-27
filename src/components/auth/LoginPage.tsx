import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Code } from "lucide-react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/slices/userSlice";
import { baseUrl } from "../../constants/apiEndpoint.const";

const LoginPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [email, setEmail] = useState("utsav1.test@gmail.com");

  const [password, setPassword] = useState("Test@123");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await axios.post(
        `${baseUrl}/users/signin`, //change to baseURL / url routing file
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      dispatch(addUser(data.data));

      navigate("/feed");

      return data.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error) {
        console.log("err", error);

        if (error) {
          setErrorMessage(
            error?.response?.data?.message || "Something went wrong"
          );
        }
      }
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-gray-800 p-8 rounded-xl shadow-xl">
        <div className="flex items-center justify-center mb-6">
          <Code className="h-10 w-10 text-blue-400 mr-2" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            DevSwipe
          </h1>
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-center">
          Welcome back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>
          <p className="text-red-500 self-start">{errorMessage}</p>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
