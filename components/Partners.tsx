import React from 'react';
import { PARTNERS } from '../constants';
import { Reveal } from './Reveal';

export const Partners: React.FC = () => {
  return (
    <section className="py-16 bg-neutral border-b border-gray-200">
      <div className="container mx-auto px-6">
        <Reveal>
          <p className="text-center text-gray-500 font-medium tracking-widest text-sm uppercase mb-10">
            Företag som litar på oss
          </p>
        </Reveal>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70">
          {PARTNERS.map((partner, index) => (
            <Reveal key={partner.id} delay={index * 50}>
              <div className="flex justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer group">
                {partner.url ? (
                  <a 
                    href={partner.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-20 p-4 transition-all hover:scale-105"
                  >
                    {partner.logoUrl ? (
                      <img 
                        src={partner.logoUrl} 
                        alt={`${partner.name} logo`} 
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <div className="h-12 flex items-center justify-center border-2 border-dashed border-gray-300 rounded px-4 w-full group-hover:border-primary/30 group-hover:bg-white hover:shadow-sm transition-all">
                        <span className="text-xs font-bold text-gray-400 group-hover:text-secondary text-center">
                          {partner.name}
                        </span>
                      </div>
                    )}
                  </a>
                ) : (
                  <div className="flex items-center justify-center w-full h-20 p-4">
                     {partner.logoUrl ? (
                      <img 
                        src={partner.logoUrl} 
                        alt={`${partner.name} logo`} 
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <div className="h-12 flex items-center justify-center border-2 border-dashed border-gray-300 rounded px-4 w-full group-hover:border-primary/30 group-hover:bg-white">
                        <span className="text-xs font-bold text-gray-400 group-hover:text-secondary text-center">
                          {partner.name}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};