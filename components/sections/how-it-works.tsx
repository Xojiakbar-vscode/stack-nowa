'use client';

import { useLanguage } from '@/lib/language-context';

export function HowItWorksSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">{t.howItWorks.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.howItWorks.description}</p>
        </div>

        {/* Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.howItWorks.steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Card */}
              <div className="bg-card border border-border rounded-xl p-8 h-full hover:shadow-lg transition-shadow">
                {/* Step Number */}
                <div className="text-5xl font-bold text-primary/20 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {/* Connector Line */}
              {index < t.howItWorks.steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
