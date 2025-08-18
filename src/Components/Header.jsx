import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/tlogo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'rules', label: 'Rules' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  const handleLoginClick = () => {
    navigate('/login');
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full py-4 px-4 z-50 transition-all duration-300 ${scrolled ? 'bg-[#393E46] shadow-md' : 'bg-transparent'}`}>
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
            className="h-16 w-16 md:h-20 md:w-20" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex text-xl items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
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
            ))}
          </div>
          
          <button
            onClick={handleLoginClick}
            className="flex text-xl items-center bg-[#14FFEC] cursor-pointer text-black text-sm font-bold py-2 px-4 md:px-6 rounded-lg hover:scale-105 transition-all duration-300"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Login
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
        <div className={`fixed inset-0 bg-[#393E46] z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300 ease-in-out transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navItems.map((item) => (
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
          ))}
          
          <button
            onClick={handleLoginClick}
            className="flex items-center bg-[#14FFEC] text-black text-lg font-bold py-3 px-8 rounded-lg hover:scale-105 transition-all duration-300 mt-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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