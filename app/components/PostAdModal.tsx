"use client";

import React, { useState } from 'react';
import { X, Upload, MapPin, Phone, User, FileText } from 'lucide-react';

interface PostAdModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PostAdModal({ isOpen, onClose }: PostAdModalProps) {
  const [adType, setAdType] = useState<"Land" | "House" | "Apartment">("Land");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    location: '',
    description: '',
    contactName: '',
    contactPhone1: '',
    contactPhone2: '',
    landSize: '',
    bedrooms: '',
    bathrooms: '',
    livingRooms: '',
    kitchens: '',
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    // UI-only mode: no backend attached. Show a friendly message and reset form.
    alert('This is a frontend-only demo. No backend is configured to store submissions.');
    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="sticky top-0 bg-white p-5 border-b border-gray-100 flex justify-between items-center z-10">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <FileText className="text-blue-600" />
            Submit Your Advertisement
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-6">
          {/* Section 1: Personal Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase text-gray-400 tracking-wider">Owner Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputGroup icon={User} label="Name with Initials" placeholder="e.g. A.B. Perera" name="contactName" value={formData.contactName} onChange={handleChange} />
              <InputGroup icon={MapPin} label="Location" placeholder="Your property location" name="location" value={formData.location} onChange={handleChange} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputGroup icon={Phone} label="Contact Number 1" placeholder="07x xxx xxxx" name="contactPhone1" value={formData.contactPhone1} onChange={handleChange} />
              <InputGroup icon={Phone} label="Contact Number 2" placeholder="07x xxx xxxx" name="contactPhone2" value={formData.contactPhone2} onChange={handleChange} />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 2: Property Type Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">What are you advertising?</label>
            <div className="grid grid-cols-3 gap-3">
              {['Land', 'House', 'Apartment'].map((type) => (
                <button
                  key={type}
                  onClick={() => setAdType(type as any)}
                  className={`py-2 px-4 rounded-lg text-sm font-medium transition-all ${adType === type ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Section 3: Dynamic Fields */}
          <div className="space-y-4 animate-in slide-in-from-bottom-2 duration-300">
            <h3 className="text-sm font-bold uppercase text-gray-400 tracking-wider">{adType} Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputGroup label="Title" placeholder={`Title for your ${adType.toLowerCase()}`} name="title" value={formData.title} onChange={handleChange} />
              <InputGroup label="Size (Perches)" placeholder="e.g. 10.5" name="landSize" type="number" value={formData.landSize} onChange={handleChange} />
            </div>

            <InputGroup label="Expected Price (LKR)" placeholder="e.g. 2500000" name="price" type="number" value={formData.price} onChange={handleChange} />

            {(adType === 'House' || adType === 'Apartment') && (
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-4">
                <h4 className="font-semibold text-gray-700">Room Configuration</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <InputGroup label="Bedrooms" placeholder="0" name="bedrooms" type="number" value={formData.bedrooms} onChange={handleChange} />
                  <InputGroup label="Bathrooms" placeholder="0" name="bathrooms" type="number" value={formData.bathrooms} onChange={handleChange} />
                  <InputGroup label="Living Rooms" placeholder="0" name="livingRooms" type="number" value={formData.livingRooms} onChange={handleChange} />
                  <InputGroup label="Kitchens" placeholder="0" name="kitchens" type="number" value={formData.kitchens} onChange={handleChange} />
                </div>
              </div>
            )}

            {/* Description & File Uploads */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 h-24"
                  placeholder={`Describe your ${adType.toLowerCase()}...`}
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FileUpload label="Upload Property Plan" />
                <FileUpload label={`Upload ${adType} Images`} multiple />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 p-5 border-t border-gray-200 flex justify-end gap-3">
          <button onClick={onClose} className="px-5 py-2 text-gray-600 font-medium hover:bg-gray-200 rounded-lg transition-colors">
            Cancel
          </button>
          <button onClick={handleSubmit} disabled={loading} className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-md transition-all transform active:scale-95">
            {loading ? 'Submitting...' : 'Submit to Agent'}
          </button>
        </div>
      </div>
    </div>
  );
}

function InputGroup({ label, placeholder, type = "text", icon: Icon, name, value, onChange }: any) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 uppercase mb-1.5 ml-1">{label}</label>
      <div className="relative">
        {Icon && <Icon size={18} className="absolute left-3 top-3 text-gray-400" />}
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className={`w-full p-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all ${Icon ? 'pl-10' : ''}`}
        />
      </div>
    </div>
  );
}

function FileUpload({ label, multiple = false }: { label: string; multiple?: boolean }) {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:bg-blue-50 hover:border-blue-400 transition-colors cursor-pointer group">
      <Upload className="mx-auto text-gray-400 group-hover:text-blue-500 mb-2" size={24} />
      <p className="text-sm font-medium text-gray-600">{label}</p>
      <p className="text-xs text-gray-400 mt-1">{multiple ? 'Select multiple photos' : 'PDF or Image'}</p>
    </div>
  );
}