'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menus', label: 'Menus' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/events', label: 'Events' },
    { href: '/weddings', label: 'Weddings' },
    { href: '/functions', label: 'Functions' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="shadow-md" style={{ backgroundColor: '#4079A8' }}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Desktop Layout - Two Rows */}
        <div className="hidden lg:block py-6">
          {/* Top Row - Phone, Logo, Button */}
          <div className="grid grid-cols-3 gap-8 items-center mb-6">
            {/* Left - Phone */}
            <div className="flex justify-start items-center">
              <a
                href="tel:00441624837713"
                className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 text-white px-8 py-2.5 rounded-md transition-colors duration-200 font-semibold flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                01624 837713
              </a>
            </div>

            {/* Center - Logo */}
            <div className="flex justify-center items-center">
              <Link href="/">
                <Image
                  src="/logo-light.png"
                  alt="Sami's at the Bradda Glen"
                  width={300}
                  height={100}
                  priority
                  className="h-auto"
                />
              </Link>
            </div>

            {/* Right - Book a Table Button */}
            <div className="flex justify-end items-center">
              <Link
                href="/book-table"
                className="bg-accent hover:bg-accent-dark text-white px-8 py-2.5 rounded-md transition-colors duration-200 font-semibold flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Table
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-4"></div>

          {/* Bottom Row - Menu */}
          <div className="flex justify-center items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-gray-200 transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex justify-between items-center py-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo-light.png"
              alt="Sami's at the Bradda Glen"
              width={250}
              height={85}
              priority
              className="h-auto w-[175px] md:w-[250px]"
            />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-white hover:text-gray-200 focus:outline-none flex items-center gap-2"
            aria-label="Toggle menu"
          >
            <span className="font-semibold">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed inset-y-0 right-0 w-full bg-white transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
          style={{ backgroundColor: '#4079A8' }}
        >
          <div className="flex flex-col h-full p-8">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-white hover:text-gray-200 mb-8"
              aria-label="Close menu"
            >
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Menu Links */}
            <nav className="flex flex-col space-y-6 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white text-2xl font-semibold hover:text-gray-200 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Book a Table Button */}
            <Link
              href="/book-table"
              className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md transition-colors duration-200 font-semibold text-lg mt-8"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Table
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
