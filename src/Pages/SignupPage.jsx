import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/tlogo.png";
import bgImage from "../assets/bg.jpg";

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import bgImage from "../assets/bg.jpg";

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

      {/* Logo (Desktop Only) */}
      <div className="hidden md:block absolute top-4 left-6 lg:left-16 z-20">
        <img src={logo} alt="Garuda Sports Turf Logo" className="h-20 w-auto" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-10 lg:px-20">
        {/* Left Side - Content (Desktop Only) */}
        <div className="hidden md:flex flex-col justify-center w-full md:w-1/2 lg:w-[40%] max-w-lg md:mr-10 lg:mr-20 text-white">
          <h1 className="text-5xl lg:text-7xl italic font-bold mb-4 leading-tight">
            Join Us
          </h1>
          <p className="text-2xl lg:text-3xl text-[#14FFEC] font-bold italic mb-8">
            Become part of our community
          </p>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full md:w-1/2 lg:w-[40%] max-w-lg bg-black/30 rounded-xl p-6 md:p-10 lg:p-12 border border-gray-700">
          <h2 className="text-3xl lg:text-4xl text-center font-bold mb-4 text-white">
            Sign Up
          </h2>

          {/* Community Text (Mobile Only) */}
          <p className="md:hidden text-xl text-[#14FFEC] text-center font-bold italic mb-6">
            Become part of our community
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#14FFEC]"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#14FFEC]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Mobile Number</label>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#14FFEC]"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#14FFEC] cursor-pointer text-gray-900 font-bold py-3 px-4 rounded-lg transition-all duration-300 mb-4 hover:scale-105"
            >
              Sign Up Now
            </button>

            <div className="text-center">
              <p className="text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#14FFEC] font-bold hover:underline"
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
