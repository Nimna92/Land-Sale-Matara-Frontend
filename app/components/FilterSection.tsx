"use client"; // This is required for interactivity

import CustomSelect from './CustomSelect';
import { useTranslation } from 'react-i18next';

export default function FilterSection() {
  const { t } = useTranslation();

  const locationOptions = [
    { value: 'matara-town', label: t('filter.locations.mataraTown') },
    { value: 'weligama', label: t('filter.locations.weligama') },
    { value: 'mirissa', label: t('filter.locations.mirissa') },
    { value: 'dikwella', label: t('filter.locations.dikwella') },
    { value: 'kamburugamuwa', label: t('filter.locations.kamburugamuwa') },
    { value: 'hakmana', label: t('filter.locations.hakmana') },
    { value: 'akuressa', label: t('filter.locations.akuressa') },
    { value: 'devinuwara', label: t('filter.locations.devinuwara') },
    { value: 'gandara', label: t('filter.locations.gandara') },
  ];

  const priceOptions = [
    { value: 'low', label: t('filter.prices.low') },
    { value: 'mid', label: t('filter.prices.mid') },
    { value: 'high', label: t('filter.prices.high') },
    { value: 'premium', label: t('filter.prices.premium') },
  ];

  const perchesOptions = [
    { value: 'small', label: t('filter.sizes.small') },
    { value: 'medium', label: t('filter.sizes.medium') },
    { value: 'large', label: t('filter.sizes.large') },
    { value: 'xlarge', label: t('filter.sizes.xlarge') },
  ];

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
      <p className="text-gray-600 font-medium mb-6 text-center">{t('filter.hint')}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Location Dropdown */}
        <CustomSelect 
          options={locationOptions}
          placeholder={t('filter.locationPlaceholder')}
        />

        {/* Price Dropdown */}
        <CustomSelect 
          options={priceOptions}
          placeholder={t('filter.pricePlaceholder')}
        />

        {/* Perches Dropdown */}
        <CustomSelect 
          options={perchesOptions}
          placeholder={t('filter.sizePlaceholder')}
        />
      </div>
    </div>
  );
}