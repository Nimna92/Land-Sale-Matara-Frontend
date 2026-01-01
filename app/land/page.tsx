'use client';
import PropertyCard from '../components/PropertyCard';
import FilterSection from '../components/FilterSection';
import Footer from '../components/Footer';
import Link from 'next/link';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export default function LandPage() {
  const { t } = useTranslation();
  
  // Mock Data
  const landAds = [
    {
      id: 1,
      title: "Prime Commercial Block",
      price: "50 Lakhs",
      location: "Malabe, Colombo District",
      imageUrl: "/land1.jpeg", 
      specs: "10 Perches"
    },
    {
      id: 2,
      title: "Scenic Hilltop View",
      price: "25 Lakhs",
      location: "Kandy Town",
      imageUrl: "/guarden1.jpeg",
      specs: "15 Perches"
    },
    {
      id: 3,
      title: "Beachside Investment",
      price: "1.2 Crores",
      location: "Hikkaduwa, Galle",
      imageUrl: "/street1.jpeg",
      specs: "8 Perches"
    },
    {
        id: 4,
        title: "Residential Plot",
        price: "45 Lakhs",
        location: "Nugegoda",
        imageUrl: "/street1.jpeg", 
        specs: "12 Perches"
      },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-700">LandSaleMatara</span>
            </Link>
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">Home</Link>
              <Link href="/apartment" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">Apartments</Link>
              <Link href="/house" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">Houses</Link>
              <Link href="/land" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Lands</Link>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>
      
      {/* Header Section with Gradient - Land Page */}
      <header className="bg-gradient-to-r from-green-700 to-green-900 text-white py-16 px-6 mb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">{t('land.heading')}</h1>
          <p className="text-lg text-green-100 max-w-2xl">{t('land.subheading')}</p>
        </div>
      </header>

      {/* 2. Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        
        {/* Filter Section */}
        <FilterSection />

        {/* Results Count */}
        <div className="mb-6 text-gray-600 font-medium">
          {t('land.showing', { count: landAds.length })}
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {landAds.map((ad) => (
            <PropertyCard
              key={ad.id}
              type="Land"
              title={ad.title}
              price={ad.price}
              location={ad.location}
              imageUrl={ad.imageUrl}
              specs={ad.specs}
        
            />
            
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}