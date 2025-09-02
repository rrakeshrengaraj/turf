// After Login


import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/tlogo.png";

const Navbar3 = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "rules", label: "Rules" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
    { id: "activity", label: "Your Activity", isPageLink: true },
  ];

  const handleLogout = () => {
    // Add your logout logic here (clear tokens, etc.)
    navigate("/login"); // Redirect to login page after logout
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full py-4 px-4 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#393E46] shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex text-xl items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) =>
              item.isPageLink ? (
                <button
                  key={item.id}
                  onClick={() => navigate("/activity")}
                  className="font-medium text-white hover:text-[#14FFEC] cursor-pointer transition-colors duration-200"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="font-medium text-white hover:text-[#14FFEC] cursor-pointer transition-colors duration-200"
                  activeClass="!text-[#14FFEC] font-semibold"
                  spy={true}
                  hashSpy={true}
                  isDynamic={true}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center bg-red-600 cursor-pointer text-black text-xl font-bold py-1 px-4 md:px-6 rounded-lg hover:scale-105 transition-all duration-300"
          >
            <FaSignOutAlt className="w-3 h-3 md:w-4 md:h-4 mr-1.5" />
            Logout
          </button>
        </div>

        {/* Mobile Navigation - Only shows Your Activity and Logout */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => navigate("/activity")}
            className="text-sm font-medium text-white hover:text-[#14FFEC] cursor-pointer transition-colors duration-200"
          >
            Your Activity
          </button>
          
          <button
            onClick={handleLogout}
            className="flex items-center bg-red-600 cursor-pointer text-black text-sm font-bold py-1 px-3 rounded-lg hover:scale-105 transition-all duration-300"
          >
            <FaSignOutAlt className="w-3 h-3 mr-1" />
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar3;