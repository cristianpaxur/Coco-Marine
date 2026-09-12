import React from 'react';
import { Star, Fish, UtensilsCrossed, Users } from 'lucide-react';

export const HighlightsGrid: React.FC = () => {
  const highlights = [
    {
      icon: <Star className="w-6 h-6 fill-[#c59b27] text-[#c59b27]" />,
      title: '4.8 / 5.0',
      subtitle: 'Avaliação Google Places Gonzaga',
      stars: '★★★★★',
    },
    {
      icon: <Fish className="w-6 h-6 text-[#c59b27]" />,
      title: '100% Fresco',
      subtitle: 'Pescados Nobres do Dia',
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6 text-[#c59b27]" />,
      title: 'Almoço & Jantar',
      subtitle: 'Menu Executivo e À La Carte',
    },
    {
      icon: <Users className="w-6 h-6 text-[#c59b27]" />,
      title: 'Eventos & Reservas',
      subtitle: 'Salão Privativo para Grupos',
    },
  ];

  return (
    <section className="w-full bg-[#f7f5f1] py-8 sm:py-10 border-b border-[#e2ded5]/60">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#e2ded5]/80 shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-[#c59b27]/10 border border-[#c59b27]/25 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-[17px] sm:text-[18px] text-[#102236] font-bold flex items-center gap-1.5 leading-tight">
                  <span>{item.title}</span>
                  {item.stars && (
                    <span className="text-[12px] text-[#c59b27] tracking-tight">{item.stars}</span>
                  )}
                </div>
                <p className="text-[13px] text-[#475569] mt-0.5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
