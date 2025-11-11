import React from "react";
import { Link } from "react-router"; 
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 

const Footer = () => {
  return (
    <footer className="bg-[#FBFCFC] border-t border-gray-200 pt-12">
      {/* container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-6 ">
        
        {/* Logo + description + Social */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-3">AIventory</h2>
          <p className="text-gray-600 mb-4">
            AIventory helps you manage, track, and explore AI models with ease —
            built for developers and researchers who value security and polish.
          </p>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500 transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-700 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* product */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Product</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link to="/competitions" className="hover:text-gray-900">Competitions</Link></li>
            <li><Link to="/datasets" className="hover:text-gray-900">Datasets</Link></li>
            <li><Link to="/models" className="hover:text-gray-900">Models</Link></li>
            <li><Link to="/notebooks" className="hover:text-gray-900">Notebooks</Link></li>
            <li><Link to="/learn" className="hover:text-gray-900">Learn</Link></li>
            <li><Link to="/discussions" className="hover:text-gray-900">Discussions</Link></li>
          </ul>
        </div>

        {/* DocumentatioN */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Documentation</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link to="/docs/competitions" className="hover:text-gray-900">Competitions</Link></li>
            <li><Link to="/docs/datasets" className="hover:text-gray-900">Datasets</Link></li>
            <li><Link to="/docs/models" className="hover:text-gray-900">Models</Link></li>
            <li><Link to="/docs/notebooks" className="hover:text-gray-900">Notebooks</Link></li>
            <li><Link to="/docs/api" className="hover:text-gray-900">Public API</Link></li>
          </ul>
        </div>

        {/* company */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link to="/team" className="hover:text-gray-900">Our Team</Link></li>
            <li><Link to="/contact" className="hover:text-gray-900">Contact Us</Link></li>
            <li><Link to="/host" className="hover:text-gray-900">Host a Competition</Link></li>
            <li>
              <Link to="/terms" className="hover:text-gray-900">Terms</Link> ·{" "}
              <Link to="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* copyright Button */}
      <div className="pt-4 text-center">
        <div className="px-6 py-2 bg-secondary text-white">
          © {new Date().getFullYear()} AIventory. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
