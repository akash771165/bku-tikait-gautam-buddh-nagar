import React from 'react';
import { Home, ChevronRight, BookOpen, ShieldCheck, Users, MessageSquare, HandHeart, Calendar } from 'lucide-react';
import { siteMeta } from '../config/siteData';
import { siteAssets } from '../config/assets';
import { OfficialTrustNotice } from '../components/OfficialTrustNotice';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-stone-500 mb-8">
          <button
            onClick={() => onNavigate('/')}
            type="button"
            className="flex items-center gap-1 hover:text-emerald-800 transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="font-semibold text-stone-800">हमारे बारे में</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            संगठनात्मक परिचय
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            हमारे बारे में
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-medium">
            भारतीय किसान यूनियन (टिकैत), जनपद गौतम बुद्ध नगर से संबंधित संगठनात्मक जानकारी, किसान हित से जुड़े विषयों, संवाद, सहभागिता और सार्वजनिक गतिविधियों के बारे में जानकारी उपलब्ध कराने के उद्देश्य से यह डिजिटल मंच बनाया गया है।
          </p>
        </div>

        {/* Hero image card */}
        <div className="rounded-2xl overflow-hidden border border-stone-200 mb-12 shadow-xs aspect-21/9 bg-stone-900 relative">
          <img
            src={siteAssets.ruralFields}
            alt="जनपद गौतम बुद्ध नगर ग्रामीण एवं कृषि परिदृश्य"
            className="w-full h-full object-cover opacity-85"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 sm:p-10 text-white">
            <div>
              <span className="text-xs sm:text-sm font-semibold text-emerald-300">
                {siteMeta.district} • Greater Noida, Uttar Pradesh
              </span>
              <h2 className="text-lg sm:text-2xl font-bold mt-1">
                किसान हित • किसान अधिकार • किसान एकता
              </h2>
            </div>
          </div>
        </div>

        {/* 5 In-depth Sections */}
        <div className="space-y-10 max-w-4xl">
          
          {/* Section 1: संगठन का परिचय */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-2xs">
            <h2 className="text-xl font-bold text-stone-900 mb-3 flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-emerald-700" />
              <span>1. संगठन का परिचय</span>
            </h2>
            <div className="text-sm sm:text-base text-stone-600 space-y-3 leading-relaxed">
              <p>
                भारतीय किसान यूनियन (टिकैत) भारत के कृषक वर्ग के आत्मसम्मान, आर्थिक अधिकारों एवं कृषि संवर्धन के लिए निरंतर आवाज उठाने वाला एक ऐतिहासिक व प्रतिष्ठित गैर-राजनीतिक किसान संगठन है। संगठन की नींव किसानों के पारस्परिक सहयोग, त्याग और एकता के सिद्धांतों पर टिकी है।
              </p>
              <p>
                संगठन किसी राजनीतिक दल का हिस्सा नहीं है और इसका एकमात्र ध्येय अन्नदाता किसान के हितों की रक्षा करना, कृषि समस्याओं का रचनात्मक समाधान खोजना तथा ग्रामीण भारत के गौरव को अक्षुण्ण बनाए रखना है।
              </p>
            </div>
          </section>

          {/* Section 2: जनपद स्तर की भूमिका */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-2xs">
            <h2 className="text-xl font-bold text-stone-900 mb-3 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
              <span>2. जनपद स्तर की भूमिका</span>
            </h2>
            <div className="text-sm sm:text-base text-stone-600 space-y-3 leading-relaxed">
              <p>
                जनपद गौतम बुद्ध नगर (जिसमें ग्रेटर नोएडा, दादरी, जेवर, बिसरख, दनकौर एवं संलग्न ग्रामीण क्षेत्र शामिल हैं) में संगठन की स्थानीय इकाई किसानों के साथ निरंतर समन्वय बनाकर कार्य करती है।
              </p>
              <p>
                जनपद स्तर पर संगठन का मुख्य दायित्व स्थानीय कृषक समुदाय की प्राथमिकताओं को समझना, विकास कार्यों और कृषि भूमि से जुड़े विषयों पर निष्पक्ष दृष्टि रखना और जनहित के मुद्दों को मर्यादापूर्वक संबंधित सार्वजनिक मंचों पर प्रस्तुत करना है।
              </p>
            </div>
          </section>

          {/* Section 3: किसानों के साथ संवाद */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-2xs">
            <h2 className="text-xl font-bold text-stone-900 mb-3 flex items-center gap-2.5">
              <MessageSquare className="w-5 h-5 text-emerald-700" />
              <span>3. किसानों के साथ संवाद</span>
            </h2>
            <div className="text-sm sm:text-base text-stone-600 space-y-3 leading-relaxed">
              <p>
                संवाद किसी भी स्वस्थ संगठन की आत्मा होती है। संगठन गाँव-गाँव चौपालों, किसान बैठकों और व्यक्तिगत संपर्कों के माध्यम से किसानों के सीधे संपर्क में रहता है।
              </p>
              <p>
                खेती-किसानी के बदलते दौर में नई तकनीकों, सरकारी नियमों, जल संरक्षण तथा फसल सुरक्षा से जुड़े विषयों पर आपसी संवाद और अनुभव साझा करना संगठन की निरंतर प्राथमिकता है।
              </p>
            </div>
          </section>

          {/* Section 4: सार्वजनिक संपर्क */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-2xs">
            <h2 className="text-xl font-bold text-stone-900 mb-3 flex items-center gap-2.5">
              <Users className="w-5 h-5 text-emerald-700" />
              <span>4. सार्वजनिक संपर्क</span>
            </h2>
            <div className="text-sm sm:text-base text-stone-600 space-y-3 leading-relaxed">
              <p>
                संगठन सामाजिक समरसता और पारदर्शी संपर्क में विश्वास रखता है। ग्रामीण नागरिकों, युवा पीढ़ी और नागरिक समाज के विभिन्न घटकों के साथ सकारात्मक संवाद कायम रखना संगठन की कार्यप्रणाली का मुख्य हिस्सा है।
              </p>
              <p>
                सार्वजनिक संपर्क के लिए संगठन पारंपरिक बैठकों के साथ-साथ आधिकारिक सोशल मीडिया माध्यमों (WhatsApp Channel, Instagram, YouTube, X) का भी जिम्मेदारीपूर्वक उपयोग करता है।
              </p>
            </div>
          </section>

          {/* Section 5: संगठनात्मक गतिविधियाँ */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-2xs">
            <h2 className="text-xl font-bold text-stone-900 mb-3 flex items-center gap-2.5">
              <Calendar className="w-5 h-5 text-emerald-700" />
              <span>5. संगठनात्मक गतिविधियाँ</span>
            </h2>
            <div className="text-sm sm:text-base text-stone-600 space-y-3 leading-relaxed">
              <p>
                जनपद स्तर पर संगठन की गतिविधियाँ मुख्य रूप से आंतरिक समीक्षा बैठकों, कृषक चौपालों, किसान चेतना गोष्ठियों और सामाजिक सरोकारों के आयोजनों के रूप में संचालित होती हैं।
              </p>
              <p>
                ये सभी गतिविधियाँ शांतिपूर्ण, अनुशासित और संविधान के दायरे में संचालित की जाती हैं ताकि किसान समाज का मनोबल और एकता सदैव सुदृढ़ रहे।
              </p>
            </div>
          </section>

        </div>

        {/* Trust Notice */}
        <div className="mt-12">
          <OfficialTrustNotice />
        </div>

      </div>
    </div>
  );
};
