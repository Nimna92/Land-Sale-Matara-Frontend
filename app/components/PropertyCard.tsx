import React from 'react';
import { MapPin, Bed, Ruler, ArrowRight } from 'lucide-react';

interface PropertyCardProps {
  title: string;
  price: string;
  location: string;
  imageUrl: string;
  type: 'Land' | 'House' | 'Apartment';
  specs: string;
}

const PropertyCard = ({ title, price, location, imageUrl, type, specs }: PropertyCardProps) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full">
      
      {/* Image Container with Zoom Effect */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-gray-800 shadow-sm">
          {type}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
           <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin size={16} className="mr-1 text-blue-500" />
          {location}
        </div>

        {/* Specs & Price Row */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg text-sm font-medium">
            <Ruler size={16} className="mr-2 text-gray-400" />
            {specs}
          </div>
          <p className="text-xl font-bold text-blue-600">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;