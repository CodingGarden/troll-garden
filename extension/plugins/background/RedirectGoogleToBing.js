import BackgroundPlugin from '../../lib/BackgroundPlugin.js';

class RedirectGoogleToBing extends BackgroundPlugin {
  constructor() {
    super('Redirect Google search results to Bing');
  }

  id = 6;

  settings = {
    enabled: false,
  };

  listener(details) {
    const url = new URL(details.url);
    const q = url.searchParams.get('q');
    if (q) {
      chrome.tabs.update(details.tabId, {
        url: `https://www.bing.com/search?q=${q}`,
      });
    }
  }

  run() {
    chrome.webNavigation.onBeforeNavigate.addListener(this.listener, {
      url: [{
        hostPrefix: 'www.google.',
      },
      {
        hostPrefix: 'google.',
      }],
    });
  }

  cleanup() {
    chrome.webNavigation.onBeforeNavigate.removeListener(this.listener);
  }
}

export default RedirectGoogleToBing;
