'use client';

import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Code2, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 pb-12 overflow-hidden bg-background">
      {/* Murakkab Orqa fon bezaklari */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Chap taraf: Matn va Action */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span> {"Raqamli kelajakni quring"}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight leading-[1.1]">
              {t.hero.title.split(' ').map((word: string, i: number) => (
                <span key={i} className={i === 1 ? "text-primary" : ""}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105"
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg rounded-full border-2 hover:bg-secondary transition-all"
              >
                {t.hero.demo}
              </Button>
            </div>

            {/* Kichik ishonch ko'rsatkichlari */}
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                <span>Loyihalar uchun ochiq</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <span>10+ Professional xizmatlar</span>
            </div>
          </motion.div>

          {/* O'ng taraf: Zamonaviy Vizual (Mockup/Illustration) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              {/* Glassmorphism Card Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 backdrop-blur-sm flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8 w-full max-w-md">
                   {/* Interaktiv kichik bloklar */}
                   <HeroCard icon={<Code2 />} label="Toza Kod" delay={0.4} />
                   <HeroCard icon={<Rocket />} label="Tezkorlik" delay={0.6} />
                   <div className="col-span-2 bg-background/60 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
                      <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-[80%] bg-primary/20 rounded" />
                        <div className="h-2 w-[60%] bg-primary/20 rounded" />
                        <div className="h-2 w-[90%] bg-primary/40 rounded" />
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Orqa fondagi suzib yuruvchi elementlar */}
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-6 -left-6 w-24 h-24 bg-background border rounded-2xl shadow-xl flex items-center justify-center text-primary z-20"
            >
              <Code2 size={40} />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function HeroCard({ icon, label, delay }: { icon: React.ReactNode, label: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-background/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg flex flex-col items-center gap-3 text-center"
    >
      <div className="text-primary">{icon}</div>
      <span className="font-bold text-sm uppercase tracking-tighter">{label}</span>
    </motion.div>
  );
}