import React, { useState } from 'react';
import { COMPANY_CONTACT } from '../data/companyData';
import { BrandLogo } from './BrandLogo';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../i18n/LanguageContext';
import { MessageCircle, Menu, X, Instagram, Facebook } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8E2D5] shadow-xs">
      {/* Main navigation header */}
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="group cursor-pointer"
        >
          <BrandLogo variant="horizontal" />
        </a>

        {/* Desktop Navigation Links - Ample, calm, human */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-[#0A2240] transition-colors py-1 cursor-pointer font-semibold"
          >
            {t('nav.story')}
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="hover:text-[#0A2240] transition-colors py-1 cursor-pointer font-semibold"
          >
            {t('nav.services')}
          </button>
          <button
            onClick={() => scrollToSection('goods-showcase')}
            className="hover:text-[#0A2240] transition-colors py-1 cursor-pointer font-semibold flex items-center gap-1.5 text-[#0A2240]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59B4B]"></span>
            <span>{t('nav.goodsLogistics')}</span>
          </button>
          <button
            onClick={() => scrollToSection('why-pick-us')}
            className="hover:text-[#0A2240] transition-colors py-1 cursor-pointer font-semibold"
          >
            {t('nav.whyPickUs')}
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="hover:text-[#0A2240] transition-colors py-1 cursor-pointer font-semibold"
          >
            {t('nav.testimonials')}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-[#0A2240] transition-colors py-1 cursor-pointer font-semibold"
          >
            {t('nav.contact')}
          </button>
        </nav>

        {/* Desktop Language Toggle + Action Button */}
        <div className="hidden sm:flex items-center gap-2.5">
          <LanguageToggle variant="navbar" />
          <button
            onClick={() => onOpenInquiry()}
            className="inline-flex items-center gap-2 bg-[#0A2240] hover:bg-[#06162B] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl border border-[#C59B4B]/50 shadow-xs hover:shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{t('nav.letsTalk')}</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle variant="topbar" className="sm:hidden" />
          <button
            onClick={() => onOpenInquiry()}
            className="sm:hidden bg-[#0A2240] text-white text-xs font-bold px-2.5 py-1.5 rounded-md border border-[#C59B4B]/50"
          >
            {t('nav.letsTalk')}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#0A2240]" />}
          </button>
        </div>
      </div>

      {/* Mobile drop-down drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E8E2D5] px-4 py-4 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          {/* Mobile Language Selector */}
          <div className="pb-3 border-b border-slate-100">
            <LanguageToggle variant="mobile" />
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left py-2 px-3 rounded-md text-sm font-semibold text-slate-800 hover:bg-[#FAF8F5] hover:text-[#0A2240]"
          >
            {t('nav.story')}
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="block w-full text-left py-2 px-3 rounded-md text-sm font-semibold text-slate-800 hover:bg-[#FAF8F5] hover:text-[#0A2240]"
          >
            {t('nav.services')}
          </button>
          <button
            onClick={() => scrollToSection('goods-showcase')}
            className="block w-full text-left py-2 px-3 rounded-md text-sm font-semibold text-slate-800 hover:bg-[#FAF8F5] hover:text-[#0A2240] flex items-center justify-between"
          >
            <span>{t('nav.goodsLogistics')}</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#0A2240] text-[#E8D4A8]">New</span>
          </button>
          <button
            onClick={() => scrollToSection('why-pick-us')}
            className="block w-full text-left py-2 px-3 rounded-md text-sm font-semibold text-slate-800 hover:bg-[#FAF8F5] hover:text-[#0A2240]"
          >
            {t('nav.whyPickUs')}
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="block w-full text-left py-2 px-3 rounded-md text-sm font-semibold text-slate-800 hover:bg-[#FAF8F5] hover:text-[#0A2240]"
          >
            {t('nav.testimonials')}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left py-2 px-3 rounded-md text-sm font-semibold text-slate-800 hover:bg-[#FAF8F5] hover:text-[#0A2240]"
          >
            {t('nav.contact')}
          </button>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#1E7E34] text-white py-2.5 px-4 rounded-xl font-bold text-xs shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp (+86 157 1574 5747)</span>
            </a>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={COMPANY_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#FAF8F5] border border-[#E8E2D5] text-[#0A2240] py-2 px-3 rounded-xl font-semibold text-xs hover:border-pink-500"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-600" />
                <span>Instagram</span>
              </a>
              <a
                href={COMPANY_CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#FAF8F5] border border-[#E8E2D5] text-[#0A2240] py-2 px-3 rounded-xl font-semibold text-xs hover:border-blue-500"
              >
                <Facebook className="w-3.5 h-3.5 text-blue-600" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

