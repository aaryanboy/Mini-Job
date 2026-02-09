import { Link, useLocation } from 'react-router-dom';
import Button from '../common/Button';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How it Works', path: '/how-it-works' },
    { name: 'Find Jobs', path: '/find-jobs' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="bg-[#5B5FE6] rounded-full mx-4 mt-4 px-6 py-3 flex items-center justify-between shadow-lg">
      {/* Logo */}
      <Link to="/" className="text-white text-xl font-bold">
        Mini-Job
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-2">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Button
              key={link.name}
              href={link.path}
              variant={isActive ? 'navActive' : 'nav'}
              className="px-4 py-2 text-sm"
            >
              {link.name}
            </Button>
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

