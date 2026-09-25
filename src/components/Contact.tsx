import React, { useState } from 'react';
import { Mail, MessageCircle, MapPin, Send, CheckCircle2, AlertCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { socialLinks } from '../config/socialLinks';
import { siteMeta } from '../config/siteData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('कृपया अपना नाम दर्ज करें।');
      return;
    }
    if (!formData.mobile.trim() || formData.mobile.trim().length < 10) {
      setErrorMsg('कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें।');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('कृपया अपना संदेश दर्ज करें।');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', mobile: '', message: '' });
    setSubmitted(false);
    setErrorMsg('');
  };

  return (
    <section id="contact-section" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            संवाद एवं संपर्क
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
            संपर्क करें
          </h2>
          <p className="mt-3 text-base text-stone-600">
            {siteMeta.orgName} — {siteMeta.district}
          </p>
        </div>

        {/* 2-Column Grid: Left Contact Info & Direct Channels, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Links & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Official Contact Box */}
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs">
              <h3 className="text-base font-bold text-stone-900 mb-4 pb-2 border-b border-stone-100 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                <span>आधिकारिक संपर्क माध्यम</span>
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs text-stone-500 font-medium block">संगठन:</span>
                  <span className="font-semibold text-stone-900">{siteMeta.orgName}</span>
                </div>

                <div>
                  <span className="text-xs text-stone-500 font-medium block">जनपद:</span>
                  <span className="font-semibold text-stone-900">{siteMeta.district}</span>
                </div>

                <div>
                  <span className="text-xs text-stone-500 font-medium block">आधिकारिक ईमेल:</span>
                  <span className="font-medium text-stone-600 italic">
                    {siteMeta.emailPlaceholder}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-stone-500 font-medium block">भौगोलिक क्षेत्र:</span>
                  <span className="text-stone-700">{siteMeta.regionContext}</span>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="bg-emerald-900 text-white p-6 rounded-xl space-y-4">
              <h3 className="text-base font-bold flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>त्वरित संपर्क एवं सूचना चैनल</span>
              </h3>
              <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed">
                नियमित किसान सूचनाओं, कार्यक्रमों और संवाद सत्रों की आधिकारिक जानकारी सीधे प्राप्त करने के लिए WhatsApp Channel से जुड़ें।
              </p>

              <div className="pt-2 space-y-2.5">
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-600 rounded-lg text-sm font-semibold flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Channel से जुड़ें</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={socialLinks.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-stone-800 hover:bg-stone-700 rounded-lg text-sm font-semibold flex items-center justify-between text-stone-200 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>Google Maps स्थान देखें</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Note */}
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 font-medium leading-relaxed">
              <p>
                <strong>महत्वपूर्ण निर्देश: </strong>
                {siteMeta.contactNote}
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                संदेश भेजें
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                अपनी बात या सामान्य प्रश्न साझा करने के लिए नीचे दिए गए फॉर्म का उपयोग करें।
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-950">
                    आपका संदेश सफलतापूर्वक दर्ज कर लिया गया है
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                    धन्यवाद, {formData.name}। आपकी सूचना संगठन के संदर्भ हेतु प्राप्त हुई है।
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      type="button"
                      className="px-4 py-2 text-xs font-semibold text-emerald-900 bg-white border border-emerald-300 rounded-lg hover:bg-emerald-100 transition-colors cursor-pointer"
                    >
                      अन्य संदेश भेजें
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 bg-red-50 text-red-700 border border-red-200 rounded-lg text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-stone-700 mb-1.5">
                      नाम <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="उदा. रामेश्वर सिंह"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="mobile" className="block text-xs font-semibold text-stone-700 mb-1.5">
                      मोबाइल नंबर <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="mobile"
                      type="tel"
                      required
                      placeholder="10 अंकों का मोबाइल नंबर"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-stone-700 mb-1.5">
                      संदेश <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="अपना संदेश या विषय यहाँ लिखें..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all resize-y"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm rounded-lg shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>संदेश भेजें</span>
                    </button>
                  </div>

                  <p className="text-xs text-stone-500 pt-2">
                    * {siteMeta.contactNote}
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
