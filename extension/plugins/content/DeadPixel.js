import ContentPlugin from '../../lib/ContentPlugin.js';

class DeadPixel extends ContentPlugin {
  constructor() {
    super('Add a Dead Pixel');
  }

  id = '5a980d7e-138a-489e-b2c8-ced1d22b216e';

  settings = {
    enabled: false,
  };

  run() {
    const deadPixelColors = ['blue', 'green', 'red'];
    const pixel = document.createElement('div');
    const createDeadPixel = () => {
      const randomWidth = Math.floor(Math.random() * 100);
      const randomHeight = Math.floor(Math.random() * 100);
      const randomColor = deadPixelColors[Math.floor(Math.random() * deadPixelColors.length)];
      pixel.setAttribute('style', `margin: 0px; width: 1px; height: 1px; background-color: ${randomColor}; position: fixed; z-index: 9999; top: ${randomHeight}vh; left: ${randomWidth}vw`);
    };
    createDeadPixel();
    window.addEventListener('DOMContentLoaded', createDeadPixel);
    document.body.append(pixel);
  }
}

export default DeadPixel;
