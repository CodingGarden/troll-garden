import BackgroundPlugin from '../../lib/BackgroundPlugin.js';

class RandomKnock extends BackgroundPlugin {
  constructor() {
    super('Random Knock Sound');
  }

  id = '954ae59d-fff2-427c-b7be-2c4220ffe675';

  settings = {
    enabled: false,
  };

  run() {
    console.log('Knock sound running...');
    const discordNotificationTimeout = (7 + (Math.random() * 4)) * (60 * 1000);
    const sound = new Audio('../sounds/knock.mp3');
    this.intervalId = setInterval(() => {
      console.log('Playing knock sound...');
      sound.currentTime = 0;
      sound.play();
    }, discordNotificationTimeout);
  }

  cleanup() {
    clearInterval(this.intervalId);
  }
}

export default RandomKnock;
