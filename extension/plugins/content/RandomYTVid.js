import ContentPlugin from '../../lib/ContentPlugin.js';

class RandomYTVid extends ContentPlugin {
  constructor() {
    super('Open another YouTube video then clicked');
  }

  id = 'e1ec49fd-a3e2-4dc1-ac5d-d2d2a326410c';

  settings = {
    enabled: false,
    yt_only: true,
  };

  redirected = false;

  run() {
    const randomVID = () => {
      // so that the event listener is only triggered once
      this.redirected = true;
      const videos = document.querySelectorAll(
        'a[id="thumbnail"][href*="/watch"]'
      );
      videos[Math.floor(Math.random() * videos.length)].click();
    };

    if (location.hostname.includes('youtube') && this.settings.yt_only) {
      // listen on YT navigate events
      document.addEventListener('yt-navigate-start', (e) => {
        // check if we are on a "watch" page
        if (e.path[2].baseURI.includes('watch') && !this.redirected) {
          randomVID();
        } else {
          this.redirected = false;
        }
      });
    }
  }

  cleanup() {}
}

export default RandomYTVid;
