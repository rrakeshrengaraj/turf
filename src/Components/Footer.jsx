import React from "react";
import { Link } from "react-scroll";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

const Footer = () => {
  const footerLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "gallery", label: "Gallery" },
    { id: "rules", label: "Rules" },
    { id: "contact", label: "Contact" } // Changed from /booking to contact section
  ];

  const socialMedia = [
    { icon: <FaInstagram className="h-6 w-6" />, url: "https://instagram.com/garudaturf", label: "Instagram" },
    { icon: <FaYoutube className="h-6 w-6" />, url: "https://youtube.com/garudaturf", label: "YouTube" },
    { icon: <FaTwitter className="h-6 w-6" />, url: "https://twitter.com/garudaturf", label: "Twitter" }
  ];

  return (
    <footer id="contact" className="bg-[#393E46] text-gray-300 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-[#14FFEC] text-lg font-bold mb-4">GARUDA TURF</h3>
            <p className="text-gray-400">
              Premier sports destination offering top-class facilities for football, 
              cricket and other outdoor games with international standard turfs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#14FFEC] text-lg font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <Link 
                    to={link.id} 
                    smooth={true}
                    duration={500}
                    className="hover:text-[#14FFEC] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#14FFEC] text-lg font-bold mb-4">CONTACT US</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <HiLocationMarker className="w-5 h-5 mr-2 text-[#14FFEC]" />
                123 Turf Road, Sports City
              </li>
              <li className="flex items-center">
                <HiPhone className="w-5 h-5 mr-2 text-[#14FFEC]" />
                +91 98765 43210
              </li>
              <li className="flex items-center">
                <HiMail className="w-5 h-5 mr-2 text-[#14FFEC]" />
                info@garudaturf.com
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            {socialMedia.map((social) => (
              <a 
                key={social.label}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#14FFEC] transition-colors"
              >
                <span className="sr-only">{social.label}</span>
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Garuda Turf. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;