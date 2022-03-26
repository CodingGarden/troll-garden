import ContentPlugin from '../../lib/ContentPlugin.js';

class TextHighlight extends ContentPlugin {
  constructor() {
    super('Disable text highlighting');
  }

  id = 5;

  settings = {
    enabled: false,
  };

  run() {
    document.body.style.userSelect = 'none';
  }

  cleanup() {
    document.body.style.userSelect = '';
  }
}

export default TextHighlight;
