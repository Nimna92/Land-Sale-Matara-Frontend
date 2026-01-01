'use client';
import Image from "next/image";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import LanguageSwitcher from './components/LanguageSwitcher';
import Footer from './components/Footer'; 
import PostAdModal from './components/PostAdModal';

export default function Home() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      
      {/* --- 1. NAVIGATION BAR --- */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-700">LandSaleMatara</span>
            </div>

            {/* Menu Links */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">{t('nav.home')}</a>
              <a href="#listings" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">{t('nav.featured')}</a>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">{t('nav.about')}</Link>
              <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">{t('nav.contact')}</button>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* --- 2. HERO SECTION --- */}
        <header className="bg-blue-900 text-white py-32 relative overflow-hidden">
  
      {/* Optional: Background decoration (gradient) to make the glass effect pop */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
    
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
        {t('hero.heading')} <span className="text-yellow-400">{t('hero.matara')}</span>
      </h1>
    
      {/* Subheading */}
      <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
        {t('hero.subheading')} <br />
        {t('hero.category')}
      </p>

      {/* Transparent "Glass" Buttons */}
      <div className="flex flex-wrap justify-center gap-6">
      
      {/* Button 1: LANDS */}
      <Link href="/land" className="w-44 px-8 py-4 rounded-xl font-bold tracking-wide text-center transition-all duration-300
          bg-white/10 border border-white/30 backdrop-blur-md 
          text-white flex items-center justify-center gap-2
          hover:bg-white hover:text-blue-900 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
        <span className="inline-flex items-center justify-center w-5 h-5" aria-hidden="true" role="img">🌱</span>
         {t('buttons.lands')}
      </Link>

      {/* Button 2: HOUSES */}
      <Link href="/house" className="w-44 px-8 py-4 rounded-xl font-bold tracking-wide text-center transition-all duration-300
          bg-white/10 border border-white/30 backdrop-blur-md 
          text-white flex items-center justify-center gap-2
          hover:bg-white hover:text-blue-900 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
         <span className="inline-flex items-center justify-center w-5 h-5" aria-hidden="true" role="img">🏠</span>
        {t('buttons.houses')}
      </Link>

      {/* Button 3: APARTMENTS */}
      <Link href="/apartment" className="w-44 px-8 py-4 rounded-xl font-bold tracking-wide text-center transition-all duration-300
        bg-white/10 border border-white/30 backdrop-blur-md 
        text-white flex items-center justify-center gap-2
        hover:bg-white hover:text-blue-900 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
        <span className="inline-flex items-center justify-center w-5 h-5" aria-hidden="true" role="img">🏢</span>
        {t('buttons.apartments')}
      </Link>

        </div>
       </div>
      </header>

      {/* --- 3. LISTINGS SECTION --- */}
      <main id="listings" className="flex-grow max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{t('listings.featured')}</h2>
          <p className="text-gray-500 mt-2">{t('listings.recent')}</p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Property Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <div className="relative h-48 w-full">
               <Image src="/land1.jpg" alt={t('listings.cardAlt')} fill className="object-cover"/>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{t('listings.polhena')}</h3>
                  <p className="text-sm text-gray-500">{t('listings.polhenaLocation')}</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">{t('listings.polhenaSize')}</span>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-blue-700">{t('listings.polhenaPrice')}</p>
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                {t('listings.polhenaDesc')}
              </p>
              <button className="mt-6 w-full py-2 border border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-50 transition">
                {t('listings.viewDetails')}
              </button>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
             <div className="relative h-48 w-full">
               <Image src="/street1.jpeg" alt={t('listings.cardAlt')} fill className="object-cover"/>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{t('listings.nupe')}</h3>
                  <p className="text-sm text-gray-500">{t('listings.nupeLocation')}</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">{t('listings.nupeSize')}</span>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-blue-700">{t('listings.nupePrice')}</p>
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                {t('listings.nupeDesc')}
              </p>
              <button className="mt-6 w-full py-2 border border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-50 transition">
                {t('listings.viewDetails')}
              </button>
            </div>
          </div>

          {/* Property Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <div className="relative h-48 w-full">
               <Image src="/guarden1.jpeg" alt={t('listings.cardAlt')} fill className="object-cover"/>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{t('listings.kambu')}</h3>
                  <p className="text-sm text-gray-500">{t('listings.kambuLocation')}</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">{t('listings.kambuSize')}</span>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-blue-700">{t('listings.kambuPrice')}</p>
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                {t('listings.kambuDesc')}
              </p>
              <button className="mt-6 w-full py-2 border border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-50 transition">
                {t('listings.viewDetails')}
              </button>
            </div>
          </div>

        </div>
      </main>

     {/* Footer */}
           <Footer />

      {/* Post Ad Modal */}
      <PostAdModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}