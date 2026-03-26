'use client';

import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
            Biz bilan bog'laning va loyihangizni yangi bosqichga olib chiqing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Bog'lanish Ma'lumotlari */}
          <div className="space-y-6">
            <ContactInfoCard 
              icon={<Phone className="w-6 h-6" />} 
              title="Telefon" 
              value="+998 20 014-66-67" 
              href="tel:+998200146667"
            />
            <ContactInfoCard 
              icon={<Mail className="w-6 h-6" />} 
              title="Telegram" 
              value="@stacknowa" 
              href="https://t.me/stacknowa"
            />
            <ContactInfoCard 
              icon={<MapPin className="w-6 h-6" />} 
              title="Manzil" 
              value="Namangan, O'zbekiston" 
            />
          </div>

          {/* Form qismi */}
          <div className="lg:col-span-2 relative">
            <div className="bg-background border border-border rounded-2xl p-6 md:p-10 shadow-xl shadow-primary/5">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium pl-1">Ismingiz</label>
                    <Input
                      name="name"
                      placeholder="Masalan: Alisher"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 bg-secondary/50 border-none focus-visible:ring-2 focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium pl-1">Email manzilingiz</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="alisher@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 bg-secondary/50 border-none focus-visible:ring-2 focus-visible:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium pl-1">Kompaniya (ixtiyoriy)</label>
                  <Input
                    name="company"
                    placeholder="Kompaniyangiz nomi"
                    value={formData.company}
                    onChange={handleChange}
                    className="h-12 bg-secondary/50 border-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium pl-1">Xabaringiz</label>
                  <Textarea
                    name="message"
                    placeholder="Loyiha haqida batafsil ma'lumot bering..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] bg-secondary/50 border-none focus-visible:ring-2 focus-visible:ring-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 text-lg font-bold transition-all hover:scale-[1.01] active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">Yuborilmoqda...</span>
                  ) : (
                    <span className="flex items-center gap-2">Yuborish <Send className="w-4 h-4" /></span>
                  )}
                </Button>

                {/* Xabarnomalar */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-600 animate-in fade-in slide-in-from-bottom-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <p className="font-medium">Xabaringiz muvaffaqiyatli yuborildi! Tez orada bog'lanamiz.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive animate-in fade-in slide-in-from-bottom-2">
                    <AlertCircle className="w-5 h-5" />
                    <p className="font-medium">Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Yordamchi komponent
function ContactInfoCard({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href?: string }) {
  const Content = () => (
    <div className="flex items-center gap-5 p-5 bg-background border border-border rounded-2xl hover:border-primary/50 transition-all hover:shadow-md group">
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{title}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block cursor-pointer">
      <Content />
    </a>
  ) : (
    <Content />
  );
}