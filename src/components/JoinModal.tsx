import React from 'react';
import { X, MessageCircle, Instagram, Youtube, MapPin, Mail, ExternalLink } from 'lucide-react';
import { socialLinks } from '../config/socialLinks';
import { siteMeta } from '../config/siteData';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateContact: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  onNavigateContact,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-stone-100">
          <div className="flex items-center gap-3">
            <img
              src="/bku-tikait-logo.png"
              alt="भारतीय किसान यूनियन (टिकैत) जनपद गौतम बुद्ध नगर लोगो"
              className="w-12 h-12 object-contain shrink-0"
            />
            <div>
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">
                सहभागिता एवं संपर्क
              </span>
              <h3 className="text-xl font-bold text-stone-900">
                हमसे जुड़ें
              </h3>
              <p className="text-xs text-stone-600 mt-0.5">
                {siteMeta.orgName} — {siteMeta.district}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="बंद करें"
            type="button"
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Channels List */}
        <div className="mt-5 space-y-3">
          
          {/* WhatsApp Channel - Marquee */}
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 flex items-center justify-between transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-emerald-950 group-hover:text-emerald-900">
                  WhatsApp Channel से जुड़ें
                </h4>
                <p className="text-xs text-emerald-800">
                  आधिकारिक किसान सूचनाएँ एवं सीधे अपडेट
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-emerald-700 opacity-80" />
          </a>

          {/* Instagram */}
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200 flex items-center justify-between transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">
                  Instagram पर फॉलो करें
                </h4>
                <p className="text-xs text-stone-500">
                  चित्र, वीडियो एवं कार्यक्रम झलकियाँ
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-stone-400 opacity-80" />
          </a>

          {/* YouTube */}
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200 flex items-center justify-between transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <Youtube className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">
                  YouTube चैनल देखें
                </h4>
                <p className="text-xs text-stone-500">
                  किसान सभा व गोष्ठियों के आधिकारिक वीडियो
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-stone-400 opacity-80" />
          </a>

          {/* X */}
          <a
            href={socialLinks.x}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200 flex items-center justify-between transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-stone-200 text-stone-900 flex items-center justify-center shrink-0 font-bold text-base">
                𝕏
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">
                  X पर जुड़ें
                </h4>
                <p className="text-xs text-stone-500">
                  संक्षिप्त विचार एवं सार्वजनिक संवाद
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-stone-400 opacity-80" />
          </a>

          {/* Contact form button */}
          <button
            type="button"
            onClick={() => {
              onClose();
              onNavigateContact();
            }}
            className="w-full p-3.5 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200 flex items-center justify-between transition-colors group text-left cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">
                  संदेश भेजें (संपर्क फॉर्म)
                </h4>
                <p className="text-xs text-stone-500">
                  वेबसाइट के माध्यम से लिखित संदेश भेजें
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold text-emerald-800">जाएँ →</span>
          </button>

        </div>

        {/* Footer info */}
        <div className="mt-5 pt-4 border-t border-stone-100 text-center text-xs text-stone-500">
          {siteMeta.contactNote}
        </div>

      </div>
    </div>
  );
};
