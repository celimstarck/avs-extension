import { InternalMessage } from '../types/internal';

// Function to inject a script into the page
function injectScript(url: string) {
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL(url);
  script.async = false;
  script.type = 'module';
  (document.head || document.documentElement).appendChild(script);
}

// Initial injection of the script
injectScript('avs.bundle.js');

// Function to re-inject script if necessary
function checkAndInject() {
  // Check if the script is already injected
  if (!document.querySelector(`script[src*="avs.bundle.js"]`)) {
    injectScript('avs.bundle.js');
  }
}

// Observe URL changes (for single-page applications)
const originalPushState = history.pushState;
history.pushState = function () {
  originalPushState.apply(this, arguments as any);
  checkAndInject();
};

window.addEventListener('popstate', () => {
  checkAndInject();
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'URL_CHANGED') {
    console.log('URL changed to:', message.url);
    injectScript('avs.bundle.js');
  }
});
