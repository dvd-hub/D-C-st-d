import React, { useState } from 'react';
import { ArrowRight, X, Check } from 'lucide-react';
import { SERVICES } from '../constants';
import { Reveal } from './Reveal';
import { Service } from '../types';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openModal = (service: Service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-4">Våra Tjänster</h2>
              <p className="text-gray-600">Vi erbjuder ett brett utbud av professionella städtjänster för både privatpersoner och företag i Göteborgsområdet.</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <Reveal key={service.id} delay={index * 100}>
                <div 
                  onClick={() => openModal(service)}
                  className="group p-8 bg-neutral rounded-sm border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full flex flex-col cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={24} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-secondary mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
                    {service.shortDescription}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                      Läs mer <ArrowRight size={16} className="ml-1" />
                    </span>
                  </div>
                  {/* Decorative accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 transition-all group-hover:bg-primary/10"></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-secondary/80 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="bg-white rounded-sm shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative z-10 animate-fade-in-up">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-neutral rounded-full hover:bg-gray-200 transition-colors"
            >
              <X size={20} className="text-secondary" />
            </button>
            
            <div className="p-8 md:p-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <selectedService.icon size={32} />
                </div>
                <h3 className="font-serif text-3xl font-bold text-secondary">{selectedService.title}</h3>
              </div>
              
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>{selectedService.longDescription}</p>
              </div>

              <div className="bg-neutral p-6 rounded-sm mb-8">
                <h4 className="font-bold text-secondary mb-4 uppercase text-xs tracking-widest">Vad ingår?</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-100 pt-8">
                <div className="text-center md:text-left">
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Prisindikation</p>
                  <p className="text-xl font-bold text-secondary">{selectedService.price}</p>
                </div>
                <a 
                  href="#contact" 
                  onClick={closeModal}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-sm font-medium shadow-lg hover:shadow-orange-500/20 transition-all w-full md:w-auto text-center"
                >
                  {selectedService.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};