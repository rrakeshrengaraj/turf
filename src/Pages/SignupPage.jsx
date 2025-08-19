import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // Import arrow icon
import logo from "../assets/tlogo.png";
import bgImage from "../assets/bg.jpg";
import mobileBgImage from "../assets/mbg.jpg";
import Navbar2 from "../Components/Navbar2";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, name, mobile });
  };

  return (
    <div className="relative min-h-screen">
      <Navbar2 />
      {/* Background */}
      <div
        className="absolute inset-0 brightness-50"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "fixed",
          backgroundAttachment: "fixed",
        }}
      ></div>
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
      <div className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-10 lg:px-20 ">
        {/* Left Side - Content (Desktop Only) */}
        <div className="hidden md:flex flex-col justify-start w-1/2 p-6 lg:p-8 text-white">
          <h1 className="text-5xl lg:text-7xl italic font-bold mb-4 leading-tight">
            Join Us
          </h1>
          <p className="text-2xl lg:text-3xl text-[#14FFEC] font-bold italic mb-8">
            Become part of our community
          </p>
        </div>

        {/* Right Column - Signup Form */}
        <div className="w-full md:w-1/2 lg:w-[40%] max-w-lg bg-black/30 rounded-xl p-6 md:p-10 lg:p-12 border border-gray-700 mt-25">
          <h2 className="text-3xl lg:text-4xl text-center font-bold mb-4 text-white">
            Sign up
          </h2>

          {/* Community Text (Mobile Only) */}
          <p className="md:hidden text-xl text-[#14FFEC] text-center font-bold italic mb-6">
            Become part of our community
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 bg-gray-800/70 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#14FFEC] transition-all"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-gray-800/70 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#14FFEC] transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Mobile Field */}
            <div>
              <label className="block text-gray-300 mb-2">Mobile Number</label>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="w-full p-3 bg-gray-800/70 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#14FFEC] transition-all"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#14FFEC] text-gray-900 font-bold py-3 px-4 rounded-lg hover:scale-[1.02] transition-all duration-300 mt-4"
            >
              Sign Up Now
            </button>

            {/* Login Link */}
            <div className="text-center pt-4">
              <p className="text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#14FFEC] font-bold hover:underline transition-colors"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
