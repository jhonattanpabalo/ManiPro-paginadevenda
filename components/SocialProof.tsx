import React from 'react';

const TestimonialCard = ({ quote, author }: { quote: string; author: string; }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <p className="text-gray-600 italic">"{quote}"</p>
        <p className="mt-4 font-bold text-pink-500">{author}</p>
        <div className="mt-2 text-yellow-400 flex justify-center">
            {'⭐️'.repeat(5)}
        </div>
    </div>
);

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Junte-se a centenas de manicures de sucesso!
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Mais de 300 profissionais já transformaram seus estúdios com o ManiPro.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <TestimonialCard 
            quote="Meu negócio mudou depois desse app! Finalmente tenho controle de tudo e consigo ver meu lucro de verdade." 
            author="Juliana S., São Paulo" 
          />
          <TestimonialCard 
            quote="A agenda inteligente é perfeita. As clientes recebem lembretes e os cancelamentos diminuíram muito." 
            author="Carla M., Rio de Janeiro" 
          />
          <TestimonialCard 
            quote="Super fácil de usar e o visual é lindo. Parece que tenho uma assistente pessoal no bolso. Recomendo!" 
            author="Fernanda L., Belo Horizonte" 
          />
        </div>
      </div>
    </section>
  );
};
