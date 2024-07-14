import { OperatorAVSRelationshipElement, OperatorAVSRelationshipEndpoint } from '../types/OperatorAVSTypes';
import { OperatorAVSSecured } from '../types/OperatorAVSTypes';

function getListFromAVSOperatorData(results: OperatorAVSRelationshipElement[]): OperatorAVSSecured {
  // Trier les résultats par blockTimeStamp
  const sortedResults = results.sort((a, b) => a.blockTimestamp - b.blockTimestamp);

  const blockTimestamps: string[] = [];
  const liveCount: number[] = [];

  let cumulativeStatus = 0;

  // Itérer sur les résultats triés
  for (const result of sortedResults) {
    blockTimestamps.push(result.blockTimestamp.toString());

    // Cumuler le statut
    cumulativeStatus += result.status ? 1 : -1;
    liveCount.push(cumulativeStatus);
  }

  return { blockTimestamps, liveCount };
}

export default getListFromAVSOperatorData;
