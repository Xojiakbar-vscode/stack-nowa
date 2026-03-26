'use client';

import { useLanguage } from '@/lib/language-context';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-3">{t.footer.company}</h3>
            <p className="text-background/80 mb-6">{t.footer.tagline}</p>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+998 20 014-66-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <div>Telegram</div>
                <span>@stacknowa</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Namangan, Uzbekistan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li>
                <a href="#home" className="hover:text-background transition-colors">
                  {t.header.home}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  {t.footer.services}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-background transition-colors">
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-colors">
                  {t.footer.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">{t.footer.services}</h4>
            <ul className="space-y-3 text-sm text-background/80">
              {t.services.items.slice(0, 4).map((service, index) => (
                <li key={index}>
                  <a href="#services" className="hover:text-background transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-6">{t.footer.legal}</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <p className="text-center text-sm text-background/70">
            © {currentYear} Stacknowa. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
