import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', sectionId: 'home' },
    { name: 'How it Works', sectionId: 'how-it-works' },
    { name: 'Find Jobs', sectionId: 'find-jobs' },
    { name: 'About', sectionId: 'about' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    
    // If not on home page, navigate to home first then scroll
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
          }
        }
      }, 100);
      return;
    }
    
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
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-sm py-2">
      <nav className="bg-[#5B5FE6] rounded-full mx-4 px-6 py-3 flex items-center justify-between shadow-lg relative">
        {/* Logo */}
        <button 
          onClick={() => {
            scrollToSection('home');
            setIsMenuOpen(false);
          }} 
          className="text-white text-xl font-bold cursor-pointer bg-transparent border-none"
        >
          Mini-Job
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-2">
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

        {/* Desktop Sign Up / Sign In Button */}
        <Link
          to="/auth"
          className="hidden md:block bg-white text-gray-800 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
        >
          Sign Up / Sign In
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 mx-4 p-4 bg-white rounded-2xl shadow-xl flex flex-col gap-4 md:hidden animate-fade-in">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <button
                  key={link.name}
                  onClick={() => {
                    scrollToSection(link.sectionId);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-colors duration-200 text-base font-medium ${
                    isActive 
                      ? 'bg-[#5B5FE6]/10 text-[#5B5FE6]' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            <hr className="border-gray-100" />
            <Link
              to="/auth"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center bg-[#5B5FE6] text-white px-5 py-3 rounded-xl text-base font-medium hover:bg-[#4a4ed4] transition-colors duration-200"
            >
              Sign Up / Sign In
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

