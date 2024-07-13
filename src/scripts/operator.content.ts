// Attach on Page scope
import { InternalMessage } from '../types/internal';

async function injectScript(url: string) {
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL(url);
  script.async = false;
  script.type = 'module';

  const node = document.head || document.documentElement;
  node.prepend(script);
}

console.log('injecting explorer');

/* Inject explorer script */
injectScript('operator.bundle.js');
