import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AlertTriangle, ChevronRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenTerms: () => void;
  consentAccepted: boolean;
  onToggleConsent: (val: boolean) => void;
  onStartShipment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerms, consentAccepted, onToggleConsent, onStartShipment }) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Emergency Section */}
      <section className="card bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-gray-800 overflow-hidden relative group">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <AlertTriangle className="w-32 h-32 text-dhl-red" />
        </div>
        <div className="relative z-10 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4 text-dhl-red">
            <AlertTriangle className="w-8 h-8 md:w-10 md:h-10 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
               {t('emergencyOnlyTitle')}
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed text-lg font-medium">
            {t('emergencySystemMessage')}
          </p>
        </div>
      </section>

      {/* Action Section */}
      <section className="card flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800 dark:text-gray-100">
          {t('gettingStartedTitle')}
        </h2>

        <div className="w-full max-w-2xl bg-yellow-50 dark:bg-yellow-900/10 border-2 border-dhl-yellow/30 rounded-2xl p-6 mb-8 transition-colors hover:border-dhl-yellow/60">
          <div className="flex items-start gap-4">
            <div className="mt-1">
               <input 
                type="checkbox" 
                id="consent-checkbox"
                checked={consentAccepted}
                onChange={(e) => onToggleConsent(e.target.checked)}
                className="w-6 h-6 rounded border-2 border-dhl-yellow text-dhl-red focus:ring-dhl-red cursor-pointer accent-dhl-red"
              />
            </div>
            <label htmlFor="consent-checkbox" className="text-gray-800 dark:text-gray-200 text-sm md:text-base leading-relaxed cursor-pointer select-none">
              {t('consentTextPart1')}
              <button 
                onClick={(e) => { e.preventDefault(); onOpenTerms(); }}
                className="text-dhl-red hover:text-dhl-dark-red underline underline-offset-4 font-bold decoration-2 ml-1"
              >
                {t('consentLinkText')}
              </button>
              {t('consentTextPart2')}
            </label>
          </div>
        </div>

        <div className="relative group">
           <button 
            disabled={!consentAccepted}
            onClick={onStartShipment}
            className={`main-action-button relative z-10 ${!consentAccepted ? 'is-disabled' : 'shadow-2xl shadow-red-500/10 hover:shadow-red-500/20 active:scale-95'}`}
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-dhl-red rounded-2xl transition-transform group-hover:rotate-6 group-hover:scale-110 shadow-lg">
                <ChevronRight className="w-10 h-10 text-white" />
            </div>
            <span className="text-xl font-bold uppercase tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-dhl-red transition-colors">
              {t('createShipment')}
            </span>
            {consentAccepted && (
              <div className="absolute -top-2 -right-2">
                <CheckCircle2 className="w-8 h-8 text-green-500 fill-white dark:fill-gray-800 animate-in zoom-in" />
              </div>
            )}
          </button>
           {/* Visual Glow */}
           {consentAccepted && (
             <div className="absolute inset-0 bg-dhl-red/10 blur-3xl -z-10 rounded-full animate-pulse" />
           )}
        </div>
      </section>
    </div>
  );
};
