import React from 'react';
import { ExternalLink, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { socialLinks } from '../config/socialLinks';
import { siteMeta } from '../config/siteData';

export const SocialMedia: React.FC = () => {
  const platforms = [
    {
      id: 'whatsapp',
      name: '💬 WhatsApp Channel',
      url: socialLinks.whatsapp,
      buttonText: 'WhatsApp Channel से जुड़ें',
      description: 'आधिकारिक सूचनाओं, बैठकों की सूचना एवं महत्वपूर्ण किसान अपडेट प्राप्त करने हेतु चैनल से जुड़ें।',
      icon: <MessageCircle className="w-7 h-7 text-emerald-600" />,
      cardBg: 'bg-emerald-50/70 border-emerald-300 hover:border-emerald-500',
      btnColor: 'bg-emerald-700 hover:bg-emerald-800 text-white',
    },
    {
      id: 'instagram',
      name: '📸 Instagram',
      url: socialLinks.instagram,
      buttonText: 'Instagram पर जुड़ें',
      description: 'जनपद की किसान गतिविधियों, कार्यक्रमों एवं बैठकों के चित्र व वीडियो देखने के लिए फॉलो करें।',
      icon: <Instagram className="w-7 h-7 text-pink-600" />,
      cardBg: 'bg-pink-50/40 border-pink-200 hover:border-pink-400',
      btnColor: 'bg-stone-900 hover:bg-stone-800 text-white',
    },
    {
      id: 'youtube',
      name: '▶️ YouTube',
      url: socialLinks.youtube,
      buttonText: 'YouTube पर जुड़ें',
      description: 'किसान गोष्ठियों, वक्तव्यों, किसान सम्मेलनों एवं महत्वपूर्ण परिचर्चाओं के वीडियो प्रसारण देखें।',
      icon: <Youtube className="w-7 h-7 text-red-600" />,
      cardBg: 'bg-red-50/40 border-red-200 hover:border-red-400',
      btnColor: 'bg-red-600 hover:bg-red-700 text-white',
    },
    {
      id: 'x',
      name: 'X',
      url: socialLinks.x,
      buttonText: 'X पर जुड़ें',
      description: 'जनपद गौतम बुद्ध नगर किसान यूनियन से जुड़े संक्षिप्त सार्वजनिक अपडेट एवं विचारों से अवगत रहें।',
      icon: (
        <span className="w-7 h-7 flex items-center justify-center font-bold text-xl text-stone-900">
          𝕏
        </span>
      ),
      cardBg: 'bg-stone-100/70 border-stone-300 hover:border-stone-500',
      btnColor: 'bg-stone-900 hover:bg-black text-white',
    },
  ];

  return (
    <section id="social-media-section" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            आधिकारिक संपर्क एवं प्रसारण
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight flex items-center justify-center gap-2">
            <span>📲 हमसे सोशल मीडिया पर जुड़ें</span>
          </h2>
          <div className="mt-2 text-lg font-bold text-emerald-800">
            {siteMeta.orgName}
          </div>
          <div className="text-sm font-semibold text-stone-700 mt-0.5">
            {siteMeta.district}
          </div>
          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            "जनपद की संगठनात्मक गतिविधियों, किसान कार्यक्रमों एवं संबंधित सार्वजनिक अपडेट के लिए हमारे सोशल मीडिया प्लेटफॉर्म से जुड़ें।"
          </p>
        </div>

        {/* 4 Social Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((plat) => (
            <div
              key={plat.id}
              className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${plat.cardBg}`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white shadow-2xs flex items-center justify-center mb-4">
                  {plat.icon}
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  {plat.name}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {plat.description}
                </p>
              </div>

              <a
                href={plat.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-2.5 px-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 shadow-2xs transition-colors cursor-pointer ${plat.btnColor}`}
              >
                <span>{plat.buttonText}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          ))}
        </div>

        {/* Social Safety Disclaimer */}
        <div className="mt-8 text-center text-xs text-stone-500">
          कृपया ध्यान दें: केवल उपर्युक्त सत्यापित आधिकारिक लिंक पर ही भरोसा करें। किसी भी अन्य अनधिकृत पेज या प्रोफाइल से भ्रमित न हों।
        </div>

      </div>
    </section>
  );
};
