import RandomDiscordNotification from './background/RandomDiscordNotification.js'; // id 0
import RandomSlackNotification from './background/RandomSlackNotification.js'; // id 1
import AllLinksRickRoll from './content/AllLinksRickRoll.js'; // id 2
import DeadPixel from './content/DeadPixel.js'; // id 59
import ComicSans from './content/ComicSans.js'; // id 58
import TextHighlight from './content/TextHighlight.js'; // id 5
import PageBlur from './content/PageBlur.js'; // id 51
import SlowYTVids from './content/SlowYTVids.js'; // id 57
import AcceptOurPies from './content/AcceptOurPies.js'; // id 60
import RedirectGoogleToBing from './background/RedirectGoogleToBing.js'; // id 6

export default [
  new RandomDiscordNotification(),
  new RandomSlackNotification(),
  new RedirectGoogleToBing(),
  new AllLinksRickRoll(),
  new PageBlur(),
  new SlowYTVids(),
  new AcceptOurPies(),
  new ComicSans(),
  new TextHighlight(),
  new DeadPixel(),
];
