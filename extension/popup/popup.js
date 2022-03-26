import plugins from '../plugins/index.js';

const fieldsetElement = document.querySelector('#menu fieldset');

plugins.forEach((plugin) => {
  const plugin_id = `plugin_${plugin.id}`;
  chrome.storage.local.get(plugin_id, (savedSettings) => {
    savedSettings = savedSettings[plugin_id] || plugin.settings;
    const labelElement = document.createElement('label');
    labelElement.setAttribute('for', plugin_id);
    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'checkbox');
    inputElement.setAttribute('id', plugin_id);
    inputElement.setAttribute('name', plugin_id);
    inputElement.setAttribute('role', 'switch');
    inputElement.checked = savedSettings.enabled;
    inputElement.addEventListener('input', () => {
      chrome.storage.local.set({
        [plugin_id]: {
          ...savedSettings,
          enabled: inputElement.checked,
        },
      });
    });
    const spanElement = document.createElement('span');
    spanElement.textContent = plugin.name;
    labelElement.append(inputElement);
    labelElement.append(spanElement);
    fieldsetElement.append(labelElement);
  });
});
