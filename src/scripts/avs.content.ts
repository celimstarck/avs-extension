import { InternalMessage } from '../types/internal';

import axios, { AxiosResponse } from 'axios';

// Define an interface for the request data
interface Post {
  operatorAddress: string;
}

async function handleMessage(event: any) {
  if (event.source !== window || event.data.type !== 'SEND_DATA') {
    return;
  }

  console.log('event handleMessage:', event);

  const frontendData = event.data.data;
  console.log('frontendData:', frontendData);

  console.log('coucoucoucoucouo');
  const test = await createPost({ operatorAddress: frontendData.operatorAddress });
  (window as any).test = test;
  const eventCustom = new CustomEvent('createdPostReady', { detail: test });
  window.dispatchEvent(eventCustom);
}

// Define an interface for the response data

// Function to create a new post
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

// Function to inject a script into the page
function injectScript(url: string) {
  console.log('inject avs script');
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL(url);
  script.async = false;
  script.type = 'module';
  (document.head || document.documentElement).appendChild(script);
}

injectScript('avs.bundle.js');
window.addEventListener('message', handleMessage);

// Initial injection of the script
