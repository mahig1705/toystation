import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Gamepad2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b-4 border-gradient-to-r from-pink-400 to-purple-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
              <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-2xl transform group-hover:scale-110 transition-transform duration-300">
                <Gamepad2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-black bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                TOY STATION
              </h1>
              <p className="text-xs text-gray-500 font-medium">by Ms. Rachna Mehta</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg transform scale-105' 
                  : 'text-gray-700 hover:bg-gradient-to-r hover:from-pink-100 hover:to-orange-100 hover:text-pink-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/catalog"
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                isActive('/catalog') 
                  ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg transform scale-105' 
                  : 'text-gray-700 hover:bg-gradient-to-r hover:from-pink-100 hover:to-orange-100 hover:text-pink-600'
              }`}
            >
              Catalog
            </Link>
            <a
              href="#about"
              className="px-6 py-3 rounded-full font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-pink-100 hover:to-orange-100 hover:text-pink-600 transition-all duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-pink-100 hover:to-orange-100 hover:text-pink-600 transition-all duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:shadow-lg transition-all duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isActive('/') 
                    ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white' 
                    : 'text-gray-700 hover:bg-pink-50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/catalog"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isActive('/catalog') 
                    ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white' 
                    : 'text-gray-700 hover:bg-pink-50'
                }`}
              >
                Catalog
              </Link>
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-lg font-semibold text-gray-700 hover:bg-pink-50 transition-all duration-300"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-lg font-semibold text-gray-700 hover:bg-pink-50 transition-all duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;