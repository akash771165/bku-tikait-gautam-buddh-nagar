import React, { useState } from 'react';
import { BookOpen, Users2, MessageSquare, HandHeart, CheckCircle2 } from 'lucide-react';
import { siteMeta } from '../config/siteData';
import { siteAssets } from '../config/assets';

export const Introduction: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            आधिकारिक परिचय
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight text-balance">
            {siteMeta.orgName} — {siteMeta.district}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
            जनपद गौतम बुद्ध नगर में संगठन से संबंधित तथ्यात्मक जानकारी, किसान हित के विषयों और सार्वजनिक संवाद के लिए यह स्थायी डिजिटल मंच स्थापित किया गया है।
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Prose Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-stone-700 text-base leading-relaxed">
            
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-700" />
                <span>संगठन का सामान्य परिचय</span>
              </h3>
              <p>
                भारतीय किसान यूनियन (टिकैत) भारत के कृषक वर्ग के अधिकारों, सम्मान एवं समृद्धि के लिए निरंतर सेवारत एक प्रमुख गैर-राजनीतिक किसान संगठन है। जनपद गौतम बुद्ध नगर (उत्तर प्रदेश) इकाई स्थानीय किसानों के सामाजिक-आर्थिक विषयों, कृषि संसाधनों एवं ग्रामीण समस्याओं पर संगठनात्मक संवाद और जनसहयोग को सुगम बनाने के लिए कार्य करती है।
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-stone-200">
                <h4 className="font-semibold text-stone-900 flex items-center gap-2 text-sm sm:text-base">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>जनपद स्तर पर गतिविधियाँ</span>
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-normal">
                  जनपद के विभिन्न क्षेत्रों, तहसीलों एवं विकास खंडों में संगठनात्मक विमर्श, किसान गोष्ठियों और चौपालों का आयोजन।
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-stone-200">
                <h4 className="font-semibold text-stone-900 flex items-center gap-2 text-sm sm:text-base">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>किसानों से जुड़ाव व संवाद</span>
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-normal">
                  किसानों की दैनिक खेती, सिंचाई, बिजली तथा स्थानीय कठिनाइयों को धैर्यपूर्वक सुनना और समझना।
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-stone-200">
                <h4 className="font-semibold text-stone-900 flex items-center gap-2 text-sm sm:text-base">
                  <HandHeart className="w-4 h-4 text-emerald-600" />
                  <span>किसान हित के विषय</span>
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-normal">
                  कृषि उपज का उचित मूल्य, भूमि प्रबंधन, खाद-बीज की सुलभता एवं पर्यावरण सुरक्षा पर निरंतर विचार-विमर्श।
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-stone-200">
                <h4 className="font-semibold text-stone-900 flex items-center gap-2 text-sm sm:text-base">
                  <Users2 className="w-4 h-4 text-emerald-600" />
                  <span>सार्वजनिक सहभागिता</span>
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-normal">
                  पारदर्शी एवं मर्यादित तरीके से जनसामान्य और संबंधित सार्वजनिक तंत्र के समक्ष रचनात्मक विषय रखना।
                </p>
              </div>
            </div>

            {/* Official Information Notice Quote */}
            <div className="p-4 bg-emerald-50/80 border-l-4 border-emerald-600 rounded-r-lg text-xs sm:text-sm text-emerald-950">
              <p className="font-medium">
                {siteMeta.officialNotice}
              </p>
            </div>

          </div>

          {/* Visual Showcase Card (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-xs">
              <div className="relative aspect-4/3 bg-stone-100 overflow-hidden">
                {!imageError ? (
                  <img
                    src={siteAssets.dialogueAssembly}
                    alt="ग्रामीण जनसंवाद एवं चौपाल परिदृश्य"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-stone-200 text-stone-500 text-sm">
                    ग्रामीण जनसंवाद एवं चौपाल
                  </div>
                )}
                <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-4 text-white text-xs">
                  <span className="font-semibold block text-sm">जनसंवाद एवं किसान विचार-विमर्श</span>
                  <span className="text-stone-300">जनपद गौतम बुद्ध नगर के ग्रामीण अंचलों में सौहार्दपूर्ण संवाद</span>
                </div>
              </div>

              <div className="p-5">
                <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">
                  सदाबहार सूचना निर्देशिका
                </div>
                <h4 className="text-base font-bold text-stone-900 mt-1">
                  स्वच्छ एवं जिम्मेदार सार्वजनिक मंच
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                  यह पोर्टल किसी दैनिक समाचार चक्र पर आधारित नहीं है। इसका उद्देश्य किसान बंधुओं को संगठनात्मक संरचना, उद्देश्य तथा सही संपर्क माध्यमों की स्थायी जानकारी प्रदान करना है।
                </p>
              </div>
            </div>

            {/* Geographic Coverage Indicator */}
            <div className="bg-stone-100 p-4 rounded-xl border border-stone-200 text-xs text-stone-600">
              <span className="font-semibold text-stone-900 block mb-1">
                भौगोलिक कार्यक्षेत्र:
              </span>
              <span>ग्रेटर नोएडा (Greater Noida), दादरी, जेवर, बिसरख, दनकौर एवं संबंधित ग्रामीण क्षेत्र, जनपद गौतम बुद्ध नगर (उ.प्र.)।</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
