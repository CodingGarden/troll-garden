import ContentPlugin from "../../lib/ContentPlugin.js";

class PageTilt extends ContentPlugin {
  constructor() {
    super("Tilt the whole page slightly");
  }

  id = "37bcfd48-b2c0-11ec-b909-0242ac120002";

  settings = {
    enabled: false,
  };

  run() {
    document.body.style.transform = "rotate(0.1deg)";
    this.rotation = 0.1;
    this.intervalID = setInterval(() => {
      console.log("Rotating...");
      this.rotation += 0.1;
      document.body.style.transform = `rotate(${this.rotation}deg)`;
    }, 3000);
  }

  cleanup() {
    document.body.style.transform = "";
    clearInterval(this.intervalID);
  }
}

export default PageTilt;
