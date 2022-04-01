import ContentPlugin from '../../lib/ContentPlugin.js';

class ComicSans extends ContentPlugin {
  constructor() {
    super('Comic Sans font applied to everything');
  }

  id = 'e840923f-844d-43da-be8a-acef702d1e28';

  settings = {
    enabled: false,
  };

  run() {
    document.body.style.fontFamily = 'Comic Sans MS, Comic Sans, cursive';
  }

  cleanup() {
    document.body.style.fontFamily = '';
  }
}

export default ComicSans;
