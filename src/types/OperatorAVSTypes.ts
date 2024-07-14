export type OperatorAVSSecured = {
  dates: string[];
  liveCount: number[];
};

export type OperatorAVSRelationshipElement = {
  operator: string;
  avs: string;
  status: boolean;
  blockNumber: number;
  blockTimestamp: number;
  transactionHash: string;
};

export type OperatorAVSRelationshipEndpoint = {
  status: 'success' | 'failed';
  results: OperatorAVSRelationshipElement[];
};
