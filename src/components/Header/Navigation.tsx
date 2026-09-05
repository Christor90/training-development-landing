'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface NavigationProps {
  isMobile?: boolean;
}

export default function Navigation({ isMobile = false }: NavigationProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    { label: 'About', href: '#about', hasDropdown: true },
    { label: 'What We Do', href: '#what-we-do', hasDropdown: true },
    { label: 'Jobs', href: '#jobs', hasDropdown: true },
    { label: 'Projects', href: '#projects', hasDropdown: false },
    { label: 'TG Academy', href: '#academy', hasDropdown: false },
    { label: 'Strategic Partnership', href: '#partnership', hasDropdown: false },
    { label: 'Pricing', href: '#pricing', hasDropdown: false },
    { label: 'Book a Consultation', href: '#consultation', hasDropdown: false },
  ];

  if (isMobile) {
    return (
      <div className="space-y-2">
        {navItems.map((item) => (
          <div key={item.label}>
            <button
              onClick={() =>
                item.hasDropdown
                  ? setOpenDropdown(openDropdown === item.label ? null : item.label)
                  : null
              }
              className="w-full text-left px-4 py-2 rounded-lg text-gray-800 font-medium
                hover:bg-gray-50 transition-colors flex items-center justify-between
                focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    openDropdown === item.label ? 'rotate-180' : ''
                  }`}
                />
              )}
            </button>
            {item.hasDropdown && openDropdown === item.label && (
              <div className="pl-4 space-y-1 mt-1">
                <Link href="#" className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-600">
                  Option 1
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-600">
                  Option 2
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  // Desktop Navigation - with proper spacing
  return (
    <div className="flex items-center space-x-6 py-4">
      {navItems.map((item) => (
        <div key={item.label} className="relative group">
          <button
            className="text-gray-800 font-medium text-sm hover:text-[#420932] transition-colors
              flex items-center space-x-1
              pb-1 border-b-2 border-transparent hover:border-purple-600
              focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2 py-1"
          >
            <span>{item.label}</span>
            {item.hasDropdown && <ChevronDown size={16} strokeWidth={2.5} />}
          </button>

          {/* Dropdown Menu - Desktop Only */}
          {item.hasDropdown && (
            <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 
              invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
              <Link href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors first:rounded-t-lg">
                Submenu 1
              </Link>
              <Link href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
                Submenu 2
              </Link>
              <Link href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors last:rounded-b-lg">
                Submenu 3
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}