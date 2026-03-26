'use client';

import { useLanguage } from '@/lib/language-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Zap, Code2, Brain, TrendingUp, Headphones } from 'lucide-react';

const iconMap: Record<number, any> = {
  0: Cloud,
  1: Zap,
  2: Code2,
  3: Brain,
  4: TrendingUp,
  5: Headphones,
};

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">{t.services.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.services.description}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => {
            const Icon = iconMap[index];
            return (
              <Card
                key={index}
                className="border border-border hover:border-primary hover:shadow-lg transition-all duration-300 rounded-xl bg-card hover:bg-blue-50"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 ml-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
