import React from 'react';
import { MapPin, ExternalLink, Instagram, Youtube, MessageCircle, Mail } from 'lucide-react';
import { siteMeta } from '../config/siteData';
import { socialLinks } from '../config/socialLinks';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'हमारे बारे में', path: '/about' },
    { label: 'उद्देश्य', path: '/objectives' },
    { label: 'संगठन', path: '/organization' },
    { label: 'किसान हित', path: '/kisan-hit' },
    { label: 'गतिविधियाँ', path: '/activities' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Organization Branding (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src="/bku-tikait-logo.png"
                alt="भारतीय किसान यूनियन (टिकैत) जनपद गौतम बुद्ध नगर लोगो"
                className="w-13 h-13 sm:w-14 sm:h-14 object-contain shrink-0"
                loading="lazy"
              />
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {siteMeta.orgName}
                </h3>
                <p className="text-xs font-semibold text-emerald-400">
                  {siteMeta.district}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 font-medium tracking-wide">
              {siteMeta.tagline}
            </p>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              जनपद गौतम बुद्ध नगर में संगठनात्मक गतिविधियों, किसान हित से जुड़े विषयों तथा सार्वजनिक जानकारी के लिए आधिकारिक डिजिटल मंच।
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Greater Noida, दादरी, जेवर (उत्तर प्रदेश)</span>
              </div>
              <a
                href={`mailto:${siteMeta.officialEmail}`}
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                title="आधिकारिक ईमेल"
              >
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{siteMeta.officialEmail}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              त्वरित लिंक (Quick Links)
            </h4>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className="text-stone-400 hover:text-emerald-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Social & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              सोशल मीडिया व स्थान
            </h4>
            
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <a
                href={`mailto:${siteMeta.officialEmail}`}
                className="flex items-center gap-2 text-stone-300 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>आधिकारिक ईमेल</span>
                <ExternalLink className="w-3 h-3 opacity-60 ml-auto" />
              </a>

              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-300 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp Channel</span>
                <ExternalLink className="w-3 h-3 opacity-60 ml-auto" />
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-300 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-500" />
                <span>Instagram</span>
                <ExternalLink className="w-3 h-3 opacity-60 ml-auto" />
              </a>

              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-300 hover:text-red-400 transition-colors"
              >
                <Youtube className="w-4 h-4 text-red-500" />
                <span>YouTube</span>
                <ExternalLink className="w-3 h-3 opacity-60 ml-auto" />
              </a>

              <a
                href={socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors"
              >
                <span className="w-4 h-4 flex items-center justify-center font-bold text-xs text-stone-300">
                  𝕏
                </span>
                <span>X</span>
                <ExternalLink className="w-3 h-3 opacity-60 ml-auto" />
              </a>
            </div>

            {/* Google Maps Location Button */}
            <div className="pt-2">
              <a
                href={socialLinks.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors border border-stone-700"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>📍 Google Maps Location</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-stone-800/80 bg-stone-950 py-5 px-4 text-center text-xs text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {siteMeta.copyrightYear} {siteMeta.orgName}, {siteMeta.district}। सर्वाधिकार सुरक्षित।
          </p>
          <div className="flex items-center gap-4 text-stone-400">
            <span>सदाबहार सूचना मंच</span>
            <span aria-hidden="true">·</span>
            <span>निःशुल्क एवं सार्वजनिक</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
