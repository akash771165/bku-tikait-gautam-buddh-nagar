import React, { useState } from 'react';
import { Image as ImageIcon, X, ZoomIn, Info } from 'lucide-react';
import { galleryItems, GalleryItem } from '../config/siteData';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'सभी छायाचित्र' },
    { id: 'संगठनात्मक गतिविधियाँ', label: 'संगठनात्मक गतिविधियाँ' },
    { id: 'किसान कार्यक्रम', label: 'किसान कार्यक्रम' },
    { id: 'बैठकें', label: 'बैठकें' },
    { id: 'जनसंपर्क', label: 'जनसंपर्क' },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="gallery-section" className="py-16 sm:py-20 bg-stone-100/50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            छायाचित्र संकलन
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
            फोटो गैलरी
          </h2>
          <p className="mt-3 text-base text-stone-600">
            जनपद गौतम बुद्ध नगर में किसान एकता, कृषि परिवेश एवं संगठनात्मक गतिविधियों के छायाचित्र
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg overflow-x-auto mb-8 max-w-xl">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              type="button"
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-white text-emerald-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group bg-white rounded-xl overflow-hidden border border-stone-200 shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-4/3 bg-stone-200 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-9 h-9 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-md">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[11px] px-2 py-0.5 rounded">
                  {item.category}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-stone-900 text-sm group-hover:text-emerald-800 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-stone-500 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Note */}
        <div className="mt-8 p-3.5 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-600 flex items-center gap-2">
          <Info className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>
            केवल आधिकारिक एवं वास्तविक संगठनात्मक व कृषि संबंधित संदर्भ छायाचित्र ही प्रदर्शित किए गए हैं।
          </span>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-stone-800">
              <div>
                <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider block">
                  {activeItem.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold">
                  {activeItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                aria-label="बंद करें"
                type="button"
                className="p-2 text-stone-400 hover:text-white hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[65vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Caption */}
            <div className="p-4 bg-stone-900 text-stone-300 text-xs sm:text-sm">
              <p>{activeItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
