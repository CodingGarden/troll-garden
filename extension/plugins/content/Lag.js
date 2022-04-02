import ContentPlugin from '../../lib/ContentPlugin.js';

class Lag extends ContentPlugin {
  constructor() {
    super('Random lags');
  }

  id = '9ca97e7f-a8d4-4e7a-a409-db8e700f18f7';

  settings = {
    enabled: false,
  };

  run() {
    document.addEventListener('mousemove', () => {
      if (this.#shouldLag) {
        this.#expensiveStuff();
        this.#shouldLag = false;
        this.#setLagActivationTimeout();
      }
    });
    this.#setLagActivationTimeout();
  }

  #shouldLag = false;

  #setLagActivationTimeout() {
    setTimeout(() => {
      this.#shouldLag = true;
    }, Math.random() * 10000);
  }

  #expensiveStuff() {
    for (let i = 0; i < 300000; i += 1) {
      const el = document.createComment(Math.random() ** Math.random() * 10000);
      document.appendChild(el);
      el.remove();
    }
  }
}

export default Lag;
