import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          {/* 
            INSTRUCTION: Upload your logo image to the 'public' folder and name it 'logo.png'.
            The code below will then automatically display it.
          */}
          <img 
            src="/logo.png" 
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/180x60/E87722/0056b3?text=D%26C+St%C3%A4d";
            }}
            alt="D&C Städ AB" 
            className="h-16 w-auto object-contain" 
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                isScrolled ? 'text-secondary' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-sm text-sm font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-orange-500/30"
          >
            Boka Gratis Offert
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-secondary' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-secondary' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-secondary font-medium text-lg border-b border-gray-100 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary text-white text-center py-3 rounded-sm font-medium"
          >
            Boka Gratis Offert
          </a>
        </div>
      </div>
    </nav>
  );
};