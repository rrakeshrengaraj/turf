// After login

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../assets/tlogo.png";
import bgImage from "../assets/bg.jpg"; // Desktop image
import mobileBgImage from "../assets/mbg.jpg"; // Mobile image
import PrimaryButton from "../Components/PrimaryButton";
import Navbar2 from "../Components/Navbar2";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email });
  };

  return (
    <div className="relative min-h-screen">
      <Navbar2  />
      {/* Background Images */}
      {/* Default Desktop Background (shown on all screens) */}
      <div
        className="absolute inset-0 brightness-50"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "fixed",
          backgroundAttachment: "fixed",
        }}
      ></div>
      
      {/* Mobile Background Override (hidden on desktop) */}
      <div
        className="absolute inset-0 brightness-50 md:hidden"
        style={{
          backgroundImage: `url(${mobileBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-10 lg:px-20">
        {/* Left Column - Desktop only */}
        <div className="hidden md:flex flex-col justify-start w-1/2 p-6 lg:p-5 text-white">
          <h1 className="text-5xl lg:text-7xl italic font-bold mb-4 leading-tight">
            Welcome Back
          </h1>
          <p className="text-xl lg:text-3xl text-[#14FFEC] font-bold italic mb-8">
            One platform. Zero clashes
          </p>
        </div>

        {/* Right Column - Login Form */}
        <div className="w-full md:w-1/2 lg:w-[40%] max-w-lg bg-black/30 rounded-xl p-6 md:p-10 lg:p-12 border border-gray-700">
          <h2 className="text-3xl lg:text-4xl text-center font-bold mb-4 text-white">
            Log in
          </h2>

          {/* Mobile-only slogan */}
          <p className="text-lg sm:text-xl text-center text-[#14FFEC] font-bold italic mb-6 md:hidden">
            One platform. Zero clashes
          </p>

          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#14FFEC] mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#14FFEC] cursor-pointer text-gray-900 font-bold py-3 px-4 rounded-lg transition-transform duration-300 hover:scale-105 mb-4"
            >
              Login now
            </button>

            {/* Signup Link */}
            <div className="text-center">
              <p className="text-gray-400">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[#14FFEC] font-bold hover:underline"
                >
                  Sign-up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;