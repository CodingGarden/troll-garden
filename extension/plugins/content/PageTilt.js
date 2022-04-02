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
  }

  cleanup() {
    document.body.style.transform = "";
  }
}

export default PageTilt;
