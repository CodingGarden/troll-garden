(async () => {
  const src = chrome.runtime.getURL('plugins/index.js');
  const { default: plugins } = await import(src);
  plugins.forEach((plugin) => {
    const plugin_id = `plugin_${plugin.id}`;
    chrome.storage.local.get(plugin_id, (savedSettings) => {
      savedSettings = savedSettings[plugin_id] || plugin.settings;
      if (plugin.type === 'content' && savedSettings.enabled) {
        plugin.settings = savedSettings;
        plugin.run();
      }
    });
  });
  chrome.storage.onChanged.addListener((changes) => {
    const [plugin_id] = Object.keys(changes);
    const [, id] = plugin_id.split('_');
    // eslint-disable-next-line eqeqeq
    const plugin = plugins.find((p) => p.id == id);
    const { newValue } = changes[plugin_id];
    if (plugin.type === 'content' && newValue.enabled) {
      plugin.settings = newValue;
      plugin.run();
    } else if (plugin.type === 'content') {
      plugin.cleanup();
    }
  });
})();
