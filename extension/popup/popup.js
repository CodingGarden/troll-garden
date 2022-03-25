import modules from '../shared/modules.js';

const fieldsetElement = document.querySelector('#menu fieldset');

modules.forEach((mod) => {
  const mod_id = `module_${mod.id}`;
  chrome.storage.local.get(mod_id, (settingsJSON) => {
    settingsJSON = settingsJSON[mod_id] || mod.settings;
    const labelElement = document.createElement('label');
    labelElement.setAttribute('for', mod_id);
    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'checkbox');
    inputElement.setAttribute('id', mod_id);
    inputElement.setAttribute('name', mod_id);
    inputElement.setAttribute('role', 'switch');
    inputElement.checked = settingsJSON.enabled;
    inputElement.addEventListener('input', () => {
      chrome.storage.local.set({
        [mod_id]: {
          ...settingsJSON,
          enabled: inputElement.checked,
        },
      });
    });
    const spanElement = document.createElement('span');
    spanElement.textContent = mod.name;
    labelElement.append(inputElement);
    labelElement.append(spanElement);
    fieldsetElement.append(labelElement);
  });
});
