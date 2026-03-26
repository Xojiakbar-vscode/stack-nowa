'use client';

import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils'; // Shadcn yordamchi funksiyasi

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Skroll bo'lganda header effektini o'zgartirish
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'uz' as const, label: 'O‘zbek' },
    { code: 'en' as const, label: 'English' },
    { code: 'ru' as const, label: 'Русский' },
  ];

  const navLinks = [
    { href: '#home', label: t.header.home },
    { href: '#services', label: t.header.services },
    { href: '#about', label: t.header.about },
    { href: '#contact', label: t.header.contact },
  ];

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-2" 
          : "bg-background py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 transition-transform hover:scale-105">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-primary">
              Stack<span className="text-foreground">nowa</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-full hover:bg-secondary transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Language & Mobile Toggle */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Language Switcher (Desktop) */}
            <div className="hidden sm:flex items-center bg-secondary/50 p-1 rounded-full border">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-semibold transition-all",
                    language === lang.code
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Contact Button (CTA) */}
            <Button size="sm" className="hidden sm:flex rounded-full">
              Bog'lanish
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-xl bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menyuni ochish"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        "fixed inset-0 top-[64px] z-40 bg-background md:hidden transition-all duration-300 ease-in-out transform",
        mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}>
        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xl font-semibold border-b border-border pb-3 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          
          {/* Mobile Language Switcher */}
          <div className="pt-4">
            <p className="text-sm text-muted-foreground mb-3 uppercase tracking-widest font-bold">Tilni tanlang</p>
            <div className="grid grid-cols-3 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "py-3 rounded-xl border-2 text-sm font-bold transition-all",
                    language === lang.code
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-transparent bg-secondary"
                  )}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}