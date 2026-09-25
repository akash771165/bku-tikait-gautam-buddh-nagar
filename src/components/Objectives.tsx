import React from 'react';
import { Target, CheckCircle, ShieldAlert } from 'lucide-react';
import { objectivesList } from '../config/siteData';

export const Objectives: React.FC = () => {
  return (
    <section id="objectives-section" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            सिद्धांत एवं दिशा
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
            हमारा उद्देश्य
          </h2>
          <p className="mt-3 text-base text-stone-600">
            ग्रामीण समुदाय, कृषक परिवारों और स्थानीय समाज के सकारात्मक एवं मर्यादित विकास के लिए निर्धारित मूल लक्ष्य
          </p>
        </div>

        {/* 5 Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {objectivesList.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-xl border border-stone-200 bg-white shadow-xs hover:border-emerald-300 transition-colors flex flex-col justify-between ${
                item.id === 5 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-base flex items-center justify-center border border-emerald-200/60">
                    0{item.id}
                  </div>
                  <Target className="w-5 h-5 text-stone-400" />
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-500 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>सार्थक व तथ्यात्मक दृष्टिकोण</span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Conduct Note */}
        <div className="mt-12 max-w-4xl mx-auto p-4 sm:p-5 bg-white border border-stone-200 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-stone-600">
          <ShieldAlert className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-stone-800">नोट: </strong>
            संगठन का मुख्य ध्येय किसानों में पारस्परिक सहयोग, रचनात्मक संवाद और अधिकारों के प्रति कानूनी व तथ्यात्मक जागरूकता का प्रसार करना है। संगठन किसी भी प्रकार के असत्यापित अथवा अतिशयोक्तिपूर्ण दावों से दूरी बनाए रखता है।
          </p>
        </div>

      </div>
    </section>
  );
};
