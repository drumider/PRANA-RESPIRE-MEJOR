import React from 'react';
import { Language } from '../types';
import { INSURANCES } from '../data/content';
import { ShieldCheck, ExternalLink } from 'lucide-react';

interface InsurancesSectionProps {
  lang: Language;
  onOpenBooking?: () => void;
}

export const InsurancesSection: React.FC<InsurancesSectionProps> = () => {
  return (
    <section id="aseguradoras" className="bg-white pb-16">
      {/* Green Header Banner */}
      <div className="bg-[#66D4A6] text-white py-6 sm:py-8 px-4 sm:px-6 shadow-sm mb-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-medium tracking-tight">
            Aseguradoras / Insurances
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSURANCES.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-[#21B5EB] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-cyan-50 text-[#21B5EB] flex items-center justify-center group-hover:bg-[#21B5EB] group-hover:text-white transition-colors">
                  <ShieldCheck className="w-7 h-7" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-slate-800 tracking-tight group-hover:text-[#21B5EB] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-slate-500 text-sm font-normal">
                    {item.type}
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#195638] hover:bg-[#13442c] text-white px-5 py-3 rounded-xl text-xs font-semibold tracking-wide transition-colors shadow-sm"
                >
                  <span>Visitar sitio oficial</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

