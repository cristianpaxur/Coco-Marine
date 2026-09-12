'use client';

import React, { useState } from 'react';
import { MENU_ITEMS, RESTAURANT_INFO, DIRECT_IMAGE_LINKS } from '../data/restaurantData';
import { MenuItem, MenuCategory } from '../types';
import { Search, Sparkles, Utensils, Wine, ArrowUpRight, Check, ExternalLink } from 'lucide-react';

export const GastronomySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDishModal, setSelectedDishModal] = useState<MenuItem | null>(null);

  const plateauImage = DIRECT_IMAGE_LINKS.find((img) => img.id === 'prato-plateau-royal');

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'todos', label: 'Todos os Pratos' },
    { id: 'entradas', label: 'Entradas Frias' },
    { id: 'principais', label: 'Principais Nobres' },
    { id: 'moquecas', label: 'Moquecas & Caldos' },
    { id: 'executivo', label: 'Menu Executivo' },
    { id: 'sobremesas', label: 'Sobremesas' },
    { id: 'vinhos', label: 'Adega & Vinhos' },
  ];

  const filteredDishes = MENU_ITEMS.filter((dish) => {
    const matchesCat = selectedCategory === 'todos' || dish.category === selectedCategory;
    const matchesSearch =
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="cardapio" className="w-full py-16 lg:py-24 bg-[#faf8f5] scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <span className="text-[12px] uppercase tracking-widest text-[#c59b27] font-bold block mb-2">
              Tradição & Mares
            </span>
            <h2 className="font-serif text-[32px] sm:text-[40px] text-[#102236] font-bold tracking-tight">
              Experiência Gastronômica
            </h2>
          </div>
          <p className="text-[15px] sm:text-[16px] text-[#475569] max-w-[480px] leading-relaxed">
            Equilíbrio entre a nobreza dos pescados de Santos e técnicas culinárias refinadas que valorizam o frescor e a intensidade natural do mar.
          </p>
        </div>

        {/* Banner Showcase Image: Plateau Royal (Exact from provided HTML) */}
        <div className="w-full mb-12 rounded-2xl overflow-hidden border border-[#e2ded5] shadow-sm relative group bg-stone-200">
          {plateauImage && (
            <img
              src={plateauImage.url}
              alt="Plateau Royal de Frutos do Mar Coco Marine"
              className="w-full h-72 sm:h-96 md:h-[440px] object-cover transition-transform duration-700 group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[#c59b27] font-bold text-[12px] uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs border border-[#c59b27]/30">
                Prato Assinatura da Casa
              </span>
            </div>
            <h3 className="font-serif text-[24px] sm:text-[32px] font-bold leading-tight max-w-3xl">
              Plateau Royal de Frutos do Mar Grelhados & Ostras Vivas
            </h3>
            <p className="text-white/90 text-[14px] sm:text-[15px] max-w-2xl mt-2 leading-relaxed">
              Lagosta costeira grelhada, camarões rosa, polvo no carvão, vieiras canadenses e ostras frescas de Cananéia abertas no momento do serviço.
            </p>
          </div>
        </div>

        {/* 3 Core Pillar Offerings Cards (from HTML snapshot) */}
        <div id="almoco-jantar" className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 scroll-mt-24">
          {/* Card 1: Ostras Frescas */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2ded5] hover:border-[#c59b27]/60 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#c59b27]/10 border border-[#c59b27]/25 flex items-center justify-center text-[#c59b27] mb-6">
                <span className="material-symbols-outlined text-[26px]">water_drop</span>
              </div>
              <span className="text-[11px] font-bold text-[#c59b27] uppercase tracking-widest block mb-1">
                Origem Costeira
              </span>
              <h3 className="font-serif text-[22px] sm:text-[24px] text-[#102236] font-bold mb-3">
                Ostras Frescas & Entradas Frias
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#475569] mb-6 leading-relaxed">
                Seleção diária de ostras depuradas servidas no gelo marinho, carpaccio de polvo e ceviche clássico com redução de tangerina e pimenta de cheiro.
              </p>
            </div>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20as%20op%C3%A7%C3%B5es%20de%20ostras%20e%20entradas%20frias`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] text-[#c59b27] hover:text-[#b1881b] font-semibold transition-colors group-hover:translate-x-1 duration-200"
            >
              <span>Consultar disponibilidade</span>
              <span className="material-symbols-outlined text-[16px]">north_east</span>
            </a>
          </div>

          {/* Card 2: Pratos Principais & Moquecas */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2ded5] hover:border-[#c59b27]/60 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#c59b27]/10 border border-[#c59b27]/25 flex items-center justify-center text-[#c59b27] mb-6">
                <span className="material-symbols-outlined text-[26px]">skillet</span>
              </div>
              <span className="text-[11px] font-bold text-[#c59b27] uppercase tracking-widest block mb-1">
                Pratos Principais
              </span>
              <h3 className="font-serif text-[22px] sm:text-[24px] text-[#102236] font-bold mb-3">
                Moqueca Santista & Polvo Grelhado
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#475569] mb-6 leading-relaxed">
                Tentáculos de polvo tenro laqueados em azeite de ervas, risotos aveludados e a autêntica moqueca de badejo com camarões pistola e farofa crocante.
              </p>
            </div>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20o%20menu%20de%20pratos%20principais`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] text-[#c59b27] hover:text-[#b1881b] font-semibold transition-colors group-hover:translate-x-1 duration-200"
            >
              <span>Ver opções completas</span>
              <span className="material-symbols-outlined text-[16px]">north_east</span>
            </a>
          </div>

          {/* Card 3: Enologia & Vinhos */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2ded5] hover:border-[#c59b27]/60 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#c59b27]/10 border border-[#c59b27]/25 flex items-center justify-center text-[#c59b27] mb-6">
                <span className="material-symbols-outlined text-[26px]">wine_bar</span>
              </div>
              <span className="text-[11px] font-bold text-[#c59b27] uppercase tracking-widest block mb-1">
                Enologia & Noites
              </span>
              <h3 className="font-serif text-[22px] sm:text-[24px] text-[#102236] font-bold mb-3">
                Vinhos Costeiros & Coquetelaria
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#475569] mb-6 leading-relaxed">
                Curadoria especializada em rótulos brancos minerais, champagnes e drinks autorais criados para harmonizar com a mineralidade dos frutos do mar.
              </p>
            </div>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=Ol%C3%A1%2C%20gostaria%20de%20receber%20a%20carta%20de%20vinhos%20do%20Coco%20Marine`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] text-[#c59b27] hover:text-[#b1881b] font-semibold transition-colors group-hover:translate-x-1 duration-200"
            >
              <span>Explorar carta de vinhos</span>
              <span className="material-symbols-outlined text-[16px]">north_east</span>
            </a>
          </div>
        </div>

        {/* Interactive Menu Explorer Section with Category Filters & Search */}
        <div className="bg-[#f7f5f1] rounded-2xl p-6 sm:p-8 border border-[#e2ded5]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e2ded5]">
            <div>
              <div className="flex items-center gap-2 text-[#c59b27] text-[12px] font-bold uppercase tracking-wider mb-1">
                <Utensils className="w-4 h-4" />
                <span>Cardápio Digital Interativo</span>
              </div>
              <h3 className="font-serif text-[22px] sm:text-[26px] font-bold text-[#102236]">
                Conheça Nossa Seleção de Pratos
              </h3>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por prato ou ingrediente..."
                className="w-full pl-10 pr-4 py-2 text-[13px] bg-white border border-[#e2ded5] rounded-full focus:outline-none focus:border-[#c59b27] text-[#102236]"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#c59b27] text-white shadow-xs font-semibold'
                    : 'bg-white text-[#475569] border border-[#e2ded5] hover:border-[#c59b27]/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredDishes.map((dish) => (
              <div
                key={dish.id}
                onClick={() => setSelectedDishModal(dish)}
                className="bg-white rounded-xl border border-[#e2ded5] hover:border-[#c59b27]/50 shadow-2xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="relative h-44 sm:h-48 overflow-hidden bg-stone-100">
                    <img
                      src={dish.imageUrl}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    {dish.highlightBadge && (
                      <span className="absolute top-3 left-3 bg-[#c59b27] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                        {dish.highlightBadge}
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-xs text-white text-[14px] font-bold px-3 py-1 rounded-lg">
                      {dish.price}
                    </span>
                  </div>

                  <div className="p-4 sm:p-5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#c59b27] block mb-1">
                      {dish.categoryLabel}
                    </span>
                    <h4 className="font-serif text-[17px] font-bold text-[#102236] group-hover:text-[#c59b27] transition-colors leading-snug mb-2">
                      {dish.name}
                    </h4>
                    <p className="text-[13px] text-[#475569] line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </div>

                <div className="px-4 sm:px-5 pb-4 pt-1 flex items-center justify-between border-t border-[#f0ece4] text-[12px] text-stone-500">
                  <span>{dish.serves}</span>
                  <span className="text-[#c59b27] font-semibold group-hover:underline flex items-center gap-0.5">
                    Ver detalhes <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredDishes.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl border border-dashed border-[#e2ded5]">
              <p className="text-[#475569] text-[15px]">Nenhum prato encontrado para sua busca.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('todos');
                  setSearchQuery('');
                }}
                className="mt-3 text-[13px] text-[#c59b27] font-semibold underline"
              >
                Limpar filtros de busca
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Dish Detailed Modal */}
      {selectedDishModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedDishModal(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#e2ded5]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 sm:h-64">
              <img
                src={selectedDishModal.imageUrl}
                alt={selectedDishModal.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                type="button"
                onClick={() => setSelectedDishModal(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Fechar modal"
              >
                ✕
              </button>
              {selectedDishModal.highlightBadge && (
                <span className="absolute top-3 left-3 bg-[#c59b27] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {selectedDishModal.highlightBadge}
                </span>
              )}
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#c59b27]">
                    {selectedDishModal.categoryLabel} • {selectedDishModal.serves}
                  </span>
                  <h3 className="font-serif text-[22px] font-bold text-[#102236] mt-0.5">
                    {selectedDishModal.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[20px] font-bold text-[#102236]">
                    {selectedDishModal.price}
                  </span>
                </div>
              </div>

              <p className="text-[14px] text-[#475569] leading-relaxed">
                {selectedDishModal.description}
              </p>

              {selectedDishModal.pairing && (
                <div className="p-3 bg-[#f7f5f1] rounded-xl border border-[#e2ded5] flex items-center gap-3">
                  <Wine className="w-5 h-5 text-[#c59b27] flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">
                      Harmonização Sugerida
                    </span>
                    <span className="text-[13px] font-semibold text-[#102236]">
                      {selectedDishModal.pairing}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedDishModal.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-stone-100 text-stone-700 px-2.5 py-0.5 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=Ol%C3%A1%20Coco%20Marine!%20Gostaria%20de%20consultar%20a%20disponibilidade%20do%20prato%20${encodeURIComponent(
                    selectedDishModal.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#15803d] hover:bg-[#166534] text-white py-3 px-4 rounded-xl text-[14px] font-semibold transition-colors"
                >
                  <span>Pedir / Reservar Prato via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
