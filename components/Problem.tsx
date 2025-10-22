
import React from 'react';

export const Problem: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Sua rotina parece familiar? 🤔</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Você anota os horários no caderno, faz contas no fim do mês e ainda sente que está perdendo tempo e dinheiro?
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-pink-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-pink-700">❌ Horários Bagunçados</h3>
            <p className="mt-2 text-gray-600">Encaixes de última hora, cancelamentos e clientes que esquecem o horário viram uma bola de neve.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-700">💸 Financeiro no escuro</h3>
            <p className="mt-2 text-gray-600">É difícil saber exatamente quanto você lucrou no mês depois de pagar todos os produtos e contas.</p>
          </div>
          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-amber-700">🤯 Cansaço e Desorganização</h3>
            <p className="mt-2 text-gray-600">A sensação de que você trabalha muito, mas seu negócio não cresce como deveria.</p>
          </div>
        </div>
        <p className="mt-12 text-xl font-semibold text-gray-700">
          Chega de se perder nas anotações e sentir que seu negócio não decola.
        </p>
      </div>
    </section>
  );
};
