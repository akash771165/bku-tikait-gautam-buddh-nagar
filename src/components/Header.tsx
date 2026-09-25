import React, { useState, useEffect } from 'react';
import { Menu, X, Share2, MapPin, ExternalLink } from 'lucide-react';
import { siteMeta } from '../config/siteData';
import { socialLinks } from '../config/socialLinks';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenJoin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenJoin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
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
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-stone-200'
          : 'bg-white border-b border-stone-200'
      }`}
    >
      {/* Top Banner Notice (Minimal & Official) */}
      <div className="bg-emerald-900 text-emerald-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-medium tracking-wide">
            {siteMeta.tagline}
          </span>
          <div className="hidden sm:flex items-center gap-4 text-emerald-200">
            <span>{siteMeta.regionContext}</span>
            <a
              href={socialLinks.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <MapPin className="w-3 h-3 text-emerald-400" />
              <span>स्थान देखें</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Identity */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center gap-2.5 sm:gap-3 group text-left"
          >
            {/* Official BKU Tikait Logo */}
            <img
              src="/bku-tikait-logo.png"
              alt="भारतीय किसान यूनियन (टिकैत) जनपद गौतम बुद्ध नगर लोगो"
              className="w-11 h-11 sm:w-14 sm:h-14 object-contain shrink-0 drop-shadow-xs transition-transform group-hover:scale-105 duration-200"
              loading="eager"
            />
            
            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-bold text-stone-900 tracking-tight leading-tight">
                {siteMeta.orgName}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-800 flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block"></span>
                {siteMeta.district}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-emerald-900 bg-emerald-50 font-semibold'
                      : 'text-stone-700 hover:text-emerald-800 hover:bg-stone-100'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenJoin}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>हमसे जुड़ें</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenJoin}
              type="button"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-emerald-700 rounded-lg shadow-xs"
            >
              हमसे जुड़ें
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label={mobileMenuOpen ? 'मेनू बंद करें' : 'मेनू खोलें'}
              className="p-2 text-stone-700 hover:text-emerald-800 hover:bg-stone-100 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  className={`block px-3 py-2 text-base font-medium rounded-lg ${
                    isActive
                      ? 'text-emerald-900 bg-emerald-50 font-semibold'
                      : 'text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            
            <div className="pt-3 pb-2 border-t border-stone-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoin();
                }}
                type="button"
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-emerald-700 rounded-lg"
              >
                हमसे जुड़ें (सोशल मीडिया व व्हाट्सएप)
              </button>
              <a
                href={socialLinks.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 text-center text-sm font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-4 h-4 text-emerald-700" />
                Google Maps पर स्थान देखें
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
