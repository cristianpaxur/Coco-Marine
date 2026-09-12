'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { RESTAURANT_INFO, SCHEDULE_DAYS } from '../data/restaurantData';
import { Clock, Info, ArrowRight, CheckCircle2 } from 'lucide-react';

export const HoursSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculate live restaurant opening status
  const currentStatus = useMemo(() => {
    if (!mounted) {
      return { isOpen: true, label: 'Consulte nossos horários abaixo' };
    }
    try {
      const now = new Date();
      // Use Brazilian local time
      const brazilTimeStr = now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' });
      const brazilDate = new Date(brazilTimeStr);
      const day = brazilDate.getDay(); // 0: Sun, 1: Mon, 2: Tue, 3: Wed, 4: Thu, 5: Fri, 6: Sat
      const hour = brazilDate.getHours();
      const min = brazilDate.getMinutes();
      const currentMinutes = hour * 60 + min;

      if (day === 1) {
        return { isOpen: false, label: 'Fechado Hoje (Segunda-feira)' };
      }

      if (day >= 2 && day <= 4) {
        // Tue - Thu: 11:30 - 16:00 (690 - 960) & 18:00 - 22:00 (1080 - 1320)
        const inLunch = currentMinutes >= 690 && currentMinutes < 960;
        const inDinner = currentMinutes >= 1080 && currentMinutes < 1320;
        if (inLunch) return { isOpen: true, label: 'Aberto Agora (Almoço até 16h00)' };
        if (inDinner) return { isOpen: true, label: 'Aberto Agora (Jantar até 22h00)' };
        if (currentMinutes < 690) return { isOpen: false, label: 'Abre hoje às 11h30 (Almoço)' };
        if (currentMinutes >= 960 && currentMinutes < 1080) return { isOpen: false, label: 'Reabre hoje às 18h00 (Jantar)' };
        return { isOpen: false, label: 'Fechado (Reabre amanhã às 11h30)' };
      }

      if (day === 5 || day === 6) {
        // Fri - Sat: 11:30 - 16:00 & 18:00 - 23:00 (1080 - 1380)
        const inLunch = currentMinutes >= 690 && currentMinutes < 960;
        const inDinner = currentMinutes >= 1080 && currentMinutes < 1380;
        if (inLunch) return { isOpen: true, label: 'Aberto Agora (Almoço até 16h00)' };
        if (inDinner) return { isOpen: true, label: 'Aberto Agora (Jantar até 23h00)' };
        if (currentMinutes < 690) return { isOpen: false, label: 'Abre hoje às 11h30' };
        if (currentMinutes >= 960 && currentMinutes < 1080) return { isOpen: false, label: 'Reabre hoje às 18h00' };
        return { isOpen: false, label: 'Fechado (Reabre às 11h30)' };
      }

      if (day === 0) {
        // Sun: 12:00 - 17:00 (720 - 1020)
        const inService = currentMinutes >= 720 && currentMinutes < 1020;
        if (inService) return { isOpen: true, label: 'Aberto Agora (Almoço Contínuo até 17h00)' };
        if (currentMinutes < 720) return { isOpen: false, label: 'Abre hoje às 12h00' };
        return { isOpen: false, label: 'Fechado (Reabre terça às 11h30)' };
      }

      return { isOpen: true, label: 'Horário de Funcionamento Regular' };
    } catch {
      return { isOpen: true, label: 'Atendimento de Terça a Domingo' };
    }
  }, []);

  return (
    <section id="horarios" className="w-full py-16 bg-[#f7f5f1] border-b border-[#e2ded5] scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-[12px] uppercase tracking-widest text-[#c59b27] font-bold block">
                Planeje sua Visita
              </span>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${
                  currentStatus.isOpen
                    ? 'bg-[#15803d]/15 text-[#15803d] border border-[#15803d]/30'
                    : 'bg-[#c59b27]/15 text-[#775a00] border border-[#c59b27]/30'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    currentStatus.isOpen ? 'bg-[#15803d] animate-pulse' : 'bg-[#c59b27]'
                  }`}
                />
                {currentStatus.label}
              </span>
            </div>

            <h2 className="font-serif text-[32px] sm:text-[38px] text-[#102236] font-bold leading-tight">
              Horários & Operação
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#475569] leading-relaxed">
              Oferecemos uma transição suave entre a luz natural do almoço executivo e a intimidade dos jantares sob luz de velas no Gonzaga. Acomodamos reservas antecipadas e atendemos por ordem de chegada com serviço de valet.
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#e2ded5] flex items-start gap-3.5 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-[#c59b27]/10 border border-[#c59b27]/25 flex items-center justify-center text-[#c59b27] flex-shrink-0 mt-0.5">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[15px] text-[#102236] font-bold block">
                  Feriados e Temporadas
                </span>
                <p className="text-[13px] text-[#475569] mt-1 leading-relaxed">
                  Em feriados prolongados atendemos em horário especial. Consulte a disponibilidade diretamente com nosso atendimento receptivo.
                </p>
              </div>
            </div>
          </div>

          {/* Right Timetable Card Column */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2ded5] shadow-xs">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#e2ded5]">
                <h3 className="text-[18px] sm:text-[20px] text-[#102236] font-bold font-serif">
                  Tabela Semanal de Funcionamento
                </h3>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#c59b27] bg-[#c59b27]/10 px-3 py-1 rounded-full border border-[#c59b27]/20">
                  Oficial Gonzaga
                </span>
              </div>

              <div className="space-y-3">
                {/* Terça a Quinta */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#fbf9f6] border border-[#e2ded5] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#15803d]" />
                    <span className="text-[14px] sm:text-[15px] text-[#102236] font-semibold">
                      Terça a Quinta-feira
                    </span>
                  </div>
                  <div className="text-[13px] text-[#475569] font-medium sm:text-right">
                    <span>11h30 – 16h00</span>
                    <span className="mx-2 text-[#c59b27]">•</span>
                    <span>18h00 – 22h00</span>
                  </div>
                </div>

                {/* Sexta e Sábado */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#fbf9f6] border border-[#e2ded5] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#15803d]" />
                    <span className="text-[14px] sm:text-[15px] text-[#102236] font-semibold">
                      Sexta e Sábado
                    </span>
                  </div>
                  <div className="text-[13px] text-[#475569] font-medium sm:text-right">
                    <span>11h30 – 16h00</span>
                    <span className="mx-2 text-[#c59b27]">•</span>
                    <span>18h00 – 23h00</span>
                  </div>
                </div>

                {/* Domingo */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#fbf9f6] border border-[#e2ded5] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#15803d]" />
                    <span className="text-[14px] sm:text-[15px] text-[#102236] font-semibold">
                      Domingo
                    </span>
                  </div>
                  <div className="text-[13px] text-[#475569] font-medium sm:text-right">
                    <span>12h00 – 17h00</span>
                    <span className="text-[12px] text-[#c59b27] font-semibold ml-1.5">
                      (Almoço Contínuo)
                    </span>
                  </div>
                </div>

                {/* Segunda-feira */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#ece8e1]/40 border border-[#e2ded5]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 opacity-80">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-stone-400" />
                    <span className="text-[14px] text-stone-600 font-medium">Segunda-feira</span>
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold">
                    Fechado para manutenção e descanso
                  </span>
                </div>
              </div>

              {/* Kitchen note and contact link */}
              <div className="mt-6 pt-4 border-t border-[#e2ded5] flex flex-wrap items-center justify-between gap-4">
                <span className="text-[13px] text-[#475569] flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#c59b27]" />
                  <span>Cozinha encerra pedidos 30 minutos antes do fechamento</span>
                </span>
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=Ol%C3%A1%2C%20quero%20consultar%20hor%C3%A1rios%20especiais%20no%20Coco%20Marine`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-bold text-[#c59b27] hover:text-[#b1881b] flex items-center gap-1 transition-colors"
                >
                  <span>Dúvidas de horário no WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
