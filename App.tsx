import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Partners } from './components/Partners';
import { Reviews } from './components/Reviews';
import { RutDeduction } from './components/RutDeduction';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Features />
        <Partners />
        <Reviews />
        <RutDeduction />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;