import axios from 'axios';
// import { apiBaseUrl } from '../environments/api';
import operatorRiskData from '../data/operator_risk_data';
import { OperatorRiskDataType } from '../types/test';

interface Dictionary {
  [key: string]: any;
}

//const API_ENDPOINT = 'getOperatorAvsRelationshipAtBlock';
const API_ENDPOINT = 'getSpecificOperatorAvsRegistrationEvents';

const dict: Dictionary = {
  'Pro Delegators': 40,
  OKX: 2,
  Frax: 3,
  Ultra: 123,
};

function getOperatorDate(operatorAddress: string | null | undefined) {
  if (operatorAddress == null || operatorAddress == undefined) {
    return -1;
  }
}

function getTrustLevelByAddress(address: string | null | undefined, dataList: OperatorRiskDataType[]): number | null {
  const foundOperator = dataList.find((operator) => operator.operatorAddress === address);

  return foundOperator ? foundOperator.score : null; // Return score or null if not found
}

function getOperatorData2(operatorName: string | null | undefined) {
  if (operatorName == null || operatorName == undefined) {
    return -1;
  }
  if (operatorName in dict) {
    return dict[operatorName];
  } else {
    return 'No data';
  }
}

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

export default getTrustLevelByAddress;
