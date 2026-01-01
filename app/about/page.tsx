"use client";

import React, { useState } from 'react';
import { ShieldCheck, Users, Trophy, Target, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import LanguageSwitcher from '../components/LanguageSwitcher';
import PostAdModal from '../components/PostAdModal';
import Footer from '../components/Footer';

export default function AboutPage() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-700">LandSaleMatara</span>
            </Link>
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">{t('nav.home')}</Link>
              <Link href="/apartment" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">{t('nav.apartments')}</Link>
              <Link href="/house" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">{t('nav.houses')}</Link>
              <Link href="/land" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">{t('nav.lands')}</Link>
              <Link href="/about" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">{t('nav.about')}</Link>
              <button onClick={() => setIsModalOpen(true)} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">{t('nav.contact')}</button>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>
      
      {/* 1. Hero Section */}
      <div className="bg-slate-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.hero.title')}</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">{t('about.hero.subtitle')}</p>
      </div>

      {/* 2. Stats Section (Social Proof) */}
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <StatBox number="500+" label={t('about.stats.propertiesSold')} />
          <StatBox number="1.2K" label={t('about.stats.happyClients')} />
          <StatBox number="10+" label={t('about.stats.yearsExperience')} />
          <StatBox number="25" label={t('about.stats.citiesCovered')} />
        </div>
      </div>

      {/* 3. Our Story & Mission */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-2">{t('about.story.kicker')}</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('about.story.heading')}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">{t('about.story.body1')}</p>
          <p className="text-gray-600 leading-relaxed">{t('about.story.body2')}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <img src="/land1.jpeg" alt="Our Work" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" />
            <img src="/street1.jpeg" alt="Our Work" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
        </div>
      </div>

      {/* 4. Why Choose Us (Features) */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">{t('about.why.heading')}</h2>
            <p className="text-gray-600 mt-4">{t('about.why.subheading')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={ShieldCheck} 
              title={t('about.why.cards.verified.title')} 
              desc={t('about.why.cards.verified.desc')}
            />
            <FeatureCard 
              icon={Users} 
              title={t('about.why.cards.guidance.title')} 
              desc={t('about.why.cards.guidance.desc')}
            />
            <FeatureCard 
              icon={Trophy} 
              title={t('about.why.cards.rates.title')} 
              desc={t('about.why.cards.rates.desc')}
            />
          </div>
        </div>
      </div>

      {/* 5. CTA Section */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.cta.heading')}</h2>
        <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-slate-800 transition-colors inline-flex items-center gap-2">
          {t('about.cta.button')} <ArrowRight size={20} />
        </button>
      </div>

      {/* Footer */}
      <Footer />

      {/* Post Ad Modal */}
      <PostAdModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}

// --- Helper Components for clean code ---

function StatBox({ number, label }: { number: string, label: string }) {
  return (
    <div>
      <div className="text-4xl font-bold mb-1">{number}</div>
      <div className="text-blue-100 text-sm uppercase tracking-wide">{label}</div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc }: any) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
      <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}