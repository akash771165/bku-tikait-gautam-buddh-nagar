import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';
import { siteMeta } from '../config/siteData';

export const OfficialTrustNotice: React.FC = () => {
  return (
    <div className="py-8 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-5 sm:p-6 rounded-xl border border-stone-200 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-100">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-stone-900 mb-1">
              आधिकारिक जानकारी एवं पारदर्शिता
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              {siteMeta.officialNotice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
