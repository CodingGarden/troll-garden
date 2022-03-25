import modules from '../shared/modules.js';

console.log('SYSTEM TOOLS READY!');

modules.forEach((mod) => {
  const mod_id = `module_${mod.id}`;
  chrome.storage.local.get(mod_id, (settingsJSON) => {
    settingsJSON = settingsJSON[mod_id] || mod.settings;
    if (mod.type === 'background' && settingsJSON.enabled) {
      mod.run();
    }
  });
});

chrome.storage.onChanged.addListener((changes) => {
  console.log(changes);
  const [mod_id] = Object.keys(changes);
  const [, id] = mod_id.split('_');
  const foundMod = modules.find((mod) => mod.id == id);
  const { newValue } = changes[mod_id];
  if (foundMod.type === 'background' && newValue.enabled) {
    foundMod.run();
  } else if (foundMod.type === 'background') {
    foundMod.cleanup();
  }
});
