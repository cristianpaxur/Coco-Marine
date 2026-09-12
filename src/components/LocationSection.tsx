import React from 'react';
import { RESTAURANT_INFO, DIRECT_IMAGE_LINKS } from '../data/restaurantData';
import { Navigation, Phone, CheckCircle2, MapPin, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const pinLogo = DIRECT_IMAGE_LINKS.find((img) => img.id === 'pin-mapa-logo');

  return (
    <section id="localizacao" className="w-full py-16 lg:py-20 bg-[#faf8f5] scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#e2ded5] shadow-xs relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-[#c59b27] text-[12px] uppercase tracking-wider font-bold">
                <MapPin className="w-4 h-4" />
                <span>Gonzaga, Santos • A 2 quadras da praia</span>
              </div>

              <h2 className="font-serif text-[30px] sm:text-[36px] text-[#102236] font-bold leading-tight">
                No Ponto Mais Charmoso da Baixada Santista
              </h2>

              <p className="text-[15px] sm:text-[16px] text-[#475569] leading-relaxed">
                Situado em uma charmosa rua arborizada no coração do Gonzaga, o Coco Marine une o acesso imediato aos principais hotéis e à orla marítima de Santos à discrição e tranquilidade de um refúgio gastronômico exclusivo.
              </p>

              <div className="p-4 sm:p-5 bg-[#f7f5f1] rounded-2xl border border-[#e2ded5] space-y-1.5">
                <p className="text-[17px] font-bold text-[#102236] font-serif">
                  {RESTAURANT_INFO.address}
                </p>
                <p className="text-[14px] text-[#475569]">
                  {RESTAURANT_INFO.neighborhood}, {RESTAURANT_INFO.city}, {RESTAURANT_INFO.cep}
                </p>
                <p className="text-[13px] text-[#775a00] font-medium pt-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                  <span>Estacionamento próprio conveniado e serviço de Valet na recepção.</span>
                </p>
              </div>

              {/* Navigation Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                {/* Google Maps Route */}
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#102236] hover:bg-slate-800 text-white text-[14px] px-5 py-3 rounded-full shadow-2xs hover:shadow transition-all font-medium"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Rotas no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                {/* Waze Route */}
                <a
                  href={RESTAURANT_INFO.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#33ccff]/15 hover:bg-[#33ccff]/25 text-[#0284c7] text-[14px] px-4 py-3 rounded-full border border-[#0284c7]/30 transition-all font-medium"
                >
                  <span>Abrir no Waze</span>
                </a>

                {/* WhatsApp Reception */}
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=Ol%C3%A1%2C%20preciso%20de%20informa%C3%A7%C3%B5es%20sobre%20localiza%C3%A7%C3%A3o%20e%20estacionamento`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#15803d] hover:bg-[#166534] text-white text-[14px] px-5 py-3 rounded-full shadow-2xs hover:shadow transition-all font-semibold"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.3-.778.98-.954 1.18-.175.2-.351.226-.652.075-.3-.15-1.268-.468-2.416-1.492-.894-.798-1.498-1.784-1.674-2.085-.175-.3-.019-.462.132-.612.136-.135.301-.35.452-.526.15-.175.2-.3.301-.5.101-.2.05-.376-.025-.526-.076-.15-.678-1.634-.929-2.238-.244-.588-.493-.509-.678-.518l-.578-.01c-.2 0-.526.075-.802.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.549.718.311 1.28.497 1.717.636.723.23 1.38.198 1.901.12.579-.087 1.78-.727 2.031-1.428.251-.702.251-1.303.176-1.428-.076-.126-.276-.201-.577-.351zM12.04 2c-5.52 0-10 4.48-10 10 0 1.765.46 3.425 1.266 4.872L2 22l5.305-1.26c1.39.757 2.975 1.19 4.735 1.19 5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
                  </svg>
                  <span>WhatsApp Recepção</span>
                </a>

                {/* Call */}
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 text-[#475569] hover:text-[#102236] text-[14px] px-3 py-2 font-medium"
                >
                  <Phone className="w-4 h-4 text-[#c59b27]" />
                  <span>{RESTAURANT_INFO.phoneFormatted}</span>
                </a>
              </div>
            </div>

            {/* Right Map Visual Card with Real Google Maps */}
            <div className="lg:col-span-6 w-full flex flex-col gap-3">
              <div className="w-full h-80 sm:h-96 lg:h-[400px] rounded-2xl bg-[#ece8e1] overflow-hidden border border-[#e2ded5] shadow-xs relative">
                {/* Real Google Maps Interactive Embed */}
                <iframe
                  title="Google Maps - Localização Coco Marine Gonzaga Santos"
                  src="https://maps.google.com/maps?q=Rua+Dr.+Assis+Corr%C3%Aaa,+89+-+Gonzaga,+Santos+-+SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Top Pill Indicating Real Google Maps */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#e2ded5] shadow-sm flex items-center gap-2 pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-[#15803d] animate-pulse" />
                  <span className="text-[12px] font-semibold text-[#102236]">Google Maps Interativo</span>
                </div>
              </div>

              {/* Bottom Location Address Info Card */}
              <div className="bg-[#f7f5f1] p-3.5 sm:p-4 rounded-xl border border-[#e2ded5] flex items-center justify-between text-[#102236]">
                <div className="flex items-center gap-3">
                  {pinLogo && (
                    <img
                      src={pinLogo.url}
                      alt="Coco Marine Pin"
                      className="h-8 sm:h-9 w-auto object-contain flex-shrink-0"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div>
                    <div className="font-bold text-[14px] sm:text-[15px] font-serif leading-tight">
                      {RESTAURANT_INFO.name} Restaurante
                    </div>
                    <div className="text-[12px] text-[#475569] mt-0.5">
                      {RESTAURANT_INFO.address} • {RESTAURANT_INFO.neighborhood}
                    </div>
                  </div>
                </div>

                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] font-bold text-[#c59b27] hover:text-[#b1881b] bg-[#c59b27]/10 hover:bg-[#c59b27]/20 px-3 py-1.5 rounded-full border border-[#c59b27]/25 flex items-center gap-1 transition-colors flex-shrink-0"
                >
                  <span>Ver em tela cheia</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
