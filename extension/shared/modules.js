const intervals = new Map();

const discordNotificationTimeout = (5 + (Math.random() * 6)) * (60 * 1000);
const slackNotificationTimeout = (7 + (Math.random() * 6)) * (60 * 1000);

export default [{
  id: 0,
  type: 'background',
  name: 'Random Discord Notification',
  settings: {
    enabled: false,
  },
  run: () => {
    console.log('Discord notification running...');
    const sound = new Audio('../sounds/discord.mp3');
    const intervalId = setInterval(() => {
      console.log('Playing discord notification...');
      sound.currentTime = 0;
      sound.play();
    }, discordNotificationTimeout);
    intervals.set(0, intervalId);
  },
  cleanup: () => {
    clearInterval(intervals.get(0));
  },
}, {
  id: 1,
  type: 'background',
  name: 'Random Slack Notification',
  settings: {
    enabled: false,
  },
  run: () => {
    const sound = new Audio('../sounds/slack.mp3');
    const intervalId = setInterval(() => {
      console.log('Playing slack notification...');
      sound.currentTime = 0;
      sound.play();
    }, slackNotificationTimeout);
    intervals.set(1, intervalId);
  },
  cleanup: () => {
    clearInterval(intervals.get(1));
  },
}, {
  id: 2,
  type: 'content',
  name: 'Replace Random Links with Rick Roll',
  settings: {
    enabled: false,
  },
  run: () => {
    console.log('Random Rick Roll inserter running...');
    const style = document.createElement('style');
    const nothingLink = document.createElement('a');
    nothingLink.style.display = 'none';
    nothingLink.href = 'https://youveneverbeenhere.com/really';
    document.body.append(nothingLink);
    const cssObj = window.getComputedStyle(nothingLink, null);
    const color = cssObj.getPropertyValue('color');
    console.log('color', color);
    style.innerHTML = `a:visited { color: ${color} !important; }`;
    document.body.append(style);
    const rickRoll = () => {
      document.querySelectorAll('a').forEach((anchor) => {
        anchor.style.color = color;
        anchor.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      });
    };
    rickRoll();
    window.addEventListener('DOMContentLoaded', rickRoll);
  },
  cleanup() {

  },
}, {
  id: 52,
  type: 'content',
  name: 'Update input values to uppercase',
  settings: {
    enabled: false
  },
  upper: ({target}) => {
    if(target.value)
      target.value = target.value.toUpperCase();
  },
  run: () => {
    document.addEventListener('keydown', upper);
  },
  cleanup: () => {
    document.removeEventListener('keydown', upper);
  }
}];
