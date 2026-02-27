import React from 'react';
import { ArrowRight, Calculator } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { Reveal } from './Reveal';

export const RutDeduction: React.FC = () => {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background pattern - lighter orange overlay */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-white/10 skew-x-12 transform translate-x-40"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-black/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
                Spara upp till {COMPANY_INFO.rutDeduction}% med RUT-avdraget
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed font-light">
                Som privatperson betalar du endast 50% av arbetskostnaden för städtjänster. 
                Vi drar av beloppet direkt på fakturan och sköter all administration med Skatteverket åt dig.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center font-bold mr-4 shadow-sm shrink-0">1</div>
                  <span className="font-medium">Du bokar en tjänst hos oss.</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center font-bold mr-4 shadow-sm shrink-0">2</div>
                  <span className="font-medium">Vi utför arbetet och fakturerar dig halva arbetskostnaden.</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center font-bold mr-4 shadow-sm shrink-0">3</div>
                  <span className="font-medium">Vi hanterar resten med Skatteverket. Enkelt!</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:w-1/3 w-full">
            <Reveal delay={200}>
              <div className="bg-white text-secondary p-8 rounded-sm shadow-2xl border-t-4 border-secondary/20">
                <div className="flex items-center mb-6">
                  <Calculator className="text-primary w-8 h-8 mr-3" />
                  <h3 className="font-serif text-2xl font-bold">RUT-avdrag</h3>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="text-center py-6">
                    <p className="text-lg text-gray-600 mb-2">Du betalar endast</p>
                    <p className="text-5xl font-bold text-primary mb-2">50%</p>
                    <p className="text-gray-600">av arbetskostnaden</p>
                  </div>
                </div>
                <a 
                  href="https://www.skatteverket.se" 
                  target="_blank" 
                  rel="noreferrer"
                  className="block w-full text-center border-2 border-secondary text-secondary py-3 font-medium hover:bg-secondary hover:text-white transition-colors rounded-sm"
                >
                  Läs mer på Skatteverket
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};