import React from 'react';
import { ChevronDown, Network, Info } from 'lucide-react';
import { organizationalStructureNodes, siteMeta } from '../config/siteData';

export const OrganizationStructure: React.FC = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
        <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
          <Network className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-stone-900">
            संगठनात्मक संरचना
          </h3>
          <p className="text-xs sm:text-sm text-stone-500">
            सामान्य पदानुक्रम एवं संगठनात्मक स्तर
          </p>
        </div>
      </div>

      {/* Visual Hierarchy Tree */}
      <div className="flex flex-col items-center max-w-lg mx-auto py-2">
        {organizationalStructureNodes.map((node, index) => (
          <React.Fragment key={node.level}>
            {/* Hierarchy Node Box */}
            <div
              className={`w-full text-center px-4 py-3.5 rounded-lg border transition-all ${
                index === 0
                  ? 'bg-emerald-900 text-white border-emerald-950 font-bold shadow-xs'
                  : index === 1
                  ? 'bg-emerald-800 text-emerald-50 border-emerald-900 font-semibold'
                  : index === 2
                  ? 'bg-emerald-50 text-emerald-950 border-emerald-200 font-semibold'
                  : index === 3
                  ? 'bg-stone-50 text-stone-900 border-stone-300 font-medium'
                  : 'bg-white text-stone-800 border-stone-200 font-medium'
              }`}
            >
              <div className="text-sm sm:text-base leading-tight">
                {node.name}
              </div>
              <div
                className={`text-xs mt-0.5 ${
                  index < 2 ? 'text-emerald-200/90' : 'text-stone-500'
                }`}
              >
                {node.roleType}
              </div>
            </div>

            {/* Downward Connector Arrow */}
            {index < organizationalStructureNodes.length - 1 && (
              <div className="py-1.5 flex flex-col items-center text-emerald-700/60">
                <div className="w-0.5 h-3 bg-emerald-300"></div>
                <ChevronDown className="w-4 h-4 -my-1 text-emerald-700" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mandatory Official Disclaimer Note */}
      <div className="mt-8 p-4 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-2.5 text-xs text-stone-600">
        <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {siteMeta.structureNote}
        </p>
      </div>
    </div>
  );
};
