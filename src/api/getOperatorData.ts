import axios from 'axios';
//import { apiBaseUrl } from '../environments/api';

interface Dictionary {
  [key: string]: any;
}

const API_ENDPOINT = 'getOperatorAvsRelationshipAtBlock';

const dict: Dictionary = {
  'Pro Delegators': 40,
  OKX: 2,
  Frax: 3,
  Ultra: 123,
};

function getOperatorData(operatorName: string | null | undefined) {
  if (operatorName == null || operatorName == undefined) {
    return -1;
  }
  if (operatorName in dict) {
    return dict[operatorName];
  } else {
    return 'No data';
  }
}
type OperatorAVSSecured = {
  blockTimeStamps: string[];
  liveCount: number[];
};

type OperatorAVSRelationshipElement = {
  operator: string;
  avs: string;
  status: boolean;
  blockNumber: number;
  blockTimeStamp: number;
  transactionHash: string;
};

type OperatorAVSRelationshipEndpoint = {
  status: 'success' | 'failed';
  results: OperatorAVSRelationshipElement[];
};

/* export async function getOperatorAVSSecured(operatorAddress: string) {
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
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log('response:', response);
      switch (response.status) {
        case 200:
          return response.json() as Promise<OperatorAVSRelationshipEndpoint>;
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
  } catch {
    return null;
  }
} */
export async function getOperatorAVSSecured(operatorAddress: string) {
  // Dans le front, il nous faut:
  // Labels: liste de tous les TimeStampBlock
  // datasets" data: liste de tous les count : 1, 2, 1 ...

  let responseData = null;

  console.log('');
  //const apiUrl = process.env['BASE_URL_API_ENDPOINT'] + API_ENDPOINT;
  const apiUrl = 'https://api.eigenexplorer.com/version';

  console.log('api URL ', apiUrl);

  try {
    const data = {
      operatorAddress: operatorAddress,
    };

    console.log('data : ', data);

    responseData = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: '*/*',
      },
    }).then((response) => {
      console.log('response:', response);
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
  } catch {
    return null;
  }
}
export default getOperatorData;
