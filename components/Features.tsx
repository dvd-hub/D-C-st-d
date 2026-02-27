import React from 'react';
import { FEATURES } from '../constants';
import { Reveal } from './Reveal';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-secondary">Varför välja D&C Städ?</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {FEATURES.map((feature, index) => (
            <Reveal key={feature.id} delay={index * 50}>
              <div className="flex flex-col items-center text-center group p-6 rounded-sm hover:bg-orange-50/50 transition-colors duration-300">
                <div className="mb-6 p-5 rounded-full bg-orange-50 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <feature.icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">Vi levererar kvalitet i varje detalj.</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};