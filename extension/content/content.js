console.log('HELLO FROM THE CONTENT SCRIPT!');

(async () => {
  const src = chrome.runtime.getURL('../shared/modules.js');
  const { default: modules } = await import(src);
  modules.forEach((mod) => {
    const mod_id = `module_${mod.id}`;
    chrome.storage.local.get(mod_id, (settingsJSON) => {
      settingsJSON = settingsJSON[mod_id] || mod.settings;
      if (mod.type === 'content' && settingsJSON.enabled) {
        mod.run();
      }
    });
  })
})();