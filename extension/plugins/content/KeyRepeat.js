import ContentPlugin from '../../lib/ContentPlugin.js';

class KeyRepeat extends ContentPlugin {
  constructor() {
    super('Randomly repeat keypresses');
  }

  id = 'eddc75c2-0323-48ff-97a2-8cdaacd2672b';

  settings = {
    enabled: false,
  };

  run() {
    document.addEventListener('keydown', (e) => {
      if ((e.key >= 'a' && e.key <= 'z') || (e.key >= '0' && e.key <= '9')
         || (e.key >= 'A' && e.key <= 'Z')) {
        const randomValue = Math.random();
        if (randomValue < 0.1) { // Happens 10% of the time.
          const element = e.target;
          element.value += e.key;
        }
      }
    });
  }

  cleanup() {

  }
}

export default KeyRepeat;
