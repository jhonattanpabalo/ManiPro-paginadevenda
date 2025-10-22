import React from 'react';

const NailPolishIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
        <path d="M14.5 2.5a2.5 2.5 0 0 1 5 0V7h-15V2.5a2.5 2.5 0 0 1 5 0"/>
        <path d="M4.5 7v10a2.5 2.5 0 0 0 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5V7"/>
    </svg>
);


export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12 text-center">
        <div className="flex justify-center items-center space-x-2">
           <NailPolishIcon />
           <h2 className="text-2xl font-bold">Mani<span className="text-pink-500">Pro</span></h2>
        </div>
        <p className="mt-4 text-gray-400">
          Organize seu estúdio, encante suas clientes e veja seu negócio crescer.
        </p>
        <a href="#offer" className="mt-8 inline-block bg-pink-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-pink-600 transform hover:scale-105 transition-all">
          💅 Começar Agora por R$9,90/mês
        </a>
        <p className="mt-8 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ManiPro. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
