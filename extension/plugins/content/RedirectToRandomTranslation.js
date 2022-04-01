import ContentPlugin from '../../lib/ContentPlugin.js';

class RedirectToRandomTranslation extends ContentPlugin {
  constructor() {
    super('Redirect any page to a translated version');
  }

  id = '16cad9f6-98e0-4bc6-a103-eff05fc30572';

  settings = {
    enabled: false,
  };

  codes = [
    'af',
    'sq',
    'am',
    'ar',
    'hy',
    'az',
    'eu',
    'be',
    'bn',
    'bs',
    'bg',
    'ca',
    'ceb',
    'ny',
    'zh-CN',
    'zh-TW',
    'co',
    'hr',
    'cs',
    'da',
    'nl',
    'eo',
    'et',
    'tl',
    'fi',
    'fr',
    'fy',
    'gl',
    'ka',
    'de',
    'el',
    'gu',
    'ht',
    'ha',
    'haw',
    'iw',
    'hi',
    'hmn',
    'hu',
    'is',
    'ig',
    'id',
    'ga',
    'it',
    'ja',
    'jw',
    'kn',
    'kk',
    'km',
    'rw',
    'ko',
    'ku',
    'ky',
    'lo',
    'la',
    'lv',
    'lt',
    'lb',
    'mk',
    'mg',
    'ms',
    'ml',
    'mt',
    'mi',
    'mr',
    'mn',
    'my',
    'ne',
    'no',
    'or',
    'ps',
    'fa',
    'pl',
    'pt',
    'pa',
    'ro',
    'ru',
    'sm',
    'gd',
    'sr',
    'st',
    'sn',
    'sd',
    'si',
    'sk',
    'sl',
    'so',
    'es',
    'su',
    'sw',
    'sv',
    'tg',
    'ta',
    'tt',
    'te',
    'th',
    'tr',
    'tk',
    'uk',
    'ur',
    'ug',
    'uz',
    'vi',
    'cy',
    'xh',
    'yi',
    'yo',
    'zu',
  ];

  run() {
    const redirect = () => {
      setTimeout(() => {
        const isWebUrl = window.location.protocol === 'http:' || window.location.protocol === 'https:';
        if (isWebUrl && !window.location.hostname.endsWith('translate.goog') && !window.location.href.startsWith('https://translate.google.com')) {
          const langCode = this.codes[Math.floor(Math.random() * this.codes.length)];
          console.log('Redirecting to language', langCode);
          window.location.href = `https://translate.google.com/translate?hl=en&sl=auto&tl=${langCode}&u=${window.location}`;
        }
      }, 1000);
    };
    if (document.readyState !== 'complete') {
      window.addEventListener('DOMContentLoaded', redirect);
    } else {
      redirect();
    }
  }
}

export default RedirectToRandomTranslation;
