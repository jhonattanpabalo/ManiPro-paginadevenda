import React, { useState } from 'react';

const FaqItem = ({ question, answer }: { question: string; answer: string; }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </span>
            </button>
            {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
        </div>
    )
}

export const FAQ: React.FC = () => {
    return (
        <section className="py-20 bg-pink-50">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-10">Dúvidas Frequentes</h2>
                <div className="space-y-4">
                    <FaqItem
                        question="Posso usar no celular e no computador?"
                        answer="✅ Sim! O ManiPro é totalmente responsivo e funciona perfeitamente no seu celular, tablet ou computador. Seus dados são sincronizados em todos os seus aparelhos."
                    />
                    <FaqItem
                        question="Meus dados ficam seguros?"
                        answer="✅ Sim, 100% seguros. Usamos a mesma tecnologia de segurança de grandes empresas para proteger suas informações e de suas clientes. Tudo fica salvo na nuvem."
                    />
                    <FaqItem
                        question="Preciso pagar algo para testar?"
                        answer="✅ Sim, mas oferecemos uma garantia de satisfação. Se você não gostar nos primeiros 7 dias, devolvemos seu dinheiro. Sem perguntas."
                    />
                    <FaqItem
                        question="Consigo importar meus dados antigos?"
                        answer="✅ Sim! Se você já usa uma planilha de Excel para controlar suas finanças, pode importá-la para o ManiPro com apenas alguns cliques e começar a usar na hora."
                    />
                    <FaqItem
                        question="Como funciona o cancelamento?"
                        answer="✅ Você pode cancelar sua assinatura a qualquer momento, diretamente no app, sem burocracia ou taxas. Simples e rápido."
                    />
                </div>
            </div>
        </section>
    );
};
