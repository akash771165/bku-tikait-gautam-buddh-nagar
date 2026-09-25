import React from 'react';
import { Sprout, Scale, Users, MessagesSquare, Calendar, Info, ArrowUpRight } from 'lucide-react';
import { quickInformationCards } from '../config/siteData';

interface QuickInfoCardsProps {
  onNavigate?: (path: string) => void;
}

export const QuickInfoCards: React.FC<QuickInfoCardsProps> = ({ onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'sprout':
        return <Sprout className="w-6 h-6 text-emerald-700" />;
      case 'scale':
        return <Scale className="w-6 h-6 text-emerald-700" />;
      case 'users':
        return <Users className="w-6 h-6 text-emerald-700" />;
      case 'messages-square':
        return <MessagesSquare className="w-6 h-6 text-emerald-700" />;
      case 'calendar':
        return <Calendar className="w-6 h-6 text-emerald-700" />;
      case 'info':
      default:
        return <Info className="w-6 h-6 text-emerald-700" />;
    }
  };

  const getTargetRoute = (id: string) => {
    switch (id) {
      case 'kisan-hit':
      case 'kisan-adhikar':
        return '/kisan-hit';
      case 'kisan-ekta':
      case 'sangathanik-gatividhiyan':
        return '/activities';
      case 'jan-samwad':
        return '/objectives';
      case 'sarvajanik-jankari':
      default:
        return '/about';
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            संक्षिप्त अवलोकन
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            महत्वपूर्ण संगठनात्मक स्तंभ
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            किसानों के व्यापक सरोकारों, सामाजिक एकता और सार्वजनिक संवाद को समर्पित प्रमुख विषय
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickInformationCards.map((card) => {
            const targetPath = getTargetRoute(card.id);
            return (
              <div
                key={card.id}
                onClick={() => onNavigate && onNavigate(targetPath)}
                className="group relative p-6 bg-stone-50 hover:bg-white rounded-xl border border-stone-200 hover:border-emerald-500/40 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-emerald-100/70 group-hover:bg-emerald-100 flex items-center justify-center mb-4 transition-colors">
                    {getIcon(card.iconName)}
                  </div>
                  
                  <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-900 transition-colors flex items-center justify-between">
                    <span>{card.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  
                  <p className="mt-2.5 text-sm text-stone-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-200/60 flex items-center text-xs font-medium text-emerald-800 group-hover:text-emerald-700">
                  <span>विस्तार से जानें</span>
                  <span className="ml-1 tracking-widest">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
