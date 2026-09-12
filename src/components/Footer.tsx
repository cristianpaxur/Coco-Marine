import React from 'react';
import { RESTAURANT_INFO, DIRECT_IMAGE_LINKS } from '../data/restaurantData';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerLogo = DIRECT_IMAGE_LINKS.find((img) => img.id === 'logo-footer');

  return (
    <footer id="sobre" className="w-full bg-[#f2eee7] border-t border-[#e2ded5] py-14">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 mb-12">
          {/* Brand Info & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              {footerLogo && (
                <img
                  src={footerLogo.url}
                  alt="Logo Coco Marine"
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="flex flex-col">
                <span className="font-serif text-[19px] font-bold text-[#102236]">
                  {RESTAURANT_INFO.name}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#c59b27]">
                  {RESTAURANT_INFO.subtitle}
                </span>
              </div>
            </div>

            <p className="text-[13px] sm:text-[14px] text-[#475569] max-w-[420px] leading-relaxed">
              Gastronomia costeira requintada no coração do Gonzaga, Santos. Pescados frescos com proveniência de pequenos pescadores da costa brasileira, ambientação aconchegante e serviço discreto para paladares exigentes.
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                Horário de Atendimento Oficial
              </span>
              <p className="text-[13px] text-[#102236] leading-relaxed">
                Terça a Quinta: 11h30–16h00 | 18h00–22h00
                <br />
                Sexta e Sábado: 11h30–16h00 | 18h00–23h00
                <br />
                Domingo: 12h00 às 17h00 (Almoço Contínuo)
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#102236] block mb-2 font-serif">
              Navegação
            </span>
            <ul className="space-y-2 text-[14px] text-[#475569]">
              <li>
                <a href="#cardapio" className="hover:text-[#c59b27] transition-colors">
                  Cardápio & Pratos Ícones
                </a>
              </li>
              <li>
                <a href="#almoco-jantar" className="hover:text-[#c59b27] transition-colors">
                  Almoço Executivo & Jantar
                </a>
              </li>
              <li>
                <a href="#reserva-rapida" className="hover:text-[#c59b27] transition-colors">
                  Agendamento por WhatsApp
                </a>
              </li>
              <li>
                <a href="#horarios" className="hover:text-[#c59b27] transition-colors">
                  Tabela Semanal de Horários
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#c59b27] transition-colors">
                  Como Chegar no Gonzaga
                </a>
              </li>
            </ul>
          </div>

          {/* Reservation and Contact Card */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#102236] block mb-2 font-serif">
              Reservas & Concierge
            </span>
            <p className="text-[13px] text-[#475569] leading-relaxed">
              Mesas e experiências gastronômicas sujeitas à capacidade do salão. Sugerimos agendamento antecipado para finais de semana.
            </p>

            <div className="bg-white p-4 rounded-xl border border-[#e2ded5] space-y-1.5 shadow-2xs">
              <p className="text-[13px] text-[#102236] font-bold">
                {RESTAURANT_INFO.address} - {RESTAURANT_INFO.neighborhood}, {RESTAURANT_INFO.city}
              </p>
              <p className="text-[13px] text-[#475569]">
                WhatsApp: {RESTAURANT_INFO.whatsappFormatted} • Tel: {RESTAURANT_INFO.phoneFormatted}
              </p>
              <p className="text-[12px] text-[#c59b27] font-medium flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:underline">
                  {RESTAURANT_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Legal and Rights Row */}
        <div className="pt-8 border-t border-[#e2ded5] flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[#475569]">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span className="font-semibold text-[#102236]">COCO MARINE RESTAURANTE LTDA</span>
            <span className="hidden sm:inline">•</span>
            <span>CNPJ: {RESTAURANT_INFO.cnpj}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[12px]">
            <a href="#sobre" className="hover:text-[#102236] transition-colors">
              Privacidade
            </a>
            <a href="#sobre" className="hover:text-[#102236] transition-colors">
              Termos de Atendimento
            </a>
            <span>© 2025 Coco Marine. Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
