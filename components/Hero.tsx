
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Mais tempo pra <span className="text-pink-500">atender</span>, menos tempo com <span className="text-purple-500">papelada</span>.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          O app inteligente para manicures e profissionais da beleza que querem controle total de clientes, agenda e finanças — tudo no mesmo lugar.
        </p>
        <a href="https://pay.kiwify.com.br/u18yidv" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block bg-pink-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-pink-600 transform hover:scale-105 transition-all">
          Quero Organizar Meu Estúdio Agora
        </a>
      </div>
    </section>
  );
};