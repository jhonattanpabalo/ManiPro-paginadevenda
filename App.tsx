import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Features } from './components/Features';
import { SocialProof } from './components/SocialProof';
import { Offer } from './components/Offer';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <SocialProof />
        <Offer />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
