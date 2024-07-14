/*
    This is a content script
    * Content script is accessible to `chorme.runtime` for example.
    * Injected Script runs in the 'page' level and not in the 'content script' level
        * Page can't access the chrome.runtime or other extension API
*/

/*
 TRAME
 

*/

import { getOperatorAVSSecured } from '../api/getOperatorData';
import getListFromAVSOperatorData from '../helpers/getLists';
import { InternalMessage } from '../types/internal';
import { OperatorAVSRelationshipEndpoint } from '../types/OperatorAVSTypes';
import { OperatorAVSSecured } from '../types/OperatorAVSTypes';
import axios, { AxiosResponse } from 'axios';

// Define an interface for the request data
interface Post {
  operatorAddress: string;
}
async function createPost(postData: Post) {
  console.log('on est dans create post');
  try {
    // Make a POST request
    console.log('response axios......');
    const response: AxiosResponse = await axios.post(
      'https://52cc-178-51-98-244.ngrok-free.app/dev/getOperatorAvsRelationshipAtBlock',
      postData
    );
    console.log('response:', response);

    console.log('fin de la req axios');

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error creating post:', error);
    throw error;
  }
}

async function handleMessage(event: any) {
  if (event.source !== window || event.data.type !== 'SEND_DATA') {
    return;
  }

  console.log('event handleMessage:', event);

  const frontendData = event.data.data;
  console.log('frontendData:', frontendData);

  console.log('coucoucoucoucouo');
  /* const test = await createPost({ operatorAddress: frontendData.operatorAddress }); */
  const test = await getOperatorAVSSecured(frontendData);
  if (test) {
    const test2 = getListFromAVSOperatorData(test);
    (window as any).test = test2;
    const eventCustom = new CustomEvent('OperatorRequest', { detail: test2 });
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
