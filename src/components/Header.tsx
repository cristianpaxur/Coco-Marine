'use client';

import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO, DIRECT_IMAGE_LINKS } from '../data/restaurantData';
import { Menu, X, Phone, ExternalLink, Calendar } from 'lucide-react';

interface HeaderProps {
  onOpenBooking?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoUrl = DIRECT_IMAGE_LINKS.find((img) => img.id === 'logo-header')?.url;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Almoço e Jantar', href: '#almoco-jantar' },
    { label: 'Horários', href: '#horarios' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Sobre', href: '#sobre' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e2ded5] shadow-sm py-2'
            : 'bg-[#faf8f5]/90 backdrop-blur-sm border-b border-[#e2ded5]/60 py-3'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo & Brand Title */}
          <a
            href="#"
            className="flex items-center gap-3.5 group flex-shrink-0 text-left focus:outline-none focus:ring-2 focus:ring-[#c59b27] rounded-lg p-1"
            title="Coco Marine - Voltar ao Topo"
          >
            {logoUrl && (
              <img
                src={logoUrl}
                alt="Logo Coco Marine Restaurante"
                className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            )}
            <div className="flex flex-col">
              <span className="font-serif text-[19px] sm:text-[21px] font-bold tracking-tight text-[#102236] leading-none">
                {RESTAURANT_INFO.name}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.22em] text-[#c59b27] mt-1">
                {RESTAURANT_INFO.locationLabel}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-navigation"
            aria-label="Navegação Principal"
            className="hidden lg:flex items-center gap-1 bg-[#f7f5f1] border border-[#e2ded5] p-1.5 rounded-full shadow-2xs shrink-0 flex-nowrap"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 xl:px-4 py-1.5 text-[14px] font-medium text-[#475569] hover:text-[#c59b27] hover:bg-white transition-all rounded-full whitespace-nowrap shrink-0 inline-block"
              >
                <span className="whitespace-nowrap">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            {/* Direct WhatsApp CTA Button */}
            <a
              id="header-whatsapp-btn"
              href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20reserva%20no%20Coco%20Marine`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#25d366]/10 text-[#128c7e] hover:bg-[#25d366]/20 text-[14px] px-4 py-2 rounded-full transition-all border border-[#25d366]/30 font-semibold shadow-2xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.3-.778.98-.954 1.18-.175.2-.351.226-.652.075-.3-.15-1.268-.468-2.416-1.492-.894-.798-1.498-1.784-1.674-2.085-.175-.3-.019-.462.132-.612.136-.135.301-.35.452-.526.15-.175.2-.3.301-.5.101-.2.05-.376-.025-.526-.076-.15-.678-1.634-.929-2.238-.244-.588-.493-.509-.678-.518l-.578-.01c-.2 0-.526.075-.802.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.549.718.311 1.28.497 1.717.636.723.23 1.38.198 1.901.12.579-.087 1.78-.727 2.031-1.428.251-.702.251-1.303.176-1.428-.076-.126-.276-.201-.577-.351zM12.04 2c-5.52 0-10 4.48-10 10 0 1.765.46 3.425 1.266 4.872L2 22l5.305-1.26c1.39.757 2.975 1.19 4.735 1.19 5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Primary Reserve Table Button */}
            <a
              id="header-reserve-cta"
              href="#reserva-rapida"
              onClick={(e) => {
                // If user clicks, smooth scroll to booking section
              }}
              className="bg-[#c59b27] hover:bg-[#b1881b] text-white text-[13px] sm:text-[14px] px-4 sm:px-6 py-2.5 rounded-full shadow-xs hover:shadow transition-all flex items-center gap-1.5 font-semibold"
            >
              <span>Reservar Mesa</span>
              <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_forward</span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              aria-label="Abrir menu de navegação"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-[#e2ded5] bg-white text-[#102236] hover:bg-stone-50 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-backdrop"
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-nav-drawer"
            className="fixed top-0 right-0 w-[85%] max-w-[340px] h-full bg-[#faf8f5] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-[#e2ded5]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#e2ded5]">
                <div className="flex items-center gap-2.5">
                  {logoUrl && (
                    <img
                      src={logoUrl}
                      alt="Coco Marine"
                      className="h-8 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div>
                    <span className="font-serif font-bold text-[#102236] text-[17px] block leading-none">
                      Coco Marine
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-[#c59b27] font-bold">
                      Gonzaga • Santos
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-stone-500 hover:text-stone-800 rounded-lg hover:bg-stone-100"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation list */}
              <nav className="flex flex-col gap-2 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-[16px] font-medium text-[#102236] hover:text-[#c59b27] hover:bg-[#f2eee7] rounded-xl transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="material-symbols-outlined text-[18px] text-stone-400">chevron_right</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-[#e2ded5] space-y-3">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=Ol%C3%A1%20Coco%20Marine%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#15803d] text-white py-3 px-4 rounded-xl font-semibold shadow-xs text-[15px]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.3-.778.98-.954 1.18-.175.2-.351.226-.652.075-.3-.15-1.268-.468-2.416-1.492-.894-.798-1.498-1.784-1.674-2.085-.175-.3-.019-.462.132-.612.136-.135.301-.35.452-.526.15-.175.2-.3.301-.5.101-.2.05-.376-.025-.526-.076-.15-.678-1.634-.929-2.238-.244-.588-.493-.509-.678-.518l-.578-.01c-.2 0-.526.075-.802.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.549.718.311 1.28.497 1.717.636.723.23 1.38.198 1.901.12.579-.087 1.78-.727 2.031-1.428.251-.702.251-1.303.176-1.428-.076-.126-.276-.201-.577-.351zM12.04 2c-5.52 0-10 4.48-10 10 0 1.765.46 3.425 1.266 4.872L2 22l5.305-1.26c1.39.757 2.975 1.19 4.735 1.19 5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
                </svg>
                <span>Falar no WhatsApp</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 border border-[#e2ded5] bg-white text-[#102236] py-3 px-4 rounded-xl font-medium text-[14px]"
              >
                <Phone className="w-4 h-4 text-[#c59b27]" />
                <span>Ligar: {RESTAURANT_INFO.phoneFormatted}</span>
              </a>

              <p className="text-center text-[12px] text-stone-500 pt-1">
                {RESTAURANT_INFO.address} • {RESTAURANT_INFO.neighborhood}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
