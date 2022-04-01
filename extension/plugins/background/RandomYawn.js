import BackgroundPlugin from '../../lib/BackgroundPlugin.js';

class RandomYawn extends BackgroundPlugin {
  constructor() {
    super('Random yawning 🥱');
  }

  id = '4815275f-602c-49c2-a0f2-46538859fbcd';

  settings = {
    enabled: false,
  };

  run() {
    console.log('Random yawning running...');

    const yawnTimeout = (9 + (Math.random() * 6)) * (60 * 1000);
    const yawn_1 = new Audio('../sounds/yawn_1.mp3');
    const yawn_2 = new Audio('../sounds/yawn_2.mp3');
    this.intervalId = setInterval(() => {
      console.log('yawning...🥱');
      // randomly select one of our 2 yaw🥱nings
      if(Math.random() < 0.5) {
        yawn_1.currentTime = 0;
        yawn_1.play();
      } else {
        yawn_2.currentTime = 0;
        yawn_2.play();
      }
    }, yawnTimeout);
  }

  cleanup() {
    clearInterval(this.intervalId);
  }
}

export default RandomYawn;
