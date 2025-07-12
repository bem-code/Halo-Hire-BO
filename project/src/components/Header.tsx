import React, { useState } from 'react';
import { Menu, X, Briefcase } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="gradient-primary p-2 rounded-lg shadow-primary">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text-primary">Halo Hire</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#jobs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Find Jobs
            </a>
            <a href="#post-job" className="text-gray-700 hover:text-purple-600 font-medium transition-colors text-gradient-hover">
              Post Jobs
            </a>
            <a href="#advertise" className="text-gray-700 hover:text-purple-600 font-medium transition-colors text-gradient-hover">
              Advertise
            </a>
            <a href="#faq" className="text-gray-700 hover:text-purple-600 font-medium transition-colors text-gradient-hover">
              FAQ
            </a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 font-medium transition-colors text-gradient-hover">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#jobs" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Jobs
              </a>
              <a 
                href="#post-job" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Post Jobs
              </a>
              <a 
                href="#advertise" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Advertise
              </a>
              <a 
                href="#faq" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;