
import React from 'react';

export const Offer: React.FC = () => {
  return (
    <section id="offer" className="bg-purple-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Tudo isso por um preço que cabe no seu bolso.</h2>
        <p className="mt-4 text-purple-200 text-lg">
          Tenha um sistema completo para gerenciar seu estúdio, do jeito que os grandes salões fazem.
        </p>
        <div className="mt-8 bg-white text-gray-800 rounded-xl max-w-lg mx-auto p-8 shadow-2xl">
          <h3 className="text-2xl font-bold">Plano ManiPro</h3>
          <p className="text-gray-500 mt-2">Acesso completo. Sem pegadinhas.</p>
          <div className="my-6">
            <span className="text-5xl font-extrabold">R$9,90</span>
            <span className="text-xl font-semibold text-gray-600">/mês</span>
          </div>
          <ul className="text-left space-y-3 text-gray-700">
            <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> Agenda e Clientes Ilimitados</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> Controle Financeiro Completo</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> Dashboard com Gráficos</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> Lembretes Automáticos</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> Suporte Prioritário</li>
          </ul>
          <a href="https://pay.kiwify.com.br/MYEYrzF" target="_blank" rel="noopener noreferrer" className="mt-8 w-full inline-block bg-pink-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-pink-600 transform hover:scale-105 transition-all">
            👉 Quero Começar Agora
          </a>
          <p className="mt-4 text-sm text-gray-500">Cancele quando quiser. Sem burocracia.</p>
        </div>
      </div>
    </section>
  );
};