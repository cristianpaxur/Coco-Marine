'use client';

import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ExperienceType } from '../types';
import { Calendar, Clock, Users, MessageSquareText, Check, Copy, Sparkles, HeartHandshake } from 'lucide-react';

export const BookingWidget: React.FC = () => {
  // Format default date: tomorrow or today
  const todayIso = new Date().toISOString().split('T')[0];

  const [selectedExperience, setSelectedExperience] = useState<ExperienceType>('Mesa para Casal');
  const [date, setDate] = useState<string>(todayIso);
  const [time, setTime] = useState<string>('Jantar (19h00 às 20h30)');
  const [guests, setGuests] = useState<number>(2);
  const [specialNote, setSpecialNote] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const experiences: {
    type: ExperienceType;
    title: string;
    description: string;
    suggestedGuests: number;
  }[] = [
    {
      type: 'Mesa para Casal',
      title: 'Mesa para Casal',
      description: 'Ambiente intimista & vinhos',
      suggestedGuests: 2,
    },
    {
      type: 'Almoço Executivo',
      title: 'Almoço Executivo',
      description: 'Ágil, requintado e leve',
      suggestedGuests: 2,
    },
    {
      type: 'Família / Grupo',
      title: 'Família / Grupo',
      description: 'Mesas amplas e aconchegantes',
      suggestedGuests: 5,
    },
    {
      type: 'Comemoração',
      title: 'Comemoração',
      description: 'Aniversários e datas especiais',
      suggestedGuests: 6,
    },
  ];

  const formattedDate = date
    ? date.split('-').reverse().join('/')
    : 'A definir com a equipe';

  // Construct official formatted WhatsApp message
  const generateMessage = () => {
    let msg = `Olá Coco Marine! Gostaria de solicitar uma reserva:\n`;
    msg += `• Experiência: ${selectedExperience}\n`;
    msg += `• Pessoas: ${guests} ${guests === 1 ? 'pessoa' : 'pessoas'}\n`;
    msg += `• Data: ${formattedDate}\n`;
    msg += `• Horário: ${time}\n`;
    if (specialNote.trim()) {
      msg += `• Observações: ${specialNote.trim()}\n`;
    }
    msg += `\nAguardo confirmação da equipe de concierge. Obrigado!`;
    return msg;
  };

  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent(
    generateMessage()
  )}`;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generateMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="reserva-rapida"
      className="w-full py-12 sm:py-16 lg:py-20 bg-white border-b border-[#e2ded5]/60 scroll-mt-20"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#faf6ee] via-white to-[#f6f2e8] rounded-2xl border border-[#c59b27]/30 p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Context Column */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c59b27]/10 border border-[#c59b27]/25 text-[#775a00] text-[11px] sm:text-[12px] uppercase tracking-wider font-bold">
                <span className="material-symbols-outlined text-[16px]">touch_app</span>
                <span>Agendamento Rápido via WhatsApp</span>
              </div>

              <h2 className="font-serif text-[28px] sm:text-[36px] text-[#102236] font-bold leading-snug">
                Sua Mesa Preferida Garantida em Segundos
              </h2>

              <p className="text-[15px] sm:text-[16px] text-[#475569] leading-relaxed">
                Selecione abaixo o formato da sua visita. Ao clicar, abriremos diretamente o canal oficial do concierge Coco Marine com sua solicitação pré-formatada.
              </p>

              <div className="p-4 rounded-xl bg-[#f7f5f1] border border-[#e2ded5] space-y-2">
                <div className="flex items-center gap-2 text-[#102236] font-semibold text-[15px]">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#15803d] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#15803d]"></span>
                  </span>
                  <span>Atendimento ao Vivo por WhatsApp</span>
                </div>
                <p className="text-[13px] text-[#475569] leading-normal">
                  Terça a Domingo: nossa equipe de concierge responde prontamente com a confirmação de mesa e preferências de acomodação.
                </p>
              </div>

              {/* Tips & Extras */}
              <div className="space-y-2 text-[13px] text-[#475569]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                  <span>Mesas no salão climatizado ou varanda arejada</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                  <span>Sem cobrança prévia para reserva de mesas convencionais</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                  <span>Opção de bolo comemorativo & vela sob aviso</span>
                </div>
              </div>
            </div>

            {/* Right Form & Interactive Selector Column */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#e2ded5] shadow-xs flex flex-col justify-between">
              {/* 1. Experience selector */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-[14px] font-bold text-[#102236]">
                    1. Escolha a Experiência:
                  </label>
                  <span className="text-[11px] text-[#c59b27] font-semibold uppercase tracking-wider">
                    Toque para selecionar
                  </span>
                </div>
                <div
                  id="booking-experience-selector"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
                >
                  {experiences.map((exp) => {
                    const isSelected = selectedExperience === exp.type;
                    return (
                      <button
                        key={exp.type}
                        type="button"
                        onClick={() => {
                          setSelectedExperience(exp.type);
                          if (exp.suggestedGuests) setGuests(exp.suggestedGuests);
                        }}
                        className={`booking-option p-3 rounded-xl text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'border-2 border-[#c59b27] bg-[#c59b27]/10 shadow-2xs'
                            : 'border border-[#e2ded5] bg-[#fbf9f6] hover:border-[#c59b27]/60'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#102236] text-[14px]">
                            {exp.title}
                          </span>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-[#c59b27]" />
                          )}
                        </div>
                        <div className="text-[12px] text-[#475569] mt-0.5">
                          {exp.description}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Date, Time & Guests Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-5">
                {/* Date */}
                <div>
                  <label
                    htmlFor="booking-date"
                    className="flex items-center gap-1.5 text-[11px] font-bold text-[#475569] uppercase tracking-wider mb-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#c59b27]" />
                    <span>Data Desejada:</span>
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    min={todayIso}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#e2ded5] bg-[#f7f5f1] text-[#102236] text-[14px] focus:border-[#c59b27] focus:ring-1 focus:ring-[#c59b27] outline-none transition-colors"
                  />
                </div>

                {/* Time */}
                <div>
                  <label
                    htmlFor="booking-time"
                    className="flex items-center gap-1.5 text-[11px] font-bold text-[#475569] uppercase tracking-wider mb-1.5"
                  >
                    <Clock className="w-3.5 h-3.5 text-[#c59b27]" />
                    <span>Horário:</span>
                  </label>
                  <select
                    id="booking-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#e2ded5] bg-[#f7f5f1] text-[#102236] text-[14px] focus:border-[#c59b27] focus:ring-1 focus:ring-[#c59b27] outline-none transition-colors"
                  >
                    <option value="Almoço (12h00 às 14h00)">Almoço (12h00 às 14h00)</option>
                    <option value="Almoço Tardio (14h00 às 16h00)">Almoço Tardio (14h00 às 16h00)</option>
                    <option value="Jantar (19h00 às 20h30)">Jantar (19h00 às 20h30)</option>
                    <option value="Jantar Noturno (20h30 às 22h30)">Jantar Noturno (20h30 às 22h30)</option>
                  </select>
                </div>

                {/* Guests */}
                <div>
                  <label className="flex items-center gap-1.5 text-[11px] font-bold text-[#475569] uppercase tracking-wider mb-1.5">
                    <Users className="w-3.5 h-3.5 text-[#c59b27]" />
                    <span>Pessoas:</span>
                  </label>
                  <div className="flex items-center border border-[#e2ded5] rounded-xl bg-[#f7f5f1] overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="px-3 py-2 text-stone-600 hover:bg-stone-200 text-[16px] font-bold"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-bold text-[#102236] text-[14px]">
                      {guests} {guests === 1 ? 'pessoa' : 'pessoas'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuests(Math.min(25, guests + 1))}
                      className="px-3 py-2 text-stone-600 hover:bg-stone-200 text-[16px] font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Special Note Input */}
              <div className="mb-6">
                <label
                  htmlFor="booking-notes"
                  className="block text-[11px] font-bold text-[#475569] uppercase tracking-wider mb-1.5"
                >
                  Observações Especiais (Opcional):
                </label>
                <input
                  id="booking-notes"
                  type="text"
                  placeholder="Ex: Aniversário de casamento, preferência varanda, restrição a glúten..."
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#e2ded5] bg-[#f7f5f1] text-[#102236] text-[13px] placeholder:text-stone-400 focus:border-[#c59b27] focus:ring-1 focus:ring-[#c59b27] outline-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="space-y-2.5">
                <a
                  id="whatsapp-submit-btn"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#15803d] hover:bg-[#166534] text-white text-[16px] sm:text-[17px] font-semibold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center group"
                >
                  <svg className="w-6 h-6 fill-current flex-shrink-0 transition-transform group-hover:scale-105" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.3-.778.98-.954 1.18-.175.2-.351.226-.652.075-.3-.15-1.268-.468-2.416-1.492-.894-.798-1.498-1.784-1.674-2.085-.175-.3-.019-.462.132-.612.136-.135.301-.35.452-.526.15-.175.2-.3.301-.5.101-.2.05-.376-.025-.526-.076-.15-.678-1.634-.929-2.238-.244-.588-.493-.509-.678-.518l-.578-.01c-.2 0-.526.075-.802.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.549.718.311 1.28.497 1.717.636.723.23 1.38.198 1.901.12.579-.087 1.78-.727 2.031-1.428.251-.702.251-1.303.176-1.428-.076-.126-.276-.201-.577-.351zM12.04 2c-5.52 0-10 4.48-10 10 0 1.765.46 3.425 1.266 4.872L2 22l5.305-1.26c1.39.757 2.975 1.19 4.735 1.19 5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
                  </svg>
                  <span>Iniciar Reserva no WhatsApp Oficial</span>
                </a>

                {/* Secondary tools: copy message and preview */}
                <div className="flex items-center justify-between gap-3 pt-1 text-[12px] text-[#475569]">
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center gap-1.5 text-stone-600 hover:text-[#c59b27] transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#15803d]" />
                        <span className="text-[#15803d] font-semibold">Mensagem copiada!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar texto formatado</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowPreviewModal(true)}
                    className="inline-flex items-center gap-1 text-[#c59b27] hover:underline"
                  >
                    <MessageSquareText className="w-3.5 h-3.5" />
                    <span>Ver prévia da mensagem</span>
                  </button>
                </div>
              </div>

              <p className="text-center text-[12px] text-[#475569] mt-3">
                Atendimento de Terça a Domingo • Confirmação instantânea do concierge
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Message Preview Modal */}
      {showPreviewModal && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowPreviewModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#e2ded5]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#e2ded5]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#25d366]/15 flex items-center justify-center text-[#15803d]">
                  <MessageSquareText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-[#102236] text-[15px]">Prévia do WhatsApp</h4>
                  <p className="text-[11px] text-stone-500">Concierge Coco Marine Santos</p>
                </div>
              </div>
              <button
                onClick={() => setShowPreviewModal(false)}
                className="text-stone-400 hover:text-stone-700 p-1"
              >
                ✕
              </button>
            </div>

            <div className="my-4 p-4 rounded-xl bg-[#e5ddd5]/30 border border-[#d1c7bc] text-[13px] text-[#111b21] font-mono whitespace-pre-line leading-relaxed shadow-inner">
              {generateMessage()}
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={handleCopyMessage}
                className="px-4 py-2 text-[13px] font-semibold border border-[#e2ded5] rounded-xl hover:bg-stone-50 text-stone-700"
              >
                {copied ? 'Copiado!' : 'Copiar Texto'}
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-[13px] font-semibold bg-[#15803d] text-white rounded-xl hover:bg-[#166534] transition-colors"
              >
                Enviar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
