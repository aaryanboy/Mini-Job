import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', sectionId: 'home' },
    { name: 'How it Works', sectionId: 'how-it-works' },
    { name: 'Find Jobs', sectionId: 'find-jobs' },
    { name: 'About', sectionId: 'about' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset to account for sticky navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#5B5FE6] rounded-full mx-4 mt-4 px-6 py-3 flex items-center justify-between shadow-lg">
      {/* Logo */}
      <button 
        onClick={() => scrollToSection('home')} 
        className="text-white text-xl font-bold cursor-pointer bg-transparent border-none"
      >
        Mini-Job
      </button>

      {/* Navigation Links */}
      <div className="flex items-center gap-2">
        {navLinks.map((link) => {
          const isActive = activeSection === link.sectionId;
          return (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.sectionId)}
              className={`px-4 py-2 text-sm rounded-full transition-colors duration-200 cursor-pointer border-none ${
                isActive 
                  ? 'bg-white text-[#5B5FE6] font-medium' 
                  : 'bg-transparent text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </button>
          );
        })}
      </div>

      {/* Sign Up / Sign In Button */}
      <Link
        to="/auth"
        className="bg-white text-gray-800 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
      >
        Sign Up / Sign In
      </Link>
    </nav>
  );
};

export default Navbar;

