'use client';

import React, { useEffect, useRef, useState } from 'react';
import { RESTAURANT_INFO, DIRECT_IMAGE_LINKS } from '../data/restaurantData';
import { CheckCircle, ShieldCheck, Utensils, Star, Wine, Fish } from 'lucide-react';

interface HeroSectionProps {
  onExploreMenu?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreMenu,
}) => {
  const heroImage = DIRECT_IMAGE_LINKS.find((img) => img.id === 'hero-ambience');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero-parallax-section"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#f5f1ea] via-[#faf8f5] to-[#fbf9f6] border-b border-[#e2ded5]/40 min-h-[640px] lg:min-h-[740px] flex items-center pt-24 pb-12 sm:pb-16"
    >
      {/* Background with Interactive Subtle Parallax Depth */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {heroImage && (
          <div
            id="parallax-bg"
            className="absolute -top-[10%] -bottom-[10%] -left-[5%] -right-[5%] w-[110%] h-[120%] bg-cover bg-center transition-transform duration-700 ease-out will-change-transform"
            style={{
              backgroundImage: `url('${heroImage.url}')`,
              transform: `translate3d(${mousePos.x * -18}px, ${mousePos.y * -14}px, 0) scale(1.05)`,
              filter: 'brightness(1.02) saturate(1.08)',
            }}
          />
        )}
      </div>

      {/* Luminous Pearl Overlays for pristine readability */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-r from-[#faf8f5]/95 via-[#faf8f5]/85 to-[#faf8f5]/50 lg:via-[#faf8f5]/75 lg:to-transparent" />
      <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-t from-[#faf8f5] via-transparent to-[#faf8f5]/40" />
      <div className="absolute inset-0 z-1 pointer-events-none opacity-20 bg-[radial-gradient(#c59b27_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div
            id="parallax-content"
            className="lg:col-span-7 flex flex-col items-start justify-center transition-transform duration-500 ease-out"
            style={{
              transform: `translate3d(${mousePos.x * 8}px, ${mousePos.y * 6}px, 0)`,
            }}
          >
            {/* Gastronomic Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#c59b27]/35 shadow-xs mb-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c59b27] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c59b27]"></span>
              </span>
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.18em] text-[#102236] font-bold">
                Gastronomia Costeira • Gonzaga, Santos
              </span>
            </div>

            {/* Display Heading */}
            <h1 className="font-serif text-[36px] sm:text-[46px] lg:text-[54px] text-[#102236] font-bold mb-5 tracking-tight leading-[1.12]">
              A Essência dos Frutos do Mar em Santos
            </h1>

            {/* Subtitle Description */}
            <p className="text-[16px] sm:text-[17px] text-[#475569] max-w-[580px] mb-8 leading-relaxed backdrop-blur-2xs">
              Ingredientes frescos criteriosamente selecionados da costa santista, nobreza nos preparos marítimos contemporâneos e um ambiente acolhedor e requintado a poucos passos da praia.
            </p>

            {/* Conversion CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              {/* WhatsApp Main Button */}
              <a
                id="hero-whatsapp-cta"
                href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20reserva%20no%20Coco%20Marine`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#15803d] hover:bg-[#166534] text-white text-[15px] px-7 py-3.5 sm:py-4 rounded-full shadow-md hover:shadow-xl transition-all font-semibold group transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.3-.778.98-.954 1.18-.175.2-.351.226-.652.075-.3-.15-1.268-.468-2.416-1.492-.894-.798-1.498-1.784-1.674-2.085-.175-.3-.019-.462.132-.612.136-.135.301-.35.452-.526.15-.175.2-.3.301-.5.101-.2.05-.376-.025-.526-.076-.15-.678-1.634-.929-2.238-.244-.588-.493-.509-.678-.518l-.578-.01c-.2 0-.526.075-.802.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.549.718.311 1.28.497 1.717.636.723.23 1.38.198 1.901.12.579-.087 1.78-.727 2.031-1.428.251-.702.251-1.303.176-1.428-.076-.126-.276-.201-.577-.351zM12.04 2c-5.52 0-10 4.48-10 10 0 1.765.46 3.425 1.266 4.872L2 22l5.305-1.26c1.39.757 2.975 1.19 4.735 1.19 5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
                </svg>
                <span>Reservar Mesa via WhatsApp</span>
                <span className="inline-block bg-white/25 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full ml-1 backdrop-blur-xs">
                  Confirmação Rápida
                </span>
              </a>

              {/* View Menu Button */}
              <a
                id="hero-menu-cta"
                href="#cardapio"
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2 bg-white/95 backdrop-blur-md hover:bg-white text-[#102236] text-[15px] px-6 py-3.5 sm:py-4 rounded-full border border-[#e2ded5] hover:border-[#c59b27]/60 transition-all font-medium text-center shadow-xs hover:shadow-md"
              >
                <span>Ver Cardápio & Pratos</span>
                <Utensils className="w-4 h-4 text-[#c59b27]" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-[#e2ded5]/80 flex flex-wrap items-center gap-4 sm:gap-6 text-[#475569]">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#e2ded5]/60 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#c59b27]" />
                <span className="text-[13px] font-semibold text-[#102236]">Reserva Direta WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#e2ded5]/60 shadow-2xs">
                <CheckCircle className="w-4 h-4 text-[#c59b27]" />
                <span className="text-[13px] font-semibold text-[#102236]">Valet Cortesia no Local</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Interactive Glass Gastronomy Badges */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex flex-col gap-4">
            {/* Floating Card 1: Pescados Nobres */}
            <div
              className="bg-white/85 backdrop-blur-md border border-[#c59b27]/25 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/95 transform hover:-translate-y-1"
              style={{
                transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 10}px, 0)`,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#c59b27]/15 border border-[#c59b27]/30 flex items-center justify-center text-[#c59b27] flex-shrink-0">
                    <Fish className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#c59b27] block">
                      Frescor Litorâneo
                    </span>
                    <h4 className="text-[17px] font-bold text-[#102236]">Pescados Nobres do Dia</h4>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#c59b27] bg-[#c59b27]/10 border border-[#c59b27]/20 px-2.5 py-1 rounded-full">
                  100% Fresco
                </span>
              </div>
              <p className="text-[13px] text-[#475569] mt-2.5 leading-normal">
                Ostras depuradas, lagostas da costa e polvo na brasa preparados no ponto exato.
              </p>
            </div>

            {/* Floating Card 2: Rating & Gonzaga Top Pick */}
            <div
              className="bg-white/85 backdrop-blur-md border border-[#c59b27]/25 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/95 sm:ml-0 lg:ml-6 transform hover:-translate-y-1"
              style={{
                transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 15}px, 0)`,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#c59b27]/15 border border-[#c59b27]/30 flex items-center justify-center text-[#c59b27] flex-shrink-0">
                    <Star className="w-6 h-6 fill-[#c59b27]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-[18px] font-bold text-[#102236]">{RESTAURANT_INFO.rating} / 5.0</h4>
                      <span className="text-[#c59b27] text-[13px]">★★★★★</span>
                    </div>
                    <p className="text-[13px] text-[#475569] font-medium">
                      Avaliação 4.8 no Google Places ({RESTAURANT_INFO.totalReviews} avaliações)
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#15803d] bg-[#15803d]/10 border border-[#15803d]/20 px-2.5 py-1 rounded-full">
                  Top Gonzaga
                </span>
              </div>
            </div>

            {/* Floating Card 3: Wine Cellar & Pairings */}
            <div
              className="bg-white/85 backdrop-blur-md border border-[#c59b27]/25 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/95 transform hover:-translate-y-1"
              style={{
                transform: `translate3d(${mousePos.x * 14}px, ${mousePos.y * 12}px, 0)`,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#c59b27]/15 border border-[#c59b27]/30 flex items-center justify-center text-[#c59b27] flex-shrink-0">
                    <Wine className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#c59b27] block">
                      Carta Harmonizada
                    </span>
                    <h4 className="text-[17px] font-bold text-[#102236]">Adega de Brancos & Espumantes</h4>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#102236] bg-[#ece8e1] px-2.5 py-1 rounded-full">
                  Curadoria Sommelier
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
