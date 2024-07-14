import { OperatorAVSRelationshipElement, OperatorAVSRelationshipEndpoint } from '../types/OperatorAVSTypes';
import { OperatorAVSSecured } from '../types/OperatorAVSTypes';
import formatTimestampToMonthYear from '../utils/formatTimestampToMonthYear';

function getListFromAVSOperatorData(results: OperatorAVSRelationshipElement[]): OperatorAVSSecured {
  // Trier les résultats par blockTimeStamp
  const sortedResults = results.sort((a, b) => a.blockTimestamp - b.blockTimestamp);

  const dates: string[] = [];
  const liveCount: number[] = [];

  let cumulativeStatus = 0;

  // Itérer sur les résultats triés
  for (const result of sortedResults) {
    const date = formatTimestampToMonthYear(result.blockTimestamp);
    dates.push(date);

    // Cumuler le statut
    cumulativeStatus += result.status ? 1 : -1;
    liveCount.push(cumulativeStatus);
  }

  return { dates, liveCount };
}

export default getListFromAVSOperatorData;
