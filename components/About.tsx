import React from 'react';
import { ABOUT_CONTENT } from '../constants';
import { Reveal } from './Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral border-t border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-6">
                {ABOUT_CONTENT.headline}
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                {ABOUT_CONTENT.text.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            {/* Team Snippet */}
            <Reveal delay={200}>
              <div className="mt-10 p-6 bg-white border-l-4 border-primary shadow-sm rounded-r-sm">
                <p className="italic text-secondary font-medium">
                  "Vi är ett team av erfarna och försäkrade städare som brinner för att leverera perfekta resultat varje dag."
                </p>
              </div>
            </Reveal>
          </div>

          {/* Values Grid */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ABOUT_CONTENT.values.map((value, index) => (
                <Reveal key={value.id} delay={index * 100}>
                  <div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="w-12 h-12 bg-secondary/5 rounded-full flex items-center justify-center mb-4 text-primary">
                      <value.icon size={24} />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-secondary mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};