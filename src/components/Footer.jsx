import React from 'react';
// If you are using React Icons (npm i react-icons)
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = ( { top } ) => {
  const links = [
    'Audio Description', 'Help Centre', 'Gift Cards', 'Media Centre',
    'Investor Relations', 'Jobs', 'Terms of Use', 'Privacy',
    'Legal Notices', 'Cookie Preferences', 'Corporate Information', 'Contact Us'
  ];

  return (
    <footer className={`absolute lg:left-100 ${top} bg-black text-[#808080] font-sans py-12 px-6 sm:px-12 md:px-24 select-none`}>
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        
        {/* Social Media Icons */}
        <div className="flex ml-22 lg:ml-45 items-center gap-6 text-white text-lg lg:text-2xl mb-2">
          <a href="#" className="hover:underline cursor-pointer transition-colors duration-200">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:underline cursor-pointer transition-colors duration-200">
            <FaInstagram />
          </a>
          <a href="#" className="hover:underline cursor-pointer transition-colors duration-200">
            <FaTwitter />
          </a>
          <a href="#" className="hover:underline cursor-pointer transition-colors duration-200">
            <FaYoutube />
          </a>
        </div>

        {/* Footer Links Grid */}
        <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-4 text-xs sm:text-sm">
          {links.map((link, index) => (
            <li key={index}>
              <a 
                href="#" 
                className="hover:underline inline-block transition-all duration-200 active:bg-blue-800 active:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright Section */}
        <div className="text-[15px] mt-4 tracking-wide text-[#6c6c6c]">
          © 1997-2026 Netflix, Inc.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;