import React, { useState } from 'react';
import { ArrowRight, MapPin, Mail, ExternalLink, ShieldCheck } from 'lucide-react';
import { siteMeta } from '../config/siteData';
import { socialLinks } from '../config/socialLinks';
import { siteAssets } from '../config/assets';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative overflow-hidden bg-stone-900 text-white min-h-[540px] sm:min-h-[600px] flex items-center">
      {/* Background Photography with Scrim */}
      <div className="absolute inset-0 z-0">
        {!imageError ? (
          <img
            src={siteAssets.heroLandscape}
            alt="जनपद गौतम बुद्ध नगर कृषि भूमि व प्राकृतिक परिदृश्य"
            className="w-full h-full object-cover object-center opacity-35 filter brightness-90 saturate-110"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-emerald-950 via-stone-900 to-stone-950 opacity-90" />
        )}
        {/* Measured Scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-linear-to-r from-stone-950/90 via-stone-950/80 to-stone-950/50" />
        <div className="absolute inset-0 bg-radial-[at_top_right] from-emerald-900/20 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl">
          
          {/* Subtle Tagline / Pill-free Editorial Kicker */}
          <div className="inline-flex items-center gap-2 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wider mb-4 border-b border-emerald-500/30 pb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>आधिकारिक संगठनात्मक डिजिटल मंच</span>
            <span aria-hidden="true">·</span>
            <span>{siteMeta.regionContext}</span>
          </div>

          {/* Large Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance leading-tight sm:leading-tight">
            {siteMeta.orgName}
          </h1>

          {/* Subheading */}
          <p className="mt-3 text-xl sm:text-2xl font-semibold text-emerald-400 tracking-wide">
            {siteMeta.district}
          </p>

          {/* Primary Tagline */}
          <p className="mt-2 text-sm sm:text-base text-stone-300 font-medium tracking-wide">
            {siteMeta.tagline}
          </p>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-stone-200 leading-relaxed font-normal max-w-2xl">
            {siteMeta.description}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            
            {/* हमारे बारे में जानें */}
            <button
              onClick={() => onNavigate('/about')}
              type="button"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base font-semibold text-stone-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap"
            >
              <span>हमारे बारे में जानें</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* संपर्क करें */}
            <button
              onClick={() => onNavigate('/contact')}
              type="button"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base font-semibold text-white bg-stone-800/90 hover:bg-stone-700/90 border border-stone-600 rounded-lg transition-all cursor-pointer whitespace-nowrap"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>संपर्क करें</span>
            </button>

            {/* Google Maps पर स्थान देखें */}
            <a
              href={socialLinks.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base font-semibold text-emerald-200 hover:text-white bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-800/80 rounded-lg transition-all cursor-pointer whitespace-nowrap"
            >
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Google Maps पर स्थान देखें</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

          </div>

          {/* Location & Trust Subtext */}
          <div className="mt-8 pt-6 border-t border-stone-800/80 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-stone-400">
            <span>सत्यापित सार्वजनिक जानकारी</span>
            <span aria-hidden="true">·</span>
            <span>सदाबहार सूचना मंच</span>
            <span aria-hidden="true">·</span>
            <span>Greater Noida • दादरी • जेवर</span>
          </div>

        </div>
      </div>
    </section>
  );
};
