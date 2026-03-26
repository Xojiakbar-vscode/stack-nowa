'use client';

import { useLanguage } from '@/lib/language-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, CheckCircle2, Users, Target } from 'lucide-react';

const iconMap: Record<number, any> = {
  0: Clock,
  1: CheckCircle2,
  2: Users,
  3: Target,
};

export function WhyChooseUsSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">{t.whyChoose.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.whyChoose.description}</p>
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyChoose.items.map((item, index) => {
            const Icon = iconMap[index];
            return (
              <Card
                key={index}
                className="border border-border bg-background hover:border-primary hover:shadow-lg transition-all duration-300 rounded-xl"
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
