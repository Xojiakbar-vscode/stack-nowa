'use client';

import { useLanguage } from '@/lib/language-context';
import { Check } from 'lucide-react';

export function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">{t.features.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.features.description}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.items.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-background border border-border rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{feature}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
