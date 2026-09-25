import React from 'react';
import { Layers, Building2, UserCheck, ShieldCheck, HelpCircle } from 'lucide-react';
import { organizationSections, siteMeta } from '../config/siteData';
import { OrganizationStructure } from './OrganizationStructure';

export const Organization: React.FC = () => {
  return (
    <section id="organization-section" className="py-16 sm:py-20 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            संरचना एवं कार्यप्रणाली
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
            संगठन
          </h2>
          <p className="mt-3 text-base text-stone-600">
            भारतीय किसान यूनियन (टिकैत), जनपद गौतम बुद्ध नगर की संगठनात्मक व्यवस्था, कार्यक्षेत्र एवं संचालन प्रणाली
          </p>
        </div>

        {/* 2-Column Layout: Sections + Visual Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Organization Scope Sections (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {organizationSections.map((sec, idx) => (
              <div
                key={sec.id}
                className="p-5 sm:p-6 bg-white rounded-xl border border-stone-200 shadow-xs hover:border-emerald-300 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 font-semibold text-sm flex items-center justify-center shrink-0 border border-emerald-100">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-stone-900">
                      {sec.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-stone-600 leading-relaxed">
                      {sec.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Official Information Placeholder for Office Bearers */}
            <div className="p-6 bg-amber-50/70 border border-amber-200 rounded-xl">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-amber-900">
                    आधिकारिक पदाधिकारी विवरण
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-amber-800 leading-relaxed font-medium">
                    {siteMeta.bearerPlaceholder}
                  </p>
                  <p className="mt-2 text-xs text-amber-700">
                    सत्यापित एवं अधिकृत सूचना ही इस पोर्टल पर प्रकाशित की जाती है ताकि पारदर्शिता बनी रहे।
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Hierarchy Tree (5 cols) */}
          <div className="lg:col-span-5">
            <OrganizationStructure />
          </div>

        </div>

      </div>
    </section>
  );
};
