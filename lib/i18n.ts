import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

// Language type definition
export type Language = 'en' | 'uz' | 'ru';

// Translations object (provided by you)
export const translations = {
  en: {
    header: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
    hero: {
      title: 'Transform Your Business with Digital Solutions',
      subtitle: 'We help enterprises modernize operations, enhance efficiency, and drive innovation through cutting-edge technology',
      cta: 'Get Started',
      demo: 'Book Demo',
    },
    services: {
      title: "Our Services",
      description: "We build and integrate internal and external systems to fully digitalize your business",
      items: [
        {
          title: "Internal Systems (ERP, CRM)",
          description: "Manage all internal processes: employees, tasks, sales, and customer relationships"
        },
        {
          title: "External Systems (Web Platforms)",
          description: "Build websites, user dashboards, and online service platforms for your clients"
        },
        {
          title: "System Integration",
          description: "Connect internal and external systems: CRM, payment systems, APIs, and more"
        },
        {
          title: "Automation",
          description: "Automate manual processes to save time and resources"
        },
        {
          title: "Analytics & Monitoring",
          description: "Track business performance with real-time reports and insights"
        },
        {
          title: "Technical Support",
          description: "Ongoing support, updates, and system optimization"
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose Us',
      description: 'Industry-leading expertise and proven results',
      items: [
        { title: '15+ Years Experience', description: 'Proven track record in enterprise digital transformation' },
        { title: '500+ Projects Delivered', description: 'Successfully completed projects across diverse industries' },
        { title: '24/7 Support', description: 'Round-the-clock technical support and maintenance' },
        { title: 'Expert Team', description: 'Certified professionals with deep technical expertise' },
      ],
    },
    howItWorks: {
      title: 'How It Works',
      description: 'Our proven methodology ensures successful implementation',
      steps: [
        { step: '01', title: 'Discovery & Planning', description: 'We analyze your current systems and create a comprehensive roadmap' },
        { step: '02', title: 'Design & Architecture', description: 'Build scalable solutions tailored to your specific requirements' },
        { step: '03', title: 'Implementation', description: 'Deploy solutions with minimal disruption to your operations' },
        { step: '04', title: 'Support & Optimization', description: 'Continuous monitoring and improvement for peak performance' },
      ],
    },
    features: {
      title: 'Key Features',
      description: 'Everything you need for successful digital transformation',
      items: ['Scalable Infrastructure', 'Advanced Security', 'Real-time Analytics', 'Integration Ready', 'Performance Optimized', 'Cost Efficient'],
    },
    testimonials: {
      title: 'Client Testimonials',
      description: 'What our clients say about working with us',
      items: [
        { name: 'Ahmed Al-Mansouri', company: 'TechCorp Middle East', testimonial: 'Stacknowa transformed our entire operation. Their expertise and dedication made the process seamless.', rating: 5 },
        { name: 'Fatima Khan', company: 'Global Commerce Solutions', testimonial: 'Outstanding service and technical excellence. They delivered beyond our expectations.', rating: 5 },
        { name: 'Muhammad Ibrahim', company: 'Enterprise Systems Inc', testimonial: "The team's professionalism and commitment to quality was evident throughout the project.", rating: 5 },
      ],
    },
    contact: {
      title: 'Get In Touch',
      description: 'Ready to transform your business? Contact us today',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        company: 'Company Name',
        message: 'Message',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again.',
      },
    },
    footer: {
      company: 'Stacknowa',
      tagline: 'Digital Transformation Solutions',
      quickLinks: 'Quick Links',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: 'All rights reserved.',
    },
  },
  uz: {
    header: {
      home: 'Bosh sahifa',
      services: 'Xizmatlar',
      about: 'Biz haqida',
      portfolio: 'Portfolio',
      contact: 'Aloqa',
    },
    hero: {
      title: 'Biznesingizni Raqamli Yechimlar bilan Transformasiya Qiling',
      subtitle: 'Biz korxonalarni modernizatsiya qilishda, samaradorlikni oshirishda va zamonaviy texnologiyalar orqali innovatsiyani rivojlantirishda yordam beramiz',
      cta: 'Boshlash',
      demo: 'Demoni ko\'rish',
    },
    services: {
      title: "Xizmatlarimiz",
      description: "Biz biznesingiz uchun ichki va tashqi tizimlarni ishlab chiqamiz va to‘liq integratsiya qilamiz",
      items: [
        { title: "Ichki tizimlar (ERP, CRM)", description: "Kompaniya ichidagi barcha jarayonlarni boshqarish: xodimlar, vazifalar, savdo va mijozlar bilan ishlash tizimlari" },
        { title: "Tashqi tizimlar (Web platformalar)", description: "Mijozlar uchun web saytlar, shaxsiy kabinetlar va online xizmat platformalarini yaratish" },
        { title: "Tizimlar integratsiyasi", description: "Ichki va tashqi tizimlarni bir-biri bilan bog‘lash: CRM, to‘lov tizimlari, API va boshqa xizmatlar" },
        { title: "Avtomatlashtirish", description: "Qo‘lda bajariladigan jarayonlarni avtomatlashtirib, vaqt va resurslarni tejash" },
        { title: "Analitika va monitoring", description: "Real vaqt rejimida hisobotlar va biznes ko‘rsatkichlarini kuzatish" },
        { title: "Texnik qo‘llab-quvvatlash", description: "Doimiy texnik yordam, tizimlarni yangilash va optimizatsiya qilish" }
      ]
    },
    whyChoose: {
      title: 'Nima Uchun Bizni Tanlaysiz',
      description: 'Sohada yetakchi tajriba va tasdiqlangan natijalar',
      items: [
        { title: '15+ Yil Tajriba', description: 'Korxona raqamli transformatsiyasida isbotlangan saboqali' },
        { title: '500+ Loyiha Tugatilgan', description: 'Turli sohalardan muvaffaqiyatli tugatilgan loyihalar' },
        { title: '24/7 Qo\'llab-quvvatlash', description: 'Doimiy texnik qo\'llab-quvvatlash va ta\'mirlash' },
        { title: 'Mutaxassis Jamoa', description: 'Chuqur texnik bilimga ega sertifikatlangan mutaxassislar' },
      ],
    },
    howItWorks: {
      title: 'Qanday Ishlaydi',
      description: 'Bizning isbotlangan metodologiyasi muvaffaqiyatli amalga oshirishni ta\'minlaydi',
      steps: [
        { step: '01', title: 'Kashfiyot va Rejalashtirish', description: 'Biz sizning joriy tizimlarni tahlil qilamiz va keng qamovli yo\'lboshchi yaratamiz' },
        { step: '02', title: 'Dizayn va Arxitektura', description: 'Sizning maxsus talablarida moslashtirilgan masshtablanuvchi yechimlarni quramiz' },
        { step: '03', title: 'Amalga Oshirish', description: 'Yechimlarni sizning operatsiyalaringizga minimal ta\'sir bilan joylashtiring' },
        { step: '04', title: 'Qo\'llab-quvvatlash va Optimizatsiya', description: 'Eng yuqori samaradorlik uchun doimiy monitoring va yaxshilash' },
      ],
    },
    features: {
      title: 'Asosiy Xususiyatlar',
      description: 'Muvaffaqiyatli raqamli transformatsiya uchun zarur bo\'lgan hamma narsa',
      items: ['Masshtablanuvchi Infratuzilma', 'Ilg\'or Xavfsizlik', 'Real-time Analitika', 'Integratsiya Tayyorligi', 'Samaradorlik Optimizatsiyasi', 'Xarajatli Samarali'],
    },
    testimonials: {
      title: 'Mijozlar Gaplari',
      description: 'Biziz bilan ishlashni nima deb o\'ylaydilar',
      items: [
        { name: 'Ahmed Al-Mansouri', company: 'TechCorp Middle East', testimonial: 'Stacknowa bizning butun operatsiyamizni o\'zgartirdi. Ularning bilimi va fidolilik jarayonni oson qildi.', rating: 5 },
        { name: 'Fatima Khan', company: 'Global Commerce Solutions', testimonial: 'Ajoyib xizmat va texnik mukammalligi. Ular bizning kutishlarimizdan ko\'ra ko\'proq bo\'ldi.', rating: 5 },
        { name: 'Muhammad Ibrahim', company: 'Enterprise Systems Inc', testimonial: 'Jamoanining kasbiylik va sifatga intilishi loyihani butunlay ko\'rsatdi.', rating: 5 },
      ],
    },
    contact: {
      title: 'Bizni Bilan Bog\'lanish',
      description: 'Biznesingizni transformasiya qilishga tayyor emusiz? Bugun bizni bilan bog\'lanin',
      form: {
        name: 'To\'liq Ism',
        email: 'Email Manzili',
        company: 'Kompaniya Nomi',
        message: 'Xabar',
        submit: 'Xabar Jo\'natish',
        sending: 'Jo\'natilmoqda...',
        success: 'Xabar muvaffaqiyatli jo\'natildi!',
        error: 'Xabar jo\'natishda xato. Iltimos, qaytadan urinib ko\'ring.',
      },
    },
    footer: {
      company: 'Stacknowa',
      tagline: 'Raqamli Transformasiya Yechimlar',
      quickLinks: 'Tez Havolalar',
      services: 'Xizmatlar',
      about: 'Biz haqida',
      contact: 'Aloqa',
      legal: 'Huquqiy',
      privacy: 'Maxfiylik Siyosati',
      terms: 'Foydalanish Shartlari',
      copyright: 'Barcha huquqlar saqlanib qoldi.',
    },
  },
  ru: {
    header: {
      home: 'Главная',
      services: 'Услуги',
      about: 'О нас',
      portfolio: 'Портфолио',
      contact: 'Контакты',
    },
    hero: {
      title: 'Преобразуйте ваш бизнес с помощью цифровых решений',
      subtitle: 'Мы помогаем предприятиям модернизировать операции, повысить эффективность и внедрить инновации с помощью передовых технологий',
      cta: 'Начать',
      demo: 'Забронировать демо',
    },
    services: {
      title: "Наши услуги",
      description: "Мы разрабатываем внутренние и внешние системы и полностью интегрируем их для вашего бизнеса",
      items: [
        { title: "Внутренние системы (ERP, CRM)", description: "Управление всеми процессами внутри компании: сотрудники, задачи, продажи и клиенты" },
        { title: "Внешние системы (Web платформы)", description: "Создание сайтов, личных кабинетов и онлайн-сервисов для клиентов" },
        { title: "Интеграция систем", description: "Связываем внутренние и внешние системы: CRM, платежи, API и другие сервисы" },
        { title: "Автоматизация", description: "Автоматизация процессов для экономии времени и ресурсов" },
        { title: "Аналитика и мониторинг", description: "Отчеты и контроль бизнеса в реальном времени" },
        { title: "Техническая поддержка", description: "Поддержка, обновление и оптимизация системы" }
      ]
    },
    whyChoose: {
      title: 'Почему выбрать нас',
      description: 'Опыт мирового класса и доказанные результаты',
      items: [
        { title: '15+ лет опыта', description: 'Доказанный опыт в цифровой трансформации предприятий' },
        { title: '500+ завершенных проектов', description: 'Успешно реализованные проекты в различных отраслях' },
        { title: 'Поддержка 24/7', description: 'Круглосуточная техническая поддержка и обслуживание' },
        { title: 'Опытная команда', description: 'Сертифицированные специалисты с глубокими техническими знаниями' },
      ],
    },
    howItWorks: {
      title: 'Как это работает',
      description: 'Наша проверенная методология обеспечивает успешную реализацию',
      steps: [
        { step: '01', title: 'Исследование и планирование', description: 'Мы анализируем ваши текущие системы и создаем подробный план действий' },
        { step: '02', title: 'Дизайн и архитектура', description: 'Создаём масштабируемые решения, адаптированные к вашим конкретным требованиям' },
        { step: '03', title: 'Внедрение', description: 'Развёртываем решения с минимальным влиянием на ваши операции' },
        { step: '04', title: 'Поддержка и оптимизация', description: 'Постоянный мониторинг и совершенствование для максимальной производительности' },
      ],
    },
    features: {
      title: 'Ключевые возможности',
      description: 'Всё, что вам нужно для успешной цифровой трансформации',
      items: ['Масштабируемая инфраструктура', 'Передовая безопасность', 'Аналитика в реальном времени', 'Готовность к интеграции', 'Оптимизация производительности', 'Экономическая эффективность'],
    },
    testimonials: {
      title: 'Отзывы клиентов',
      description: 'Что говорят наши клиенты о работе с нами',
      items: [
        { name: 'Ahmed Al-Mansouri', company: 'TechCorp Middle East', testimonial: 'Stacknowa трансформировал всю нашу деятельность. Их опыт и преданность сделали процесс безупречным.', rating: 5 },
        { name: 'Fatima Khan', company: 'Global Commerce Solutions', testimonial: 'Отличное обслуживание и техническое совершенство. Они превзошли наши ожидания.', rating: 5 },
        { name: 'Muhammad Ibrahim', company: 'Enterprise Systems Inc', testimonial: 'Профессионализм команды и приверженность качеству были очевидны на протяжении всего проекта.', rating: 5 },
      ],
    },
    contact: {
      title: 'Свяжитесь с нами',
      description: 'Готовы трансформировать свой бизнес? Свяжитесь с нами сегодня',
      form: {
        name: 'Полное имя',
        email: 'Адрес электронной почты',
        company: 'Название компании',
        message: 'Сообщение',
        submit: 'Отправить сообщение',
        sending: 'Отправка...',
        success: 'Сообщение успешно отправлено!',
        error: 'Ошибка при отправке сообщения. Пожалуйста, попробуйте снова.',
      },
    },
    footer: {
      company: 'Stacknowa',
      tagline: 'Решения для цифровой трансформации',
      quickLinks: 'Быстрые ссылки',
      services: 'Услуги',
      about: 'О нас',
      contact: 'Контакты',
      legal: 'Правовая информация',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      copyright: 'Все права защищены.',
    },
  },
};

export const defaultLanguage: Language = 'en'