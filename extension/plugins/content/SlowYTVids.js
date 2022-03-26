import ContentPlugin from '../../lib/ContentPlugin.js';

class PageBlur extends ContentPlugin {
  constructor() {
    super('Slow down YouTube video payback speed');
  }

  id = 57;

  settings = {
    enabled: false,
    // TODO: Maybe enable to all websites?
    yt_only: true,
    speed: .4,
  }

  run() {
    const slowVID = () => {
      document.querySelectorAll('video').forEach(vid => {
        vid.playbackRate = speed || .4;
      })
    }
    // only slowdown vids on YouTube
    if (location.hostname.includes('youtube') && yt_only) {
      // listen on YT navigate events
      document.addEventListener('yt-navigate-finish', (e) => {
        // check if we are on a "watch" page
        if(e.detail.pageType === 'watch' && settings) {
          slowVID();
        }
      })
      document.addEventListener('DOMContentLoaded', slowVID);
    }
  }

  cleanup() {
  }
}

export default PageBlur;
