import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t, getLink } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F5F5] text-gray-00 py-12 mt-auto border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <h3 className="font-bold tracking-wider uppercase text-sm border-b border-dhl-red pb-2 w-fit" >
              {t('contactSupport')}
            </h3>
            <ul className="space-y-4">
              <li>
                <a href={getLink('contactUs')} target="_blank" className="hover:text-dhl-yellow transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-dhl-red rounded-full"></span>
                  {t('contactUs')}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold tracking-wider uppercase text-sm border-b border-dhl-red pb-2 w-fit">
              {t('legal')}
            </h3>
            <ul className="space-y-4">
              {['termsOfUse', 'privacyNotice', 'fraudAwareness', 'legalNotice'].map((key) => (
                <li key={key}>
                  <a href={getLink(key)} target="_blank" className="hover:text-dhl-yellow transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-dhl-red rounded-full"></span>
                    {t(key as any)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="p-1 rounded transition-transform group-hover:scale-105 flex items-center justify-left">
              <img
                src="/icon/DHL_logo_rgb_black.svg"
                alt="DHL Logo"
                className="h-6 object-contain"
              />
            </div>
            <ul className="space-y-4">
              {['dhlExpress', 'aboutDhl', 'press'].map((key) => (
                <li key={key}>
                  <a href={getLink(key)} target="_blank" className="hover:text-dhl-yellow transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-dhl-red rounded-full"></span>
                    {t(key as any)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col items-center gap-4 text-xs font-medium uppercase tracking-widest">
          <p className="text-center">
            &copy; {currentYear} DHL Express. {t('allRightsReserved')}
          </p>
          <div className="flex gap-6">
            {/* <span className="text-dhl-red">Deutsche Post DHL Group</span> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
