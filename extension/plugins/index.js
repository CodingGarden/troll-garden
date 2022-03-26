import RandomDiscordNotification from './background/RandomDiscordNotification.js';
import RandomSlackNotification from './background/RandomSlackNotification.js';
import AllLinksRickRoll from './content/AllLinksRickRoll.js';
import DeadPixel from './content/DeadPixel.js';
import PageBlur from './content/PageBlur.js';

export default [
  new RandomDiscordNotification(),
  new RandomSlackNotification(),
  new AllLinksRickRoll(),
  new PageBlur(),
  new DeadPixel(),
];
