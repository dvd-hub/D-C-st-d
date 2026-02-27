import React from 'react';
import { Sparkles, Instagram, Facebook } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS, SERVICES } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-gray-700 pb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block mb-6">
              <img 
                src="/logo.png" 
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/180x60/E87722/0056b3?text=D%26C+St%C3%A4d";
                }}
                alt="D&C Städ AB" 
                className="h-14 w-auto object-contain bg-white/10 rounded p-2" 
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professionell städning med fokus på kvalitet och nöjda kunder i Göteborg med omnejd.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Snabblänkar</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Tjänster</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map(service => (
                <li key={service.id}>
                  <a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Kontakt</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <span className="block text-white font-medium min-w-[60px]">Telefon:</span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-primary transition-colors">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-start">
                <span className="block text-white font-medium min-w-[60px]">Email:</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-primary transition-colors">{COMPANY_INFO.email}</a>
              </li>
              <li className="flex items-start">
                <span className="block text-white font-medium min-w-[60px]">Adress:</span>
                <span>{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. Alla rättigheter reserverade.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Integritetspolicy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};