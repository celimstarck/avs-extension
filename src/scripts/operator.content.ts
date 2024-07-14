/*
    This is a content script
    * Content script is accessible to `chorme.runtime` for example.
    * Injected Script runs in the 'page' level and not in the 'content script' level
        * Page can't access the chrome.runtime or other extension API
*/

/*
 TRAME
 

*/

import { getOperatorAVSSecured, getRestakersPerOperator } from '../api/getOperatorData';
import getListFromAVSOperatorData from '../helpers/getLists';

// Define an interface for the request data

async function handleMessage(event: any) {
  if (event.source !== window || event.data.type !== 'SEND_DATA') {
    return;
  }

  const frontendData = event.data.data;

  /* const test = await createPost({ operatorAddress: frontendData.operatorAddress }); */
  const test = await getOperatorAVSSecured(frontendData);
  const restakers = await getRestakersPerOperator(frontendData);
  if (test && restakers) {
    const test2 = getListFromAVSOperatorData(test);
    (window as any).test = test2;
    (window as any).restakers = restakers;
    const eventCustom = new CustomEvent('OperatorRequest', { detail: [test2, restakers] });
    window.dispatchEvent(eventCustom);
  }
}

// Operators on Page scope
async function injectScript(url: string) {
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL(url);
  script.async = false;
  script.type = 'module';

  //const test = await getOperatorData()
  const node = document.head || document.documentElement;
  node.prepend(script);
}
injectScript('operator.bundle.js');

window.addEventListener('message', handleMessage);
