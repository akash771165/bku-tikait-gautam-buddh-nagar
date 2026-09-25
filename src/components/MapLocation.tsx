import React from 'react';
import { MapPin, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { socialLinks } from '../config/socialLinks';
import { siteMeta } from '../config/siteData';

export const MapLocation: React.FC = () => {
  return (
    <section id="map-location-section" className="py-16 sm:py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Content Area (7 cols) */}
            <div className="p-8 sm:p-12 lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
                  भौगोलिक अवस्थिति
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
                  <span>📍 हमारा स्थान</span>
                </h2>

                <div className="mt-2 text-base font-bold text-emerald-900">
                  {siteMeta.orgName} — {siteMeta.district}
                </div>

                <p className="mt-4 text-base text-stone-600 leading-relaxed">
                  "जनपद गौतम बुद्ध नगर में संगठन से संबंधित स्थान की जानकारी एवं मार्ग देखने के लिए Google Maps पर देखें।"
                </p>

                <div className="mt-6 space-y-2 text-xs sm:text-sm text-stone-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>कार्यक्षेत्र: Greater Noida, दादरी, जेवर, जनपद गौतम बुद्ध नगर (उत्तर प्रदेश)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>सत्यापित Google Maps लोकेशन लिंक</span>
                  </div>
                </div>
              </div>

              {/* Two Mandatory Buttons */}
              <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap items-center gap-3 sm:gap-4">
                
                {/* Button 1: [📍 Google Maps पर स्थान देखें] */}
                <a
                  href={socialLinks.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors cursor-pointer"
                >
                  <MapPin className="w-4 h-4" />
                  <span>📍 Google Maps पर स्थान देखें</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                {/* Button 2: [🧭 रास्ता देखें] */}
                <a
                  href={socialLinks.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition-colors cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-emerald-700" />
                  <span>🧭 रास्ता देखें</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

              </div>
            </div>

            {/* Right Map Visual Teaser (5 cols) */}
            <div className="lg:col-span-5 bg-stone-900 relative min-h-[260px] sm:min-h-[320px] flex items-center justify-center p-6 text-center text-white">
              {/* Stylized Map Grid Art */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 max-w-xs space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-600/30 border border-emerald-500/50 flex items-center justify-center animate-pulse">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-stone-950 shadow-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    Google Maps नेविगेशन
                  </h3>
                  <p className="text-xs text-stone-300 mt-1">
                    सटीक दिशा-निर्देश व लाइव नेविगेशन के लिए सीधे Google Maps ऐप अथवा ब्राउज़र में खोलें
                  </p>
                </div>

                <a
                  href={socialLinks.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 hover:text-white underline underline-offset-4"
                >
                  <span>स्थान लिंक खोलें</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
