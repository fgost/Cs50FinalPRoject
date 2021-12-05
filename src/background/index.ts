// A basic example how you can use background scripts in your Chrome extension.
// More on: https://developer.chrome.com/docs/extensions/mv2/background_pages/.

window.chrome.runtime.onInstalled.addListener(async () => {
  // When the application first install, open a tab with index.html so we can see our react app.
  let url = window.chrome.runtime.getURL("index.html");
  window.chrome.tabs.create({ url });

  console.log(
    "'Create React Chrome Extension - TypeScript' installed/updated..."
  );
});

export default {};
