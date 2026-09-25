import React from 'react';
import { CalendarDays, Users, Megaphone, Lightbulb, UserCheck, MessageCircle, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { activityCategories } from '../config/siteData';

interface ActivitiesProps {
  onNavigate?: (path: string) => void;
}

export const Activities: React.FC<ActivitiesProps> = ({ onNavigate }) => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'meetings':
        return <CalendarDays className="w-5 h-5 text-emerald-700" />;
      case 'farmer-programs':
        return <Users className="w-5 h-5 text-emerald-700" />;
      case 'jan-samwad-activity':
        return <MessageCircle className="w-5 h-5 text-emerald-700" />;
      case 'awareness-drives':
        return <Lightbulb className="w-5 h-5 text-emerald-700" />;
      case 'organizational-participation':
        return <UserCheck className="w-5 h-5 text-emerald-700" />;
      case 'public-contact':
      default:
        return <Megaphone className="w-5 h-5 text-emerald-700" />;
    }
  };

  return (
    <section id="activities-section" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            सतत कार्यप्रणाली
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
            हमारी गतिविधियाँ
          </h2>
          <p className="mt-3 text-base text-stone-600">
            जनपद गौतम बुद्ध नगर में संगठन द्वारा संचालित होने वाली मूलभूत स्थायी गतिविधियों का सामान्य स्वरूप
          </p>
        </div>

        {/* 6 Evergreen Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activityCategories.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 bg-stone-50/60 rounded-xl border border-stone-200 hover:border-emerald-300 hover:bg-white transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                    {getCategoryIcon(item.id)}
                  </div>
                  <span className="text-xs font-semibold text-stone-400">
                    श्रेणी 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-500">
                <span>स्थायी संगठनात्मक स्वरूप</span>
                <span className="text-emerald-700 font-medium">सदाबहार</span>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Preview Box & Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-stone-900 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-700 flex items-center justify-center text-white shrink-0">
              <ImageIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">
                आधिकारिक फोटो गैलरी
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1">
                संगठन की गतिविधियों, बैठकों एवं ग्रामीण जनसंवाद की प्रामाणिक छायाचित्र वीथिका
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate && onNavigate('/gallery')}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-stone-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer shrink-0"
          >
            <span>फोटो गैलरी देखें</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
