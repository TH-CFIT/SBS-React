import * as translationsData from '../data/translations.json';

export type Language = 'th' | 'en';

export const translations = translationsData as any;

export type TranslationKeys = keyof (typeof translationsData)['en'];

export const links: Record<Language, Record<string, string>> = {
  th: {
    contactUs: 'https://www.dhl.com/th-th/home/customer-service.html',
    termsOfUse: 'https://www.dhl.com/th-th/home/footer/terms-of-use.html',
    privacyNotice: 'https://www.dhl.com/th-th/home/footer/privacy-notice.html',
    fraudAwareness: 'https://www.dhl.com/th-th/home/footer/fraud-awareness.html',
    legalNotice: 'https://www.dhl.com/th-th/home/footer/legal-notice.html',
    dhlExpress: 'https://www.dhl.com/th-th/home/express.html',
    aboutDhl: 'https://www.dhl.com/th-th/home/about-us.html',
    press: 'https://www.dhl.com/th-th/home/press.html'
  },
  en: {
    contactUs: 'https://www.dhl.com/th-en/home/customer-service.html',
    termsOfUse: 'https://www.dhl.com/th-en/home/footer/terms-of-use.html',
    privacyNotice: 'https://www.dhl.com/th-en/home/footer/privacy-notice.html',
    fraudAwareness: 'https://www.dhl.com/th-en/home/footer/fraud-awareness.html',
    legalNotice: 'https://www.dhl.com/th-en/home/footer/legal-notice.html',
    dhlExpress: 'https://www.dhl.com/th-en/home/express.html',
    aboutDhl: 'https://www.dhl.com/th-en/home/about-us.html',
    press: 'https://www.dhl.com/th-en/home/press.html'
  }
};
