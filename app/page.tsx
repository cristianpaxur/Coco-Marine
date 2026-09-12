'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { HighlightsGrid } from '@/components/HighlightsGrid';
import { BookingWidget } from '@/components/BookingWidget';
import { GastronomySection } from '@/components/GastronomySection';
import { HoursSection } from '@/components/HoursSection';
import { LocationSection } from '@/components/LocationSection';
import { Footer } from '@/components/Footer';
import { MobileStickyBar } from '@/components/MobileStickyBar';

export default function HomePage() {
  const handleScrollToMenu = () => {
    const menuEl = document.getElementById('cardapio');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#102236] relative selection:bg-[#f9ecc9] selection:text-[#3d2f00]">
      {/* Top Floating Glass Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 w-full flex flex-col">
        {/* Parallax Hero Section */}
        <HeroSection onExploreMenu={handleScrollToMenu} />

        {/* 4 Pillars Highlights Grid */}
        <HighlightsGrid />

        {/* Exclusive VIP & Table Reservation Engine */}
        <BookingWidget />

        {/* Experiência Gastronômica & Detailed Interactive Menu */}
        <GastronomySection />

        {/* Horários & Operação with Live Status */}
        <HoursSection />

        {/* Localização & Real Google Maps Interactive Section */}
        <LocationSection />
      </main>

      {/* Official Footer with Full Restaurant Data & Rights */}
      <Footer />

      {/* Mobile-Only Quick Floating Sticky Actions */}
      <MobileStickyBar />
    </div>
  );
}
