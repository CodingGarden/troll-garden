import ContentPlugin from '../../lib/ContentPlugin.js';

class PageBlur extends ContentPlugin {
  constructor() {
    super('Add a 1px blur over 5 seconds to the whole page');
  }

  id = 51;

  settings = {
    enabled: false,
  };

  run() {
    document.body.style.transitionDuration = '5s';
    document.body.style.filter = 'blur(1px)';
  }

  cleanup() {
    document.body.style.filter = '';
  }
}

export default PageBlur;
