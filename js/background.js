// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log('Default background color set to %cgreen', `color: ${color}`);
// //   console.log('Troll Garden Loaded Successfully');
// });

// function blurPage() {
//     document.body.style.filter = "blur(5px)";
// }

// chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: blurPage,
// });

// document.addEventListener("DOMContentLoaded", async (event) => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//     console.log('DOM Content Loaded');

//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: blurPage,
//     });
// });