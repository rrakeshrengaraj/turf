import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/tlogo.png";

const Navbar2 = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full py-4 px-4 ml-[-8px] z-50 transition-all duration-300 ${
        scrolled ? "bg-[#393E46] shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side - Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          className="flex items-start z-50 cursor-pointer"
        >
          <img
            src={logo}
            alt="Garuda Sports Turf Logo"
            className="h-20 w-20 md:h-24 md:w-28"
          />
        </Link>

        {/* Right Side - Home Button */}
        <div className="flex items-center">
          <button
            onClick={handleLoginClick}
            className="flex items-center bg-[#14FFEC] cursor-pointer text-black text-[1.1rem] font-bold py-1 px-5 md:px-6 rounded-lg hover:scale-105 transition-all duration-300"
          >
            <FaHome className="w-4 h-4 md:w-4 md:h-4 mr-1.5" />
            Home
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar2;