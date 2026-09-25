import React, { useState } from 'react';
import { Sprout, AlertCircle, Search, Filter } from 'lucide-react';
import { kisanHitTopics, siteMeta } from '../config/siteData';

export const KisanHit: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'सभी विषय (10)' },
    { id: 'कृषि संसाधन', label: 'कृषि संसाधन' },
    { id: 'योजना एवं मंडी', label: 'योजना एवं मंडी' },
    { id: 'ग्रामीण संरचना', label: 'ग्रामीण संरचना' },
  ];

  const filteredTopics = kisanHitTopics.filter((topic) => {
    const matchesCategory = activeCategory === 'all' || topic.category === activeCategory;
    const matchesSearch =
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="kisan-hit-section" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            प्राथमिक सरोकार
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
            किसान हित
          </h2>
          <p className="mt-3 text-base text-stone-600">
            कृषि, ग्रामीण अर्थव्यवस्था, प्राकृतिक संसाधन एवं किसान जीवन से जुड़े प्रमुख स्थायी विषय
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs (Segmented control) */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-emerald-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="विषय खोजें..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
            />
          </div>

        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 bg-stone-50/70 hover:bg-white rounded-xl border border-stone-200 hover:border-emerald-300 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                  <span className="font-semibold text-emerald-800">{item.category}</span>
                  <span className="text-stone-400">0{idx + 1}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-200/50 text-xs text-stone-500 flex items-center justify-between">
                <span>जनपद गौतम बुद्ध नगर संदर्भ</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500/60 inline-block"></span>
              </div>
            </div>
          ))}
        </div>

        {filteredTopics.length === 0 && (
          <div className="text-center py-12 text-stone-500 text-sm">
            कोई विषय नहीं मिला। कृपया भिन्न शब्द खोजें।
          </div>
        )}

        {/* Mandatory Official Disclaimer */}
        <div className="mt-12 p-5 bg-emerald-50 border-l-4 border-emerald-700 rounded-r-xl">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-emerald-950">
                महत्वपूर्ण सूचना एवं अस्वीकरण (Disclaimer)
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-emerald-900 leading-relaxed font-medium">
                {siteMeta.schemeDisclaimer}
              </p>
              <p className="mt-1.5 text-xs text-emerald-800">
                यह वेबसाइट केवल सामान्य जागरूकता के उद्देश्य से विषयों की रूपरेखा प्रस्तुत करती है। किसी भी योजना में आवेदन या लाभ के लिए संबंधित सरकारी विभाग अथवा आधिकारिक पोर्टल से ही मार्गदर्शन प्राप्त करें।
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
