/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { QuickInfoCards } from './components/QuickInfoCards';
import { Objectives } from './components/Objectives';
import { Organization } from './components/Organization';
import { KisanHit } from './components/KisanHit';
import { OurRole } from './components/OurRole';
import { Activities } from './components/Activities';
import { FAQ } from './components/FAQ';
import { SocialMedia } from './components/SocialMedia';
import { MapLocation } from './components/MapLocation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';
import { OfficialTrustNotice } from './components/OfficialTrustNotice';

import { AboutPage } from './pages/AboutPage';
import { ObjectivesPage } from './pages/ObjectivesPage';
import { OrganizationPage } from './pages/OrganizationPage';
import { KisanHitPage } from './pages/KisanHitPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { FAQPage } from './pages/FAQPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return path || '/';
    }
    return '/';
  });

  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  // Sync route and document title
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Dynamic SEO title synchronization
    let pageTitle = 'भारतीय किसान यूनियन (टिकैत) | जनपद गौतम बुद्ध नगर';
    switch (currentPath) {
      case '/about':
        pageTitle = 'हमारे बारे में | भारतीय किसान यूनियन (टिकैत), जनपद गौतम बुद्ध नगर';
        break;
      case '/objectives':
        pageTitle = 'हमारा उद्देश्य | भारतीय किसान यूनियन (टिकैत), जनपद गौतम बुद्ध नगर';
        break;
      case '/organization':
        pageTitle = 'संगठन एवं संरचना | भारतीय किसान यूनियन (टिकैत), जनपद गौतम बुद्ध नगर';
        break;
      case '/kisan-hit':
        pageTitle = 'किसान हित | भारतीय किसान यूनियन (टिकैत), जनपद गौतम बुद्ध नगर';
        break;
      case '/activities':
        pageTitle = 'हमारी गतिविधियाँ | भारतीय किसान यूनियन (टिकैत), जनपद गौतम बुद्ध नगर';
        break;
      case '/faq':
        pageTitle = 'सामान्य प्रश्न (FAQ) | भारतीय किसान यूनियन (टिकैत), जनपद गौतम बुद्ध नगर';
        break;
      case '/gallery':
        pageTitle = 'फोटो गैलरी | भारतीय किसान यूनियन (टिकैत), जनपद गौतम बुद्ध नगर';
        break;
      case '/contact':
        pageTitle = 'संपर्क करें | भारतीय किसान यूनियन (टिकैत), जनपद गौतम बुद्ध नगर';
        break;
      default:
        pageTitle = 'भारतीय किसान यूनियन (टिकैत) | जनपद गौतम बुद्ध नगर';
    }
    document.title = pageTitle;
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentView = () => {
    switch (currentPath) {
      case '/about':
        return <AboutPage onNavigate={handleNavigate} />;
      case '/objectives':
        return <ObjectivesPage onNavigate={handleNavigate} />;
      case '/organization':
        return <OrganizationPage onNavigate={handleNavigate} />;
      case '/kisan-hit':
        return <KisanHitPage onNavigate={handleNavigate} />;
      case '/activities':
        return <ActivitiesPage onNavigate={handleNavigate} />;
      case '/faq':
        return <FAQPage onNavigate={handleNavigate} />;
      case '/gallery':
        return <GalleryPage onNavigate={handleNavigate} />;
      case '/contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case '/':
      default:
        // Section 30 mandated Homepage Order:
        // 1. Header (rendered outside)
        // 2. Hero
        // 3. Introduction
        // 4. Quick Information
        // 5. हमारा उद्देश्य
        // 6. संगठन
        // 7. किसान हित
        // 8. हमारी भूमिका
        // 9. हमारी गतिविधियाँ
        // 10. FAQ
        // 11. Social Media
        // 12. Google Maps Location
        // 13. Contact
        // 14. Footer (rendered outside)
        return (
          <main>
            {/* 2. Hero */}
            <Hero onNavigate={handleNavigate} />

            {/* 3. Introduction */}
            <Introduction />

            {/* 4. Quick Information */}
            <QuickInfoCards onNavigate={handleNavigate} />

            {/* 5. हमारा उद्देश्य */}
            <Objectives />

            {/* 6. संगठन */}
            <Organization />

            {/* 7. किसान हित */}
            <KisanHit />

            {/* 8. हमारी भूमिका */}
            <OurRole />

            {/* 9. हमारी गतिविधियाँ */}
            <Activities onNavigate={handleNavigate} />

            {/* 10. FAQ */}
            <FAQ />

            {/* 11. Social Media */}
            <SocialMedia />

            {/* 12. Google Maps Location */}
            <MapLocation />

            {/* 13. Contact */}
            <Contact />

            {/* Official Trust Notice Bar */}
            <OfficialTrustNotice />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-emerald-200 selection:text-emerald-950 font-sans">
      
      {/* 1. Sticky Responsive Header */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenJoin={() => setIsJoinModalOpen(true)}
      />

      {/* Main Page Area */}
      <div className="flex-1">
        {renderCurrentView()}
      </div>

      {/* 14. Professional Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* "हमसे जुड़ें" Direct Modal */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        onNavigateContact={() => handleNavigate('/contact')}
      />

    </div>
  );
}
