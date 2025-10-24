
import React from 'react';

const NailPolishIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
        <path d="M14.5 2.5a2.5 2.5 0 0 1 5 0V7h-15V2.5a2.5 2.5 0 0 1 5 0"/>
        <path d="M4.5 7v10a2.5 2.5 0 0 0 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5V7"/>
    </svg>
);


export const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <NailPolishIcon />
          <h1 className="text-2xl font-bold text-gray-800">Mani<span className="text-pink-500">Pro</span></h1>
        </div>
        <a href="https://pay.kiwify.com.br/u18yidv" target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-pink-600 transition-colors hidden sm:block">
          Assinar Agora
        </a>
      </div>
    </header>
  );
};