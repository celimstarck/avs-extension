// Attach on Page scope
import { InternalMessage } from '../types/internal';
import { OperatorAVSRelationshipEndpoint } from '../types/OperatorAVSTypes';

const API_ENDPOINT = 'getOperatorAvsRelationshipAtBlock';

export async function getOperatorAVSSecured(operatorAddress: string) {
  // Dans le front, il nous faut:
  // Labels: liste de tous les TimeStampBlock
  // datasets" data: liste de tous les count : 1, 2, 1 ...

  let responseData = null;
  const apiUrl = process.env['BASE_URL_API_ENDPOINT'] + API_ENDPOINT;

  console.log('api URL ', apiUrl);

  try {
    const data = {
      operatorAddress: operatorAddress,
    };

    console.log('data : ', data);

    responseData = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log('response:', response);
      console.log('response.json():', response.json());
      console.log('response status:', response.status);
      switch (response.status) {
        case 200:
          return response.json();
        case 400:
          console.error('400');
          break;
        case 404:
          console.error('404');
          break;
        case 500:
          console.error('500');
          break;
        default:
          console.error('unknown');
          break;
      }
      return null;
    });
  } catch (err) {
    console.log('err: ', err);
    return null;
  }
}

// Import the axios library
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

// Call the function and log the response
const newPost: Post = {
  operatorAddress: '0xeb6a4540cfd0d55bc222314f96938b523cc925c1',
};
async function injectScript(url: string) {
  console.log('INJECT SCCRIPT OPERATOR');
  const test = await getOperatorAVSSecured('0x4bd479a34450d0cb1f5ef16a877bee47e1e4cdb9');
  const test2 = await getOperatorAVSSecured('0x4bd479a34450d0cb1f5ef16a877bee47e1e4cdb9');
  console.log('test', test);
  console.log('test2', test2);
  const createdPost1 = await createPost(newPost)
    .then((createdPost) => {
      console.log('Created Post:', createdPost);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  console.log('createdPost1 ::::', createdPost1);

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
