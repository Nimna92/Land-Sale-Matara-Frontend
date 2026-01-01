'use client';

import { useState, useRef, useEffect } from 'react';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  placeholder: string;
  onChange?: (value: string) => void;
}

export default function CustomSelect({ options, placeholder, onChange }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option.value);
  };

  return (
    <div className="relative group" ref={dropdownRef}>
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-3 bg-white border-2 border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 hover:border-blue-400 hover:shadow-lg text-gray-700 font-medium shadow-md transition-all duration-300 cursor-pointer text-left flex items-center justify-between"
      >
        <span className={selected ? 'text-gray-700' : 'text-gray-500'}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-white border-2 border-gray-200 rounded-3xl shadow-xl z-50 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200">
          <div className="max-h-80 overflow-y-auto py-2">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option)}
                className={`w-full px-6 py-3 text-left transition-all duration-200 ${
                  selected?.value === option.value
                    ? 'bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 text-blue-700 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                <span className="flex items-center justify-between">
                  <span>{option.label}</span>
                  {selected?.value === option.value && (
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
