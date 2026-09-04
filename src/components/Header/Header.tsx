'use client';

import React, { useState } from 'react';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Right Side: Account + Assessment Button */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Account Dropdown Button */}
            <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg
              bg-pink-900 text-white font-medium hover:bg-brown-200 transition-colors
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
              <User size={20} />
              <span>Account</span>
              <ChevronDown size={16} />
            </button>

            {/* Take Assessment Button */}
            <button className="px-6 py-2 rounded-lg bg-red-500 text-white font-semibold
              hover:bg-red-600 transition-colors
              focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2
              whitespace-nowrap">
              Take Assessment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors
            focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-purple-600" />
            ) : (
              <Menu size={24} className="text-purple-600" />
            )}
          </button>
        </div>
      </div>

      <div className="border-b border-gray-200"></div>

        {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center justify-center space-x-8 mt-4">
            <Navigation />
          </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <Navigation isMobile />
          </div>
        </div>
      )}
    </header>
  );
}