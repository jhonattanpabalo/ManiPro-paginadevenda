import React from 'react';

const FeatureCard = ({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) => (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center space-x-4">
            <span className="text-3xl">{icon}</span>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="mt-4 text-gray-600">
            {children}
        </p>
    </div>
);


export const Features: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Tudo que você precisa para decolar</h2>
                    <p className="mt-4 text-lg text-gray-600">Deixe a tecnologia trabalhar por você.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <FeatureCard icon="📅" title="Agenda Inteligente">
                        Crie, edite e receba lembretes automáticos de cada atendimento. Chega de furos na agenda!
                    </FeatureCard>
                    <FeatureCard icon="👩‍💻" title="Clientes na Mão">
                        Cadastre, acompanhe o histórico de serviços e veja quem são suas clientes mais fiéis.
                    </FeatureCard>
                    <FeatureCard icon="💸" title="Controle Financeiro Simples">
                        Saiba exatamente quanto você ganhou e gastou. Veja seu lucro real em segundos, sem planilhas.
                    </FeatureCard>
                    <FeatureCard icon="📊" title="Dashboard Visual">
                        Gráficos claros que mostram o crescimento do seu estúdio. Tome decisões baseadas em dados, não em achismos.
                    </FeatureCard>
                     <FeatureCard icon="🔒" title="Segurança Total">
                        Seus dados e de suas clientes ficam 100% seguros e protegidos na nuvem. Acesse de onde estiver.
                    </FeatureCard>
                     <FeatureCard icon="🚀" title="Crescimento Acelerado">
                        Com tudo organizado, sobra mais tempo para atender, divulgar seu trabalho e faturar mais.
                    </FeatureCard>
                </div>
            </div>
        </section>
    );
};
