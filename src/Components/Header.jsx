import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/tlogo.png';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if path matches nav item
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed w-full py-4 px-4 z-50 transition-all duration-300 ${scrolled ? 'bg-[#323232] shadow-md' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
         <NavLink to="/" className="flex items-start">
          <img 
            src={logo} 
            alt="Garuda Sports Turf Logo"
            className="h-26 w-26" // Adjust size as needed
          />
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center text-xl space-x-8">
          <div className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `font-medium ${isActive ? 'text-[#14FFEC]' : scrolled ? 'text-white hover:text-[#14FFEC]' : 'text-white hover:text-[#14FFEC]'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `font-medium ${isActive ? 'text-[#14FFEC]' : scrolled ? 'text-white hover:text-[#14FFEC]' : 'text-white hover:text-[#14FFEC]'}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/rules" 
              className={({ isActive }) => 
                `font-medium ${isActive ? 'text-[#14FFEC]' : scrolled ? 'text-white hover:text-[#14FFEC]' : 'text-white hover:text-[#14FFEC]'}`
              }
            >
              Rules
            </NavLink>
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => 
                `font-medium ${isActive ? 'text-[#14FFEC]' : scrolled ? 'text-white hover:text-[#14FFEC]' : 'text-white hover:text-[#14FFEC]'}`
              }
            >
              Gallery
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `font-medium ${isActive ? 'text-[#14FFEC]' : scrolled ? 'text-white hover:text-[#14FFEC]' : 'text-white hover:text-[#14FFEC]'}`
              }
            >
              Contact
            </NavLink>
          </div>
          
          {/* Login Button */}
          <button onClick={handleLoginClick} className="flex items-center mr-[-70px] bg-[#14FFEC] cursor-pointer hover:bg-[#14FFEC] text-black font-medium py-2 px-6 rounded-lg transition-colors duration-300 hover:scale-105">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;