import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { Reveal } from './Reveal';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Hemstädning',
    message: '',
    rut: 'yes',
    type: 'private',
    date: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integration logic for Formspree or Netlify would go here.
    // Example: fetch('https://formspree.io/f/yourid', { method: 'POST', body: ... })
    alert("Tack för din förfrågan! Vi återkommer inom kort.");
    console.log(formData);
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <Reveal>
            <div>
              <h2 className="font-serif text-4xl font-bold text-secondary mb-6">Kontakta Oss</h2>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                Är du redo att uppleva skillnaden med professionell städning? 
                Fyll i formuläret nedan för ett kostnadsfritt och skräddarsytt anbud. 
                Vi återkommer vanligtvis inom 24 timmar.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-neutral rounded-sm shadow-sm flex items-center justify-center text-primary mr-4 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Ring oss</h4>
                    <p className="text-gray-600">{COMPANY_INFO.phone}</p>
                    <p className="text-xs text-gray-500 mt-1">{COMPANY_INFO.hours}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-neutral rounded-sm shadow-sm flex items-center justify-center text-primary mr-4 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Maila oss</h4>
                    <p className="text-gray-600">{COMPANY_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-neutral rounded-sm shadow-sm flex items-center justify-center text-primary mr-4 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Besök oss</h4>
                    <p className="text-gray-600">{COMPANY_INFO.address}</p>
                  </div>
                </div>
              </div>

              {/* Booking System Placeholder */}
              <div id="booking-system" className="mt-12 p-6 border-2 border-dashed border-gray-300 rounded-sm text-center">
                <p className="text-gray-400 text-sm font-medium">Bokningssystem integration (Calendly/Bokadirekt)</p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={200}>
            <form onSubmit={handleSubmit} className="bg-neutral p-8 md:p-10 rounded-sm shadow-lg">
              <h3 className="font-serif text-2xl font-bold text-secondary mb-8">Få en offert</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Namn</label>
                  <input 
                    required 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Ditt namn"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                  <input 
                    required 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="070..."
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">E-post</label>
                <input 
                  required 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="namn@exempel.se"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tjänst</label>
                  <select 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  >
                    <option value="Hemstädning">Hemstädning</option>
                    <option value="Flyttstädning">Flyttstädning</option>
                    <option value="Kontorsstädning">Kontorsstädning</option>
                    <option value="Fönsterputs">Fönsterputs</option>
                    <option value="Byggstädning">Byggstädning</option>
                    <option value="Trappstädning">Trappstädning</option>
                    <option value="Annan">Annan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Önskat Datum</label>
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Kundtyp</label>
                <div className="flex space-x-6">
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="radio" 
                      name="type" 
                      value="private"
                      checked={formData.type === 'private'}
                      onChange={handleChange}
                      className="mr-2 text-primary focus:ring-primary"
                    />
                    <span className="text-gray-600">Privatperson</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="radio" 
                      name="type" 
                      value="company"
                      checked={formData.type === 'company'}
                      onChange={handleChange}
                      className="mr-2 text-primary focus:ring-primary"
                    />
                    <span className="text-gray-600">Företag</span>
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Meddelande</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Beskriv vad du behöver hjälp med..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-sm shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center"
              >
                <Send size={18} className="mr-2" /> Skicka Förfrågan
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};