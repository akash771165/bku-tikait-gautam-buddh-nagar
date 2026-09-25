import React, { useState } from 'react';
import { Mail, MessageCircle, MapPin, Send, CheckCircle2, AlertCircle, ExternalLink, Loader2, ArrowRight } from 'lucide-react';
import { socialLinks } from '../config/socialLinks';
import { siteMeta } from '../config/siteData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string } | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Formspree / Form Backend Endpoint Configuration
  const formspreeId = import.meta.env.VITE_FORMSPREE_FORM_ID;
  const customEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
  const formEndpoint =
    customEndpoint?.trim() ||
    (formspreeId?.trim()
      ? `https://formspree.io/f/${formspreeId.trim()}`
      : `https://formspree.io/f/${siteMeta.officialEmail}`);

  const validate = () => {
    if (!formData.name.trim()) {
      return 'कृपया अपना पूरा नाम दर्ज करें। (Please enter your name.)';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      return 'कृपया मान्य ईमेल पता दर्ज करें (उदा. yourname@gmail.com)। (Please enter a valid email address.)';
    }
    const cleanMobile = formData.mobile.replace(/[\s\-\+\(\)]/g, '');
    if (!cleanMobile || cleanMobile.length < 10) {
      return 'कृपया कम से कम 10 अंकों का मान्य मोबाइल नंबर दर्ज करें। (Please enter a valid mobile number with at least 10 digits.)';
    }
    if (!formData.message.trim()) {
      return 'कृपया अपना संदेश या विषय विस्तार से दर्ज करें। (Please enter your message.)';
    }
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    const submissionPayload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      mobile: formData.mobile.trim(),
      subject: formData.subject.trim() || 'वेबसाइट संपर्क संदेश — भारतीय किसान यूनियन (टिकैत) GBN',
      message: formData.message.trim(),
      _replyto: formData.email.trim(),
      _to: siteMeta.officialEmail,
      _subject: `[BKU Tikait GBN] ${formData.subject.trim() || 'नया संपर्क संदेश'} — ${formData.name.trim()}`,
    };

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionPayload),
      });

      if (response.ok) {
        setSubmittedData({
          name: formData.name.trim(),
          email: formData.email.trim(),
        });
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          mobile: '',
          subject: '',
          message: '',
        });
      } else {
        const result = await response.json().catch(() => null);
        if (result && Array.isArray(result.errors) && result.errors.length > 0) {
          const detail = result.errors.map((err: { message?: string }) => err.message).filter(Boolean).join(', ');
          setErrorMsg(`संदेश भेजने में त्रुटि (${detail || 'Validation Error'})। कृपया पुनः प्रयास करें अथवा सीधे ईमेल पर लिखें।`);
        } else {
          setErrorMsg(`संदेश सर्वर तक नहीं पहुँच सका (Error ${response.status})। कृपया सीधे हमारे आधिकारिक ईमेल ${siteMeta.officialEmail} पर संदेश भेजें।`);
        }
      }
    } catch {
      setErrorMsg(`नेटवर्क या कनेक्शन त्रुटि के कारण संदेश नहीं भेजा जा सका। कृपया इंटरनेट जांचें अथवा सीधे ${siteMeta.officialEmail} पर मेल करें।`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      mobile: '',
      subject: '',
      message: '',
    });
    setSubmitted(false);
    setSubmittedData(null);
    setErrorMsg('');
  };

  // Fallback mailto link with encoded query parameters
  const fallbackMailto = `mailto:${siteMeta.officialEmail}?subject=${encodeURIComponent(
    formData.subject.trim() || 'BKU Tikait GBN Inquiry'
  )}&body=${encodeURIComponent(
    `नाम: ${formData.name}\nमोबाइल: ${formData.mobile}\nईमेल: ${formData.email}\n\nसंदेश:\n${formData.message}`
  )}`;

  return (
    <section id="contact-section" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            संवाद एवं संपर्क • Contact & Communication
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
              <div className="flex items-center gap-3.5 mb-4 pb-3 border-b border-stone-100">
                <img
                  src="/bku-tikait-logo.png"
                  alt="भारतीय किसान यूनियन (टिकैत) जनपद गौतम बुद्ध नगर लोगो"
                  className="w-12 h-12 object-contain shrink-0"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-base font-bold text-stone-900 leading-tight">
                    आधिकारिक संपर्क माध्यम
                  </h3>
                  <span className="text-xs text-stone-500 font-medium">
                    {siteMeta.district}
                  </span>
                </div>
              </div>

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
                  <a
                    href={`mailto:${siteMeta.officialEmail}`}
                    className="inline-flex items-center gap-1.5 font-semibold text-emerald-800 hover:text-emerald-950 transition-colors break-all text-sm mt-0.5"
                    title="आधिकारिक ईमेल पर लिखें"
                  >
                    <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{siteMeta.officialEmail}</span>
                  </a>
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
                नियमित किसान सूचनाओं, कार्यक्रमों और संवाद सत्रों की आधिकारिक जानकारी प्राप्त करने हेतु हमारे आधिकारिक चैनलों से जुड़ें।
              </p>

              <div className="pt-2 space-y-2.5">
                <a
                  href={`mailto:${siteMeta.officialEmail}`}
                  className="w-full py-2.5 px-4 bg-emerald-800 hover:bg-emerald-700 rounded-lg text-sm font-semibold flex items-center justify-between transition-colors border border-emerald-700 text-white"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-emerald-300" />
                    <span>आधिकारिक ईमेल भेजें</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-600 rounded-lg text-sm font-semibold flex items-center justify-between transition-colors text-white"
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
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-stone-900">
                  संदेश भेजें • Send Message
                </h3>
                <span className="text-xs bg-emerald-50 text-emerald-800 font-medium px-2 py-0.5 rounded-md border border-emerald-200">
                  आधिकारिक फॉर्म
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                अपनी बात, प्रश्न अथवा सुझाव सीधे संगठन के आधिकारिक ईमेल <span className="font-semibold text-stone-800">{siteMeta.officialEmail}</span> पर प्रेषित करने के लिए नीचे दिया गया फॉर्म भरें।
              </p>

              {submitted ? (
                <div className="p-6 sm:p-8 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-4 animate-in fade-in duration-200">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-2xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-emerald-950">
                      आपका संदेश सफलतापूर्वक भेज दिया गया है!
                    </h4>
                    <p className="text-xs text-emerald-700 font-medium mt-0.5">
                      Message Sent Successfully!
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-900 max-w-md mx-auto leading-relaxed">
                    धन्यवाद {submittedData?.name ? <strong>{submittedData.name}</strong> : ''}। आपका विवरण संगठन के आधिकारिक ईमेल <strong>{siteMeta.officialEmail}</strong> पर प्राप्त हो चुका है। आवश्यक होने पर हमारी टीम आपसे संपर्क करेगी।
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleReset}
                      type="button"
                      className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-emerald-900 bg-white border border-emerald-300 rounded-lg hover:bg-emerald-100 transition-colors cursor-pointer shadow-2xs"
                    >
                      अन्य संदेश भेजें (Send Another Message)
                    </button>
                    <a
                      href={`mailto:${siteMeta.officialEmail}`}
                      className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-stone-700 bg-stone-100 border border-stone-200 rounded-lg hover:bg-stone-200 transition-colors inline-flex items-center justify-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-stone-600" />
                      <span>सीधे ईमेल लिखें</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {errorMsg && (
                    <div className="p-3.5 bg-red-50 text-red-800 border border-red-200 rounded-lg text-xs space-y-2">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
                        <span className="font-medium leading-relaxed">{errorMsg}</span>
                      </div>
                      <div className="pt-1 border-t border-red-200/60 flex items-center justify-between">
                        <span className="text-[11px] text-red-700">वैकल्पिक रूप से:</span>
                        <a
                          href={fallbackMailto}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-red-900 hover:underline"
                        >
                          <span>सीधे ईमेल ऐप में खोलें</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Name Field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-stone-700 mb-1.5">
                      नाम (Name) <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      disabled={isSubmitting}
                      placeholder="उदा. रामेश्वर सिंह"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all disabled:opacity-60"
                    />
                  </div>

                  {/* Email & Mobile 2-col on sm+ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-stone-700 mb-1.5">
                        ईमेल (Email) <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        disabled={isSubmitting}
                        placeholder="उदा. name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-mobile" className="block text-xs font-semibold text-stone-700 mb-1.5">
                        मोबाइल नंबर (Mobile Number) <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-mobile"
                        name="mobile"
                        type="tel"
                        required
                        disabled={isSubmitting}
                        placeholder="10 अंकों का मोबाइल नंबर"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-stone-700 mb-1.5">
                      विषय (Subject)
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      disabled={isSubmitting}
                      placeholder="उदा. किसान संवाद / सदस्यता / संगठनात्मक जानकारी"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all disabled:opacity-60"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-stone-700 mb-1.5">
                      संदेश (Message) <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      disabled={isSubmitting}
                      placeholder="अपना संदेश या विषय यहाँ विस्तार से लिखें..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all resize-y disabled:opacity-60"
                    />
                  </div>

                  {/* Submit Button & Destination Notice */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 disabled:bg-emerald-400 text-white font-semibold text-sm rounded-lg shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>भेजा जा रहा है... (Sending...)</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>संदेश भेजें (Submit Message)</span>
                        </>
                      )}
                    </button>

                    <div className="text-[11px] text-stone-500 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>सीधे प्राप्तकर्ता: {siteMeta.officialEmail}</span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-500 pt-2 border-t border-stone-100">
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
