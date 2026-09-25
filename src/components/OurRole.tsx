import React from 'react';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { ourRoles } from '../config/siteData';

export const OurRole: React.FC = () => {
  return (
    <section id="role-section" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            कार्यक्षेत्र व उत्तरदायित्व
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
            हमारी भूमिका
          </h2>
          <p className="mt-3 text-base text-stone-600">
            जनपद गौतम बुद्ध नगर में कृषक समाज के संवर्धन और सहयोग के लिए संगठन की निर्धारित कार्यशैली
          </p>
        </div>

        {/* Roles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
          {ourRoles.map((role, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-xl border border-stone-200 flex items-start gap-4 hover:border-emerald-300 transition-colors shadow-2xs"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-100/80 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0">
                0{idx + 1}
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold text-stone-900 leading-snug">
                  {role}
                </p>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-stone-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>तथ्यात्मक एवं मर्यादित पद्धति</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Constructive Dialogue Note */}
        <div className="mt-8 max-w-5xl p-4 bg-stone-100/80 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-600">
          <strong className="text-stone-800">रचनात्मक संवाद: </strong>
          संगठन की भूमिका मुख्य रूप से किसानों के मध्य संपर्क सूत्र स्थापित करना और वैधानिक व शांतिपूर्ण माध्यमों से उनके सरोकारों को प्रकाश में लाना है।
        </div>

      </div>
    </section>
  );
};
