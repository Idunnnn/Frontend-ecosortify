import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          {/* Placeholder Logo di Footer */}
          <div className="w-6 h-6 bg-green-600 rounded-full"></div>
          <span className="text-xl font-bold text-green-400">Ecosortify</span>
        </div>
        <p className="text-sm">Copyright &copy; 2025 Ecosortify</p>
      </div>
    </footer>
  );
};

export default Footer;