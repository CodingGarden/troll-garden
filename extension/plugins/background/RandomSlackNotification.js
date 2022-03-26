import BackgroundPlugin from '../../lib/BackgroundPlugin.js';

class RandomSlackNotification extends BackgroundPlugin {
  constructor() {
    super('Random Slack Notification');
  }

  id = 1;

  settings = {
    enabled: false,
  };

  run() {
    console.log('Slack notification running...');
    const slackNotificationTimeout = (7 + (Math.random() * 6)) * (60 * 1000);
    const sound = new Audio('../sounds/slack.mp3');
    this.intervalId = setInterval(() => {
      console.log('Playing slack notification...');
      sound.currentTime = 0;
      sound.play();
    }, slackNotificationTimeout);
  }

  cleanup() {
    clearInterval(this.intervalId);
  }
}

export default RandomSlackNotification;
