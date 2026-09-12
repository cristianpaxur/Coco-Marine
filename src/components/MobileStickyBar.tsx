import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Calendar, Phone } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  return (
    <aside
      id="mobile-sticky-actions"
      aria-label="Ações rápidas de contato"
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-[#e2ded5] px-4 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] pb-[calc(0.625rem+env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center gap-2.5">
        {/* WhatsApp Mobile Button */}
        <a
          href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20reserva%20no%20Coco%20Marine`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#15803d] hover:bg-[#166534] text-white py-3 px-3 rounded-xl font-semibold text-[13px] shadow-2xs active:scale-[0.98] transition-transform"
        >
          <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.3-.778.98-.954 1.18-.175.2-.351.226-.652.075-.3-.15-1.268-.468-2.416-1.492-.894-.798-1.498-1.784-1.674-2.085-.175-.3-.019-.462.132-.612.136-.135.301-.35.452-.526.15-.175.2-.3.301-.5.101-.2.05-.376-.025-.526-.076-.15-.678-1.634-.929-2.238-.244-.588-.493-.509-.678-.518l-.578-.01c-.2 0-.526.075-.802.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.549.718.311 1.28.497 1.717.636.723.23 1.38.198 1.901.12.579-.087 1.78-.727 2.031-1.428.251-.702.251-1.303.176-1.428-.076-.126-.276-.201-.577-.351zM12.04 2c-5.52 0-10 4.48-10 10 0 1.765.46 3.425 1.266 4.872L2 22l5.305-1.26c1.39.757 2.975 1.19 4.735 1.19 5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
          </svg>
          <span>WhatsApp</span>
        </a>

        {/* Reserve CTA */}
        <a
          href="#reserva-rapida"
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#c59b27] hover:bg-[#b1881b] text-white py-3 px-3 rounded-xl font-semibold text-[13px] shadow-2xs active:scale-[0.98] transition-transform"
        >
          <Calendar className="w-4 h-4" />
          <span>Reservar Mesa</span>
        </a>
      </div>
    </aside>
  );
};
