import ContentPlugin from '../../lib/ContentPlugin.js';

class TextHighlight extends ContentPlugin {
  constructor() {
    super('Disable text highlighting');
  }

  id = '6c0cfe66-80b3-4827-9cd5-afd755725a60';

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
