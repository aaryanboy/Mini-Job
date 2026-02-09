import { Link } from 'react-router-dom';

const Footer = () => {
  const links = {
    jobSeekers: [
      { name: 'Browse Jobs', href: '/find-jobs' },
      { name: 'Salary Guide', href: '/salary' },
      { name: 'Career Advice', href: '/advice' },
    ],
    employers: [
      { name: 'Post a Job', href: '/post-job' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Resources', href: '/resources' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  const SocialIcon = ({ path }: { path: string }) => (
    <div className="w-10 h-10 rounded-full bg-[#5B5FE6] flex items-center justify-center text-white hover:bg-[#4a4ed4] transition-colors cursor-pointer">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d={path} />
      </svg>
    </div>
  );

  return (
    <footer className="bg-white pt-24 pb-8 px-4 relative overflow-hidden">
      {/* Decorative Spheres */}
      <div className="absolute top-10 left-[10%] w-12 h-12 rounded-full bg-gradient-to-br from-[#8E92FF] to-[#5B5FE6] opacity-60 blur-sm" />
      <div className="absolute top-0 right-[15%] w-20 h-20 rounded-full bg-gradient-to-br from-[#8E92FF] to-[#5B5FE6] opacity-80 blur-md" />
      <div className="absolute bottom-1/3 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-[#8E92FF] to-[#5B5FE6] opacity-50 blur-sm" />
      <div className="absolute bottom-20 left-1/3 w-4 h-4 rounded-full bg-gradient-to-br from-[#8E92FF] to-[#5B5FE6] opacity-40 blur-[1px]" />
      <div className="absolute top-1/2 right-4 w-6 h-6 rounded-full bg-gradient-to-br from-[#8E92FF] to-[#5B5FE6] opacity-60 blur-sm" />
      <div className="absolute bottom-10 right-[25%] w-10 h-10 rounded-full bg-gradient-to-br from-[#8E92FF] to-[#5B5FE6] opacity-50 blur-sm" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          
          {/* Brand & Tagline */}
          <div className="max-w-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Mini-Job</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight uppercase">
              Connecting Talented<br />
              Professionals<br />
              With<br />
              Amazing Opportunities.
            </h1>
          </div>

          {/* Links Columns */}
          <div className="flex flex-wrap gap-12 lg:gap-24">
            {/* Job Seekers */}
            <div>
              <h3 className="font-bold text-gray-900 mb-6 text-lg">For Job Seekers</h3>
              <ul className="space-y-4">
                {links.jobSeekers.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-gray-500 hover:text-[#5B5FE6] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Employers */}
            <div>
              <h3 className="font-bold text-gray-900 mb-6 text-lg">For Employers</h3>
              <ul className="space-y-4">
                {links.employers.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-gray-500 hover:text-[#5B5FE6] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-gray-900 mb-6 text-lg">Company</h3>
              <ul className="space-y-4">
                {links.company.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-gray-500 hover:text-[#5B5FE6] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 mt-16 gap-8">
          
          <div className="flex flex-wrap gap-6 text-sm text-gray-500">
             <Link to="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
             <Link to="/terms" className="hover:text-gray-900">Terms & Conditions</Link>
             <Link to="/principles" className="hover:text-gray-900">Publishing Principles</Link>
          </div>

          <div className="flex items-center gap-4">
             {/* Social Icons */}
             <div className="flex gap-4 mb-4 md:mb-0 mr-8">
                {/* LinkedIn */}
                <SocialIcon path="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                {/* X (Twitter) */}
                <SocialIcon path="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                {/* Instagram */}
                <SocialIcon path="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                {/* Facebook */}
                <SocialIcon path="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
             </div>
             
             <p className="text-gray-400 font-medium">© 2025 MINIJOB™</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
