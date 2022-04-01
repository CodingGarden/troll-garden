import ContentPlugin from '../../lib/ContentPlugin.js';

class SlowYTVids extends ContentPlugin {
  constructor() {
    super('Slow down YouTube video payback speed');
  }

  id = '75434726-7930-4147-873e-1ef56841873d';

  settings = {
    enabled: false,
    // TODO: Maybe enable to all websites?
    yt_only: true,
    speed: 0.4,
  };

  run() {
    const slowVID = () => {
      document.querySelectorAll('video').forEach((vid) => {
        vid.playbackRate = (typeof this.settings.speed === 'undefined') ? 0.4 : this.settings.speed;
      });
    };
    // only slowdown vids on YouTube
    if (location.hostname.includes('youtube') && this.settings.yt_only) {
      // listen on YT navigate events
      document.addEventListener('yt-navigate-finish', (e) => {
        // check if we are on a "watch" page
        if (e.detail.pageType === 'watch' && this.settings) {
          slowVID();
        }
      });
      document.addEventListener('DOMContentLoaded', slowVID);
    }
  }

  cleanup() {
  }
}

export default SlowYTVids;
