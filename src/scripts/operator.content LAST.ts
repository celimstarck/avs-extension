/*
    This is a content script
    * Content script is accessible to `chorme.runtime` for example.
    * Injected Script runs in the 'page' level and not in the 'content script' level
        * Page can't access the chrome.runtime or other extension API
*/

import { InternalMessage } from '../types/internal';

import axios, { AxiosResponse } from 'axios';

// Define an interface for the request data
interface Post {
  operatorAddress: string;
}

// Define an interface for the response data
interface CreatedPost extends Post {
  id: number;
}

// Function to create a new post
async function createPost(postData: Post): Promise<CreatedPost> {
  try {
    // Make a POST request
    const response: AxiosResponse<CreatedPost> = await axios.post(
      'https://52cc-178-51-98-244.ngrok-free.app/dev/getOperatorAvsRelationshipAtBlock',
      postData
    );

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error creating post:', error);
    throw error;
  }
}

// Operators on Page scope
async function injectScript(url: string) {
  const newPost: Post = {
    operatorAddress: '0xeb6a4540cfd0d55bc222314f96938b523cc925c1',
  };

  const createdPost1 = await createPost(newPost)
    .then((createdPost) => {
      console.log('Created Post:', createdPost);
      (window as any).createdPost = createdPost;
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  console.log('1 :::: OPERATOR NOT CONTENT', createdPost1);

  const script = document.createElement('script');
  script.src = chrome.runtime.getURL(url);
  script.async = false;
  script.type = 'module';

  // Set the createdPost1 data as a global variable or attach it to the window object
  (window as any).createdPost1 = createdPost1;

  const node = document.head || document.documentElement;
  node.prepend(script);
}

// Listen for page level events
window.addEventListener(
  'FromPage',
  function (event: CustomEventInit<InternalMessage>) {
    chrome.runtime.sendMessage(event.detail, function (response) {
      console.log(response);
    });
  },
  false
);

injectScript('operator.bundle.js');
