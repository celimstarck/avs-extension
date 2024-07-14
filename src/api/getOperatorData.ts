import axios from 'axios';
// import { apiBaseUrl } from '../environments/api';

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
  blockTimestamps: string[];
  liveCount: number[];
};

type OperatorAVSRelationshipElement = {
  operator: string;
  avs: string;
  status: boolean;
  blockNumber: number;
  blockTimestamp: number;
  transactionHash: string;
};

type OperatorAVSRelationshipEndpoint = {
  status: 'success' | 'failed';
  results: OperatorAVSRelationshipElement[];
};

type getOperatorAVSSecuredType = {
  operatorAddress: string;
};

export async function getOperatorAVSSecured(operatorAddress: string) {
  const apiUrl = process.env['BASE_URL_API_ENDPOINT'] + API_ENDPOINT;

  try {
    const data = {
      operatorAddress: operatorAddress,
    };

    console.log('Data:', data);

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(data),
    });

    switch (response.status) {
      case 200:
        const jsonResponse = (await response.json()) as OperatorAVSRelationshipEndpoint;
        if (jsonResponse.status === 'success') {
          return jsonResponse.results;
          /*const blockTimestamps = jsonResponse.results.map((result) => {
            console.log('result blockTimestamps:', result);
            const test = result.blockTimestamp;
            console.log('result blocksitimetamp, te', test);
            const testDate = new Date(test);
            console.log('testDate:. ', testDate);
            return new Date(result.blockTimestamp * 1000).toISOString();
          });
          const liveCount = jsonResponse.results.map((result) => result.blockNumber); // Adjust according to actual required data
          return { blockTimestamps, liveCount }; */
        }
        break;
      case 400:
        console.error('400: Bad Request');
        break;
      case 404:
        console.error('404: Not Found');
        break;
      case 500:
        console.error('500: Internal Server Error');
        break;
      default:
        console.error('Unknown Error:', response.status);
        break;
    }
  } catch (error) {
    console.error('Fetch Error:', error);
  }
}

export default getOperatorData;
