import React from 'react';
import { Check } from 'lucide-react';
import { Reveal } from './Reveal';
import { HERO_CONTENT } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1920&auto=format&fit=crop" 
          alt="Rent och modernt kök" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Gradient overlay: Darker at bottom/left for text readability, but with a warm tone */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-primary/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-2xl text-white">
          <Reveal delay={100}>
            <div className="flex space-x-4 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/90 backdrop-blur-md text-white shadow-sm border border-primary/50">
                <Check className="w-3 h-3 mr-1 text-white" /> RUT-avdrag godkänt
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-white">
                <Check className="w-3 h-3 mr-1 text-primary" /> 100% Nöjdhetsgaranti
              </span>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-sm">
              {HERO_CONTENT.headline}
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-lg md:text-xl text-gray-100 mb-10 font-light leading-relaxed max-w-lg drop-shadow-sm">
              {HERO_CONTENT.subHeadline}
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-primary text-white font-medium rounded-sm text-center transition-all hover:bg-orange-600 hover:-translate-y-1 shadow-lg shadow-orange-900/30 border border-primary"
              >
                Boka Direkt →
              </a>
              <a 
                href="#services" 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white text-white font-medium rounded-sm text-center transition-all hover:bg-white hover:text-secondary hover:-translate-y-1"
              >
                Se Våra Tjänster
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};