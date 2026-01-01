"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail, Home } from 'lucide-react';
import PostAdModal from './PostAdModal';

export default function Footer() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          
          {/* Column 1: Brand Info */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <Home className="text-blue-500" />
              {t('footer.brand')}
            </div>
            <p className="text-sm leading-relaxed mb-6">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">{t('footer.home')}</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">{t('footer.about')}</Link></li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="hover:text-blue-400 transition-colors"
                >
                  {t('footer.contactAgents')}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Properties */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">{t('footer.properties')}</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/land" className="hover:text-blue-400 transition-colors">{t('footer.landForSale')}</Link></li>
              <li><Link href="/house" className="hover:text-blue-400 transition-colors">{t('footer.housesForSale')}</Link></li>
              <li><Link href="/apartment" className="hover:text-blue-400 transition-colors">{t('footer.apartmentsForRent')}</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">{t('footer.contactUs')}</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 shrink-0 mt-0.5" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span>{t('footer.phoneNumber')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span>{t('footer.emailAddress')}</span>
              </li>
            </ul>
          </div>

        </div>

        <hr className="border-slate-800 mb-6" />

        {/* Bottom Bar: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
          <div className="flex gap-3">
            <SocialIcon icon={Facebook} />
            <SocialIcon icon={Instagram} />
            <SocialIcon icon={Twitter} />
            <SocialIcon icon={Linkedin} />
          </div>
        </div>

        <PostAdModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      </div>
    </footer>
  );
}

// Helper Component for Social Icons
function SocialIcon({ icon: Icon }: any) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
      <Icon size={18} />
    </a>
  );
}