import { InternalMessage } from '../types/internal';

import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

// Define an interface for the request data
interface Post {
  operatorAddress: string;
}

async function handleMessage(event: any) {
  if (event.source !== window || event.data.type !== 'SEND_DATA') {
    return;
  }

  const frontendData = event.data.data;

  const test = await createPost({ operatorAddress: frontendData.operatorAddress });
  (window as any).test = test;
  const eventCustom = new CustomEvent('createdPostReady', { detail: test });
  window.dispatchEvent(eventCustom);
}

// Define an interface for the response data

// Function to create a new post
async function createPost(postData: Post) {
  const base_api_url = process.env['BASE_URL_API_ENDPOINT'];
  //const base_api_url = 'https://2274-2a01-cb08-90a-1d00-87e6-81d0-377d-3681.ngrok-free.app/dev';
  const endpoint_url = '/getOperatorAvsRelationshipAtBlock';
  const apiUrl = base_api_url + endpoint_url;

  try {
    // Make a POST request

    /* const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        Origin: 'https://app.eigenlayer.xyz', // The origin of your request
        'Custom-Header': 'CustomValue',
        'Access-Control-Allow-Origin': '*',
      },
    }; */

    const response: AxiosResponse = await axios.post(apiUrl, postData);

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
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL(url);
  script.async = false;
  script.type = 'module';
  (document.head || document.documentElement).appendChild(script);
}

injectScript('avs.bundle.js');
window.addEventListener('message', handleMessage);

// Initial injection of the script
