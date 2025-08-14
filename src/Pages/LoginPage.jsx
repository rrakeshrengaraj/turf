import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/tlogo.png";
import bgImage from "../assets/bg.jpg";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email });
  };

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div
        className="absolute inset-0 brightness-50"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Logo for desktop / Back for mobile */}
      <div className="absolute top-2 left-6 lg:left-16 z-20">
        {/* Mobile view: Back button */}
        <button
          className="text-white text-lg mt-10 font-bold flex items-center gap-1 md:hidden"
          onClick={() => navigate("/landing")}
        >
          ← Back
        </button>

        {/* Desktop view: Logo */}
        <img
          src={logo}
          alt="Garuda Sports Turf Logo"
          className="h-20 w-auto hidden md:block"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 lg:px-20">
        {/* Left Column - Desktop only */}
        <div className="hidden md:flex flex-col justify-center w-1/2 p-6 lg:p-12 text-white">
          <h1 className="text-5xl lg:text-7xl italic font-bold mb-4 leading-tight">
            Welcome Back
          </h1>
          <p className="text-xl lg:text-3xl text-[#14FFEC] font-bold italic mb-8">
            One platform. Zero clashes
          </p>
        </div>

        {/* Right Column - Login Form */}
        <div className="w-full sm:w-[90%] md:w-1/2 max-w-md bg-black/30 rounded-xl p-8 lg:p-12 border border-gray-700 mx-auto">
          <h2 className="text-3xl text-center font-bold mb-4 text-white">
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
