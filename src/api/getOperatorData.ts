interface Dictionary {
  [key: string]: any;
}

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

export default getOperatorData;
