import { OperatorAVSRelationshipEndpoint } from '../types/OperatorAVSTypes';
import { OperatorAVSSecured } from '../types/OperatorAVSTypes';

function getListFromAVSOperatorData(endpoint: OperatorAVSRelationshipEndpoint): OperatorAVSSecured {
  if (endpoint.status !== 'success') {
    throw new Error('Failed to fetch data');
  }

  // Sort results by blockTimestamp
  const sortedResults = endpoint.results.sort((a, b) => a.blockTimeStamp - b.blockTimeStamp);

  const blockTimeStamps: string[] = [];
  const liveCount: number[] = [];

  let cumulativeStatus = 0;

  for (const result of sortedResults) {
    blockTimeStamps.push(result.blockTimeStamp.toString());
    cumulativeStatus += result.status ? 1 : -1;
    liveCount.push(cumulativeStatus);
  }

  return { blockTimeStamps, liveCount };
}

export default getListFromAVSOperatorData;
