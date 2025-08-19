import React from "react";
import { Link } from "react-scroll";
import { useNavigate } from 'react-router-dom';
import Header from "../Components/Header";
import PrimaryButton from "../Components/PrimaryButton";
import bgImage from "../assets/bg.jpg"; // Desktop image (default)
import mobileBgImage from "../assets/lbg.jpg"; // Mobile image

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-[#222831]">
      {/* Hero Section */}
      <section
        id="home"
        className="scroll-mt-24 flex-grow flex items-center justify-center md:justify-start relative py-20 min-h-screen"
      >
        {/* DEFAULT: Desktop background (shown on all screens) */}
        <div
          className="absolute inset-0 brightness-50"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "fixed",
            backgroundAttachment: "fixed",
          }}
        />
        
        {/* MOBILE OVERRIDE: Only shown on screens smaller than md (768px) */}
        <div
          className="absolute inset-0 brightness-50 md:hidden"
          style={{
            backgroundImage: `url(${mobileBgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "fixed",
            backgroundAttachment: "fixed",
          }}
        />
        
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 px-4 md:px-8 text-center md:text-left w-full max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
            TURF XL
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl italic font-semibold text-white mb-4">
            Book. Play. Repeat. 
          </h2>
          <p className="text-lg md:text-2xl italic text-[#14FFEC] mb-8">
            Your turf, your time—just a click away.  
          </p>
          <Link
            to="rules"
            smooth={true}
            duration={500}
            className="inline-block"
          >
            <PrimaryButton className="px-6 py-3 text-lg" onClick={() => navigate('/registration')}>
              Book Now
            </PrimaryButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;