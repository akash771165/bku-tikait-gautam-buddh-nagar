import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { faqList } from '../config/siteData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            जिज्ञासा एवं समाधान
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
            FAQ / सामान्य प्रश्न
          </h2>
          <p className="mt-3 text-base text-stone-600">
            भारतीय किसान यूनियन (टिकैत), जनपद गौतम बुद्ध नगर के संबंध में अक्सर पूछे जाने वाले स्थायी प्रश्न
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqList.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-stone-50/80 transition-colors cursor-pointer"
                >
                  <span className="text-base font-semibold text-stone-900 leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-emerald-100 text-emerald-800' : 'text-stone-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Note at bottom */}
        <div className="mt-10 p-4 text-center text-xs text-stone-500">
          यदि आपका कोई अन्य सामान्य प्रश्न है, तो आप वेबसाइट के 'संपर्क करें' पृष्ठ अथवा आधिकारिक सोशल मीडिया माध्यमों से संपर्क कर सकते हैं।
        </div>

      </div>
    </section>
  );
};
