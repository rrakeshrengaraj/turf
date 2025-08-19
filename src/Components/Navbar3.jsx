import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/tlogo.png";

const Navbar3 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "rules", label: "Rules" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
    { id: "activity", label: "Your Activity", isPageLink: true },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  
  const handleLogout = () => {
    // Add your logout logic here (clear tokens, etc.)
    navigate("/login"); // Redirect to login page after logout
    setMobileMenuOpen(false);
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
          onClick={closeMobileMenu}
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
            className="flex items-center bg-[#14FFEC] cursor-pointer text-black text-xl font-bold py-1 px-4 md:px-6 rounded-lg hover:scale-105 transition-all duration-300"
          >
            <FaSignOutAlt className="w-3 h-3 md:w-4 md:h-4 mr-1.5" />
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-[#393E46] z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300 ease-in-out transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navItems.map((item) =>
            item.isPageLink ? (
              <button
                key={item.id}
                onClick={() => navigate("/activity")}
                className="text-2xl font-medium text-white hover:text-[#14FFEC] cursor-pointer transition-colors duration-200"
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
                className="text-2xl font-medium text-white hover:text-[#14FFEC] cursor-pointer transition-colors duration-200"
                activeClass="!text-[#14FFEC] font-semibold"
                spy={true}
                hashSpy={true}
                isDynamic={true}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            )
          )}

          <button
            onClick={handleLogout}
            className="flex items-center bg-[#14FFEC] text-black text-lg font-bold py-3 px-8 rounded-lg hover:scale-105 transition-all duration-300 mt-4"
          >
            <FaSignOutAlt className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar3;