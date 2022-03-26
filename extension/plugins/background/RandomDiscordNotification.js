import BackgroundPlugin from '../../lib/BackgroundPlugin.js';

class RandomDiscordNotification extends BackgroundPlugin {
  constructor() {
    super('Random Discord Notification');
  }

  id = 0;

  settings = {
    enabled: false,
  };

  run() {
    console.log('Discord notification running...');
    const discordNotificationTimeout = (5 + (Math.random() * 6)) * (60 * 1000);
    const sound = new Audio('../sounds/discord.mp3');
    this.intervalId = setInterval(() => {
      console.log('Playing discord notification...');
      sound.currentTime = 0;
      sound.play();
    }, discordNotificationTimeout);
  }

  cleanup() {
    clearInterval(this.intervalId);
  }
}

export default RandomDiscordNotification;
