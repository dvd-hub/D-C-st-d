import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';
import { Reveal } from './Reveal';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-neutral">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-4">Vanliga frågor</h2>
            <p className="text-gray-600">Här har vi samlat svar på de vanligaste frågorna vi får om våra städtjänster och RUT-avdrag.</p>
          </Reveal>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <Reveal key={index} delay={index * 50}>
              <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className={`font-medium text-lg ${openIndex === index ? 'text-primary' : 'text-secondary'}`}>
                    {item.question}
                  </span>
                  {openIndex === index ? (
                    <Minus className="text-primary flex-shrink-0 ml-4" size={20} />
                  ) : (
                    <Plus className="text-gray-400 flex-shrink-0 ml-4" size={20} />
                  )}
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mx-6 mt-2">
                    {item.answer}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};