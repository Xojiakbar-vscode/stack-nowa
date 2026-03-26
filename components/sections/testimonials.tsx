'use client';

import { useLanguage } from '@/lib/language-context';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">{t.testimonials.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.testimonials.description}</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <Card
              key={index}
              className="border border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300 rounded-xl"
            >
              <CardHeader>
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">&quot;{testimonial.testimonial}&quot;</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <CardDescription className="text-sm">{testimonial.company}</CardDescription>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
