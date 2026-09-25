import React from 'react';
import { Home, ChevronRight } from 'lucide-react';
import { KisanHit } from '../components/KisanHit';
import { OfficialTrustNotice } from '../components/OfficialTrustNotice';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const KisanHitPage: React.FC<PageProps> = ({ onNavigate }) => {
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
          <span className="font-semibold text-stone-800">किसान हित</span>
        </nav>

        <KisanHit />

        <div className="mt-12">
          <OfficialTrustNotice />
        </div>

      </div>
    </div>
  );
};
