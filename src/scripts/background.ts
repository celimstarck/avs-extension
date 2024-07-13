chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && tab.url) {
    // Send a message to the content script with the updated URL
    console.log('tab url:', tabId, changeInfo, tab, tab.url);
    chrome.tabs.sendMessage(tabId, { type: 'URL_CHANGED', url: tab.url });
  }
});

chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed hihi');
});

/* chrome.webNavigation.onHistoryStateUpdated.addListener((details: any) => {
  console.log('details:', details);
});
 */
/* 

chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
  if (details.frameId === 0) {
    const { tabId, url } = details;

    if (url.includes('operator')) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['operator.content.bundle.js'],
      });
    } else if (url.includes('avs')) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['avs.content.bundle.js'],
      });
    } else if (url.includes('operators')) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['operators.content.bundle.js'],
      });
    } else {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['operators.content.bundle.js'],
      });
    }
  }
});
chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
  console.log('details:', details);
  if (details.frameId === 0) {
    const { tabId, url } = details;

    if (url.includes('/operator')) {
      chrome.scripting.executeScript({
        target: { tabId },
        files: ['operator.content.bundle.js'],
      });
    } else if (url.includes('/avs')) {
      chrome.scripting.executeScript({
        target: { tabId },
        files: ['avs.content.bundle.js'],
      });
    } else {
      chrome.scripting.executeScript({
        target: { tabId },
        files: ['operators.content.bundle.js'],
      });
    }
  }
}); */
