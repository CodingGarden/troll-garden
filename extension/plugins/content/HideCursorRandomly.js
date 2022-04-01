import ContentPlugin from '../../lib/ContentPlugin.js';

class HideCursorRandomly extends ContentPlugin {
  constructor() {
    super('Hide Cursor Randomly');
  }

  id = 'a98e0948-8f2b-44c9-a062-e4fed75c4813';

  settings = {
    enabled: false,
  };

  run() {
    document.body.addEventListener('click', () => {
      const hideMouse = () => {
        document.body.requestPointerLock();

        setTimeout(() => {
          document.exitPointerLock();
        }, 3 * 1000);
      };

      setTimeout(hideMouse, 1000);
    });
  }

  cleanup() {
    document.exitPointerLock();
  }
}

export default HideCursorRandomly;
