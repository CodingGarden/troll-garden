class Plugin {
  type = 'not_set';

  constructor(name) {
    this.name = name || 'NAME NOT SET';
  }

  run() {
    console.log(`Default ${this.type} plugin runner: ${this.name}`);
  }

  cleanup() {
    console.log(`Default ${this.type} plugin cleanup: ${this.name}`);
  }
}

export default Plugin;
