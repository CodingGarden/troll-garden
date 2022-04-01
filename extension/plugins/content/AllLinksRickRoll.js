import ContentPlugin from '../../lib/ContentPlugin.js';

class AllLinksRickRoll extends ContentPlugin {
  constructor() {
    super('Replace all links on every page with a rick roll');
  }

  id = '52c7fbb3-bc58-48db-b368-d6c8e5b7e5bd';

  settings = {
    enabled: false,
  };

  run() {
    console.log('Random Rick Roll inserter running...');
    const rickRoll = () => {
      document.querySelectorAll('a').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        });
      });
    };
    rickRoll();
    window.addEventListener('DOMContentLoaded', rickRoll);
  }
}

export default AllLinksRickRoll;
