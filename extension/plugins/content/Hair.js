import ContentPlugin from '../../lib/ContentPlugin.js';

const hairSvgs = [
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgLTEuMTU0NyA1IDEuMTU1Ij4KICA8cGF0aCBkPSJNIDUgMCBDIDMgLTEgMiAtMiAwIDAiIHN0cm9rZT0iIzM4MjkwMCIgc3Ryb2tlLXdpZHRoPSIwLjAwNyIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=',
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00LjAxIC0wLjAxIDQuMDIgNS4wMiI+CiAgPHBhdGggZD0iTSAwIDAgQyAtMiAxIC00IDMgLTQgNSIgc3Ryb2tlPSIjNDAyYjEwIiBzdHJva2Utd2lkdGg9IjAuMDA3IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==',
];

class Hair extends ContentPlugin {
  constructor() {
    super('Add a Hair');
  }

  id = 'a5c82b83-c4ad-4c14-b104-1ade5cb9603a';

  settings = {
    enabled: false,
  };

  run() {
    const hairImg = document.createElement('img');
    hairImg.src = hairSvgs[Math.floor(Math.random() * hairSvgs.length)];
    const createHair = () => {
      const width = 100 + Math.random() * 100;
      const height = 100 + Math.random() * 100;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const rotation = Math.random() * 360;
      hairImg.style = `
        width: ${width}px; 
        height: ${height}px; 
        position: fixed; 
        z-index: 9999; 
        top: ${y}vh; 
        left: ${x}vw;
        transform: rotate(${rotation}deg);
      `;
    };
    createHair();
    window.addEventListener('DOMContentLoaded', createHair);
    document.body.append(hairImg);
  }
}

export default Hair;
