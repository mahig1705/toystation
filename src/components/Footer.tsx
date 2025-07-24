import React from 'react';
import { Heart, Gamepad2, BookOpen, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const openWhatsApp = () => {
    const message = 'Hi! I would like to know more about TOY STATION and your available products.';
    const whatsappUrl = `https://wa.me/917900197763?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gradient-to-r from-purple-900 via-pink-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-pink-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-green-400 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-3 rounded-2xl">
                <Gamepad2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">
                  TOY STATION
                </h3>
                <p className="text-sm text-gray-300">by Ms. Rachna Mehta</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted toy library - Inspiring creativity and learning through play. 
              Discover endless fun with our curated collection of toys and books.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center justify-center gap-2">
              <BookOpen className="w-5 h-5" />
              What We Offer
            </h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                15 Toy Categories
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                15 Book Categories
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                Quality Assured Products
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Personal Service & Care
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center justify-center md:justify-end gap-2">
              <Phone className="w-5 h-5" />
              Get in Touch
            </h4>
            <div className="space-y-4">
              <p className="text-gray-300">
                Have questions? Contact us instantly!
              </p>
              <button
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto md:ml-auto md:mr-0"
              >
                <Phone className="w-5 h-5" />
                WhatsApp Us
              </button>
              <p className="text-xs text-gray-400">
                Mon-Sat: 10AM - 7PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2024 TOY STATION. Made with 
            <Heart className="w-4 h-4 text-pink-400 fill-current animate-pulse" />
            by Ms. Rachna Mehta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;