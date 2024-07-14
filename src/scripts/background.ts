chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && tab.url) {
    // Send a message to the content script with the updated URL
    chrome.tabs.sendMessage(tabId, { type: 'URL_CHANGED', url: tab.url });
  }
});

chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});
