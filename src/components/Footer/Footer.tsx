

'use client';

import { Mail, Phone } from 'lucide-react';
import tobamslog from '../../../public/logo.png'
import Image from 'next/image';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';


export default function Footer() {
  return (
    <footer className="text-white bg-[#170211] pt-7">
      
      {/* Top CTA Section */}
      <section className="px-4 border-b border-gray-800 sm:px-6 lg:px-8 sm:py-10">
        <div className="flex flex-col gap-8 mx-auto md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 text-base text-gray-400 sm:text-base">
              Ready to be a part of something extraordinary?
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-3xl md:text-3xl">
              Let's work together to create a difference
            </h2>
          </div>
          <button className="px-8 py-3 font-semibold text-white transition-colors duration-200 bg-[#571244] rounded-lg hover:bg-[#721157] whitespace-nowrap">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Main Footer Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-4 lg:gap-12">
            
            {/* Column 1: Logo & Bio */}
            <div className="space-y-6">
              
              {/* Logo */}
              <Image src={tobamslog} alt="TOBAMS GROUP Logo" width={200} height={200} loading="eager"/>
              

              {/* Bio */}
              <p className="text-sm leading-relaxed text-gray-400">
                Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
              </p>

              {/* Social Icons */}
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 transition-all duration-200 bg-white rounded-full text-gray-950 hover:bg-pink-400 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={18} strokeWidth={2} />

                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 transition-all duration-200 bg-white rounded-full text-gray-950 hover:bg-pink-400 hover:text-white"
                  aria-label="Instagram"
                >
                  <AiFillInstagram size={18} strokeWidth={2} />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 transition-all duration-200 bg-white rounded-full text-gray-950 hover:bg-pink-400 hover:text-white"
                  aria-label="Twitter"
                >
                  <FaXTwitter size={18} strokeWidth={2} />
                </a>
              </div>
            </div>

            {/* Column 2: What We Do */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">What We Do</h3>
              <ul className="space-y-3">
                {[
                  'Sustainability Services',
                  'Strategy Planning and Implementation',
                  'Tech Talent Solutions',
                  'Training and Development',
                  'IT Consulting Services',
                  'Social Impact',
                  'Talent Recruitment',
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">Company</h3>
              <ul className="space-y-3">
                {[
                  'About',
                  'Jobs',
                  'Projects',
                  'Our Founder',
                  'Business Model',
                  'The Team',
                  'Contact Us',
                  'Blog',
                  'FAQs',
                  'Testimonials',
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Solution */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">Solution</h3>
              <ul className="space-y-3">
                {[
                  'Tobams Group Academy',
                  'Help a Tech Talent',
                  'Campus Ambassadors Program',
                  'Join Our Platform',
                  'Pricing',
                  'Book a Consultation',
                  'Join Our Slack Community',
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Registered Offices Section */}
          <div className=" bg-[#241d22] rounded-lg sm:p-8 p-8">
           <h4 className="mb-4 text-lg font-bold text-white">Registered Offices</h4>
            <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-3">
              
              <div>
                <h4 className="mb-4 text-sm font-bold text-red-500">United Kingdom</h4>
                <p className="mb-2 text-sm text-gray-300">
                  07451196 (Registered by Company House)
                </p>
                <p className="text-sm text-gray-400">
                  Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
                </p>
              </div>

              <div>
                <h4 className="mb-4 text-sm font-bold text-red-500">Nigeria</h4>
                <p className="mb-2 text-sm text-gray-300">
                  RC 1048722 (Registered by the Corporate Affairs Commission)
                </p>
                <p className="text-sm text-gray-400">
                  4, Muaz Close, Angwar-Rimi
                </p>
              </div>
            {/* Contact Information */}
            <div className="">
              <h4 className="mb-6 text-sm font-bold text-white">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-red-500" />
                  <a
                    href="mailto:theteam@tobamsgroup.com"
                    className="text-sm text-gray-300 transition-colors duration-200 hover:text-white"
                  >
                    theteam@tobamsgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-red-500" />
                  <a
                    href="tel:+447886600748"
                    className="text-sm text-gray-300 transition-colors duration-200 hover:text-white"
                  >
                    +447886600748
                  </a>
                </div>
              </div>
            </div>
            </div>

          </div>
        </div>
      </section>

      {/* Copyright & Links */}
      <section className="px-4 py-8 border-t border-gray-800 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 mx-auto text-sm max-w-7xl md:flex-row md:items-center md:justify-between">
          <p className="text-gray-500">
            Copyright © Tobams Group, 2024. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-500 transition-colors duration-200 hover:text-white"
            >
              Terms and Conditions
            </a>
            <a
              href="#"
              className="text-gray-500 transition-colors duration-200 hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 transition-colors duration-200 hover:text-white"
            >
              Cookies Policy
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}