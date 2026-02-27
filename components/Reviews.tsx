import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../constants';
import { Reveal } from './Reveal';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <Reveal>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-2">Vad våra kunder säger</h2>
              <div className="flex items-center text-accent">
                <span className="text-2xl font-bold mr-2 text-secondary">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" className="text-accent" />
                  ))}
                </div>
                <span className="text-gray-400 ml-2 text-sm">(120+ recensioner på Google)</span>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="hidden md:block">
              {/* Could add carousel navigation buttons here */}
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review, index) => (
            <Reveal key={review.id} delay={index * 100}>
              <div className="bg-neutral p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="flex space-x-1 mb-4 text-accent">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic flex-grow">
                  "{review.text}"
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-gray-200 pt-4">
                  <span className="font-semibold text-secondary text-sm">{review.author}</span>
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        {/* Instructions for developer for Google Places API Integration */}
        {/* 
          TODO: To integrate real Google Reviews:
          1. Enable Google Places API in GCP.
          2. Use Place Details endpoint to fetch reviews using place_id.
          3. Populate the REVIEWS constant or a state variable with the API response.
        */}
      </div>
    </section>
  );
};