export type OperatorAVSSecured = {
  blockTimeStamps: string[];
  liveCount: number[];
};

export type OperatorAVSRelationshipElement = {
  operator: string;
  avs: string;
  status: boolean;
  blockNumber: number;
  blockTimeStamp: number;
  transactionHash: string;
};

export type OperatorAVSRelationshipEndpoint = {
  status: 'success' | 'failed';
  results: OperatorAVSRelationshipElement[];
};
