export const avsRiskData = {
  EigenDA: {
    avs_contract_address: '0x870679e138bcdf293b7ff14dd44b70fc97e12fc0',
    'Smart Contracts': {
      Score: 3,
      Level: 'Good',
      Description:
        'The smart contracts reflect good security practices with at least one successful public audit and adherence to excellent code lifecycle and development standards. However, the lack of a bug bounty program and limited audit frequency necessitate a downgrade from an excellent rating.',
      Criteria: {
        Audited: 'yes',
        'Number of audits': 1,
        Links:
          'https://github.com/Layr-Labs/eigenlayer-middleware/blob/dev/audits/M2%20Mainnet%20-%20Dedaub%20-%20Feb%202024.pdf',
        'Bug Bounty': 'no',
        'Developer Activity': 'high',
        'Mainnet Deployment Date': '05/04/2024',
      },
    },
    'Access Control': {
      Score: 3,
      Level: 'Good',
      Description:
        'Admin rights are centralized under a multisig wallet, controlled by three signatories and six signers whose identities remain undisclosed which is good. However, we detected privileged roles which necessitate a downgrade from excellent to good.',
      Criteria: {
        'EOA Owner': 'no',
        'Multisig owner': 'yes',
        'Number of signers': '3/6',
        'Privileged roles': 'yes',
      },
    },
    Team: {
      Score: 4,
      Level: 'Excellent',
      Description:
        "The project is backed by a well-known and highly experienced team with a strong industry track record. Excellent investors and strategic partnerships with major players significantly boost the project's credibility and potential for success.",
      Criteria: {
        'Known/Doxxed': 'yes',
        'Investors /Fundraising': 'yes',
        'Backup team': '',
      },
    },
    'Slashing Conditions': {
      Score: 3,
      Level: 'Good',
      Description:
        'The slashing conditions are clear and well-documented. However, the presence of certain ambiguous elements or intersubjective faults prevents a higher rating.',
      Criteria: {
        Documented: 'yes',
        Implemented: 'no',
      },
    },
    'Economic Model': {
      Score: 2,
      Level: 'Ok',
      Description:
        'The economic model for this AVS is rated ok. It involves a dual staking utility, relying on both ETH restakers and the AVS native token stakers. This dual dependency creates complexities in security and token value dynamics, leading to a higher risk compared to simpler economic models.',
      Criteria: {
        'Model Type': 'Dual Staking',
      },
    },
    'Opt out Process': {
      Score: 2,
      Level: 'Ok',
      Description:
        'The opt-out process is lengthy and comprises several steps, which could incur slashing penalties if done incorrectly, reflecting significant potential inconvenience for restakers wishing to disengage.',
    },
    Decentralization: {
      Score: 1,
      Level: 'Poor',
      Description:
        'We rank this AVS poor in decentralization due to the complete centralization of its system and the lack of a clear plan towards decentralization.',
    },
    Dependencies: {
      Score: 2,
      Level: 'Ok',
      Description:
        'The AVS is ranked ok in dependencies, due to the centralization issues associated with some of its supported restaked assets.',
    },
  },
  eoracle: {
    avs_contract_address: '0x23221c5bb90c7c57ecc1e75513e2e4257673f0ef',
    'Smart Contracts': {
      Score: 3,
      Level: 'Good',
      Description:
        'The smart contracts reflect good security practices with at least one successful public audit and adherence to excellent code lifecycle and development standards. However, the lack of a bug bounty program and limited audit frequency necessitate a downgrade from an excellent rating.',
      Criteria: {
        Audited: 'yes',
        'Number of audits': 1,
        Links:
          "https://github.com/Eoracle/eoracle-middleware/blob/develop/audits/Dedaub%20-%20eoracle%20middleware%20Audit%20Report%20-%20March'24.pdf",
        'Bug Bounty': 'no',
        'Developer Activity': 'low',
        'Mainnet Deployment Date': '11/04/2024',
      },
    },
    'Access Control': {
      Score: 2,
      Level: 'Ok',
      Description:
        'The access control is moderately risky. Although there is a multisig wallet in place, it is controlled by a single signer, thus granting the control in the hands of a single person. There is also a lack of transparency regarding the identity of the signer posing an additional risk.',
      Criteria: {
        'EOA Owner': 'no',
        'Multisig owner': 'yes',
        'Number of signers': '1/1',
        'Privileged roles': 'no',
      },
    },
    Team: {
      Score: 4,
      Level: 'Excellent',
      Description:
        "The project is backed by a well-known and highly experienced team with a strong industry track record. Excellent investors and strategic partnerships with major players significantly boost the project's credibility and potential for success.",
      Criteria: {
        'Known/Doxxed': '',
        'Investors /Fundraising': 'yes',
        'Backup team': 'Lightblocks Labs',
      },
    },
    'Slashing Conditions': {
      Score: 2,
      Level: 'Ok',
      Description:
        'The documentation includes references to slashing conditions, but they are not yet live or fully detailed. There are references to potential slashing mechanisms, but they lack comprehensive explanation or implementation. This partial information can lead to confusion and inadequate risk assessment for operators.',
      Criteria: {
        Documented: 'yes',
        Implemented: 'no',
      },
    },
    'Economic Model': {
      Score: 2,
      Level: 'Ok',
      Description:
        'The economic model for this AVS is rated ok. It involves a dual staking utility, relying on both ETH restakers and the AVS native token stakers. This dual dependency creates complexities in security and token value dynamics, leading to a higher risk compared to simpler economic models.',
      Criteria: {
        'Model Type': 'Dual Staking',
      },
    },
    'Opt out Process': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The opt-out process is nonexistent, lacking any specified procedures or exit conditions, which creates significant uncertainty and risk for operators wishing to withdraw from the validation process.',
    },
    Decentralization: {
      Score: 1,
      Level: 'Poor',
      Description:
        'We rank this AVS poor in decentralization due to the complete centralization of its system and the lack of a clear plan towards decentralization.',
    },
    Dependencies: {
      Score: 2,
      Level: 'Ok',
      Description:
        'The AVS is ranked ok in dependencies, due to the centralization issues associated with some of its supported restaked assets.',
    },
  },
  'Lagrange ZK Prover Network': {
    avs_contract_address: '0x22cac0e6a1465f043428e8aef737b3cb09d0eeda',
    'Smart Contracts': {
      Score: 2,
      Level: 'Ok',
      Description:
        'The smart contracts have undergone minimal security audits or the underlying protocol used has been audited multiple times. The lack of a comprehensive bug bounty program further adds to the uncertainty, making the system moderately vulnerable to potential exploits.',
      Criteria: {
        Audited: 'no',
        'Number of audits': 0,
        Links: '',
        'Bug Bounty': 'no',
        'Developer Activity': 'low',
        'Mainnet Deployment Date': '04/06/2024',
      },
    },
    'Access Control': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The access control is high risk due to centralized control in an EOA managed by unknown individuals. The lack of transparency and inadequate control measures make the system vulnerable to malicious activities and unauthorized access.',
      Criteria: {
        'EOA Owner': 'yes',
        'Multisig owner': 'no',
        'Number of signers': '',
        'Privileged roles': 'unidentified',
      },
    },
    Team: {
      Score: 3,
      Level: 'Good',
      Description:
        "The founding team is experienced and known within the industry, which adds credibility to the project. The presence of reputable investors and ongoing partnerships with key players enhances the project's reliability and potential for success.",
      Criteria: {
        'Known/Doxxed': 'yes',
        'Investors /Fundraising': 'yes',
        'Backup team': '',
      },
    },
    'Slashing Conditions': {
      Score: 2,
      Level: 'Ok',
      Description:
        'The documentation includes references to slashing conditions, but they are not yet live or fully detailed. There are references to potential slashing mechanisms, but they lack comprehensive explanation or implementation. This partial information can lead to confusion and inadequate risk assessment for operators.',
      Criteria: {
        Documented: 'yes',
        Implemented: 'no',
      },
    },
    'Economic Model': {
      Score: 4,
      Level: 'Excellent',
      Description:
        "The economic model for this AVS is rated excellent. It relies on pure wallet fees, with straightforward service fees paid in a neutral denomination (like ETH). This approach minimizes risk by avoiding dependency on the AVS's native token and maintaining a stable and secure economic structure.",
      Criteria: {
        'Model Type': 'Pure Wallet',
      },
    },
    'Opt out Process': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The opt-out process is nonexistent, lacking any specified procedures or exit conditions, which creates significant uncertainty and risk for operators wishing to withdraw from the validation process.',
    },
    Decentralization: {
      Score: 1,
      Level: 'Poor',
      Description:
        'We rank this AVS poor in decentralization due to the complete centralization of its system and the lack of a clear plan towards decentralization.',
    },
    Dependencies: {
      Score: 2,
      Level: 'Ok',
      Description:
        'The AVS is ranked ok in dependencies, due to the centralization issues associated with some of its supported restaked assets.',
    },
  },
  'Lagrange Committees': {
    avs_contract_address: '0x35f4f28a8d3ff20eed10e087e8f96ea2641e6aa2',
    'Smart Contracts': {
      Score: 3,
      Level: 'Good',
      Description:
        'The smart contracts reflect good security practices with at least one successful public audit and adherence to excellent code lifecycle and development standards. However, the lack of a bug bounty program and limited audit frequency necessitate a downgrade from an excellent rating.',
      Criteria: {
        Audited: 'yes',
        'Number of audits': 3,
        Links:
          'https://github.com/Lagrange-Labs/lagrange-contracts/blob/develop/audits/Lagrange_State_Committee_Secure3_Audit_Report-1.pdf, https://github.com/Lagrange-Labs/lagrange-contracts/blob/develop/audits/Lagrange_Update_Secure3_Audit_Report-2.pdf, https://github.com/Lagrange-Labs/lagrange-contracts/blob/develop/audits/Lagrange_Update_Secure3_Audit_Report-3.pdf',
        'Bug Bounty': 'no',
        'Developer Activity': 'low',
        'Mainnet Deployment Date': '10/04/2024',
      },
    },
    'Access Control': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The access control is high risk due to centralized control in an EOA managed by unknown individuals. The lack of transparency and inadequate control measures make the system vulnerable to malicious activities and unauthorized access.',
      Criteria: {
        'EOA Owner': 'yes',
        'Multisig owner': 'no',
        'Number of signers': '',
        'Privileged roles': 'yes',
      },
    },
    Team: {
      Score: 3,
      Level: 'Good',
      Description:
        "The founding team is experienced and known within the industry, which adds credibility to the project. The presence of reputable investors and ongoing partnerships with key players enhances the project's reliability and potential for success.",
      Criteria: {
        'Known/Doxxed': 'yes',
        'Investors /Fundraising': 'yes',
        'Backup team': '',
      },
    },
    'Slashing Conditions': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The absence of specified slashing conditions creates substantial risk and uncertainty for operators. Without defined rules and penalties, operators cannot adequately assess or mitigate the risks of slashing.',
      Criteria: {
        Documented: 'no',
        Implemented: 'no',
      },
    },
    'Economic Model': {
      Score: 4,
      Level: 'Excellent',
      Description:
        "The economic model for this AVS is rated excellent. It relies on pure wallet fees, with straightforward service fees paid in a neutral denomination (like ETH). This approach minimizes risk by avoiding dependency on the AVS's native token and maintaining a stable and secure economic structure.",
      Criteria: {
        'Model Type': 'Pure Wallet',
      },
    },
    'Opt out Process': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The opt-out process is nonexistent, lacking any specified procedures or exit conditions, which creates significant uncertainty and risk for operators wishing to withdraw from the validation process.',
    },
    Decentralization: {
      Score: 1,
      Level: 'Poor',
      Description:
        'We rank this AVS poor in decentralization due to the complete centralization of its system and the lack of a clear plan towards decentralization.',
    },
    Dependencies: {
      Score: 2,
      Level: 'Ok',
      Description:
        'The AVS is ranked ok in dependencies, due to the centralization issues associated with some of its supported restaked assets.',
    },
  },
  'Automata Multi-Prover AVS': {
    avs_contract_address: '0xe5445838c475a2980e6a88054ff1514230b83aeb',
    'Smart Contracts': {
      Score: 3,
      Level: 'Good',
      Description:
        'The smart contracts reflect good security practices with at least one successful public audit and adherence to excellent code lifecycle and development standards. However, the lack of a bug bounty program and limited audit frequency necessitate a downgrade from an excellent rating.',
      Criteria: {
        Audited: 'yes',
        'Number of audits': 1,
        Links:
          'https://github.com/automata-network/multi-prover-avs/blob/main/audits/PeckShield-Audit-Report-Automata-MultipleProverAVS-v1.0.pdf',
        'Bug Bounty': 'no',
        'Developer Activity': 'low',
        'Mainnet Deployment Date': '16/04/2024',
      },
    },
    'Access Control': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The access control is high risk due to centralized control in an EOA managed by unknown individuals. The lack of transparency and inadequate control measures make the system vulnerable to malicious activities and unauthorized access.',
      Criteria: {
        'EOA Owner': 'yes',
        'Multisig owner': 'no',
        'Number of signers': '2/4',
        'Privileged roles': 'yes',
      },
    },
    Team: {
      Score: 4,
      Level: 'Excellent',
      Description:
        "The project is backed by a well-known and highly experienced team with a strong industry track record. Excellent investors and strategic partnerships with major players significantly boost the project's credibility and potential for success.",
      Criteria: {
        'Known/Doxxed': 'yes',
        'Investors /Fundraising': 'yes',
        'Backup team': '',
      },
    },
    'Slashing Conditions': {
      Score: 2,
      Level: 'Ok',
      Description:
        'The documentation includes references to slashing conditions, but they are not yet live or fully detailed. There are references to potential slashing mechanisms, but they lack comprehensive explanation or implementation. This partial information can lead to confusion and inadequate risk assessment for operators.',
      Criteria: {
        Documented: 'yes',
        Implemented: 'no',
      },
    },
    'Economic Model': {
      Score: 2,
      Level: 'Ok',
      Description:
        'The economic model for this AVS is rated ok. It involves a dual staking utility, relying on both ETH restakers and the AVS native token stakers. This dual dependency creates complexities in security and token value dynamics, leading to a higher risk compared to simpler economic models.',
      Criteria: {
        'Model Type': 'Dual Staking',
      },
    },
    'Opt out Process': {
      Score: 3,
      Level: 'Good',
      Description:
        'The opt-out process is manageable with clear documentation and instructions. While there are some steps involved, the process is relatively smooth with minimal risk of penalties or delays.',
    },
    Decentralization: {
      Score: 1,
      Level: 'Poor',
      Description:
        'We rank this AVS poor in decentralization due to the complete centralization of its system and the lack of a clear plan towards decentralization.',
    },
    Dependencies: {
      Score: 2,
      Level: 'Ok',
      Description:
        'The AVS is ranked ok in dependencies, due to the centralization issues associated with some of its supported restaked assets.',
    },
  },
  'Witness Chain': {
    avs_contract_address: '0xd25c2c5802198cb8541987b73a8db4c9bcae5cc7',
    'Smart Contracts': {
      Score: 3,
      Level: 'Good',
      Description:
        'The smart contracts reflect good security practices with at least one successful public audit and adherence to excellent code lifecycle and development standards. However, the lack of a bug bounty program and limited audit frequency necessitate a downgrade from an excellent rating.',
      Criteria: {
        Audited: 'yes',
        'Number of audits': '',
        Links:
          "https://github.com/witnesschain-com/diligencewatchtower-contracts/blob/main/audits/Witness%20Chain%20Report%20-%20Mar'24.pdf",
        'Bug Bounty': 'no',
        'Developer Activity': 'low',
        'Mainnet Deployment Date': '11/04/2024',
      },
    },
    'Access Control': {
      Score: 3,
      Level: 'Good',
      Description:
        'Admin rights are centralized under a multisig wallet, controlled by four signatories whose identities remain undisclosed and the need of 2/4 signers.',
      Criteria: {
        'EOA Owner': 'no',
        'Multisig owner': 'yes',
        'Number of signers': '2/3',
        'Privileged roles': 'no',
      },
    },
    Team: {
      Score: 3,
      Level: 'Good',
      Description:
        "The founding team is experienced and known within the industry, which adds credibility to the project. The presence of reputable investors and ongoing partnerships with key players enhances the project's reliability and potential for success.",
      Criteria: {
        'Known/Doxxed': 'yes',
        'Investors /Fundraising': 'yes',
        'Backup team': '',
      },
    },
    'Slashing Conditions': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The absence of specified slashing conditions creates substantial risk and uncertainty for operators. Without defined rules and penalties, operators cannot adequately assess or mitigate the risks of slashing.',
      Criteria: {
        Documented: 'no',
        Implemented: 'no',
      },
    },
    'Economic Model': {
      Score: 1,
      Level: 'Poor',
      Description:
        "The economic model for this AVS is rated poor due to its high dependency on its native token. This dependence introduces significant risk, as the fee structure and overall profitability are closely tied to the volatile market performance of the AVS's native token.",
      Criteria: {
        'Model Type': 'Pay in the Native Token of the AVS',
      },
    },
    'Opt out Process': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The opt-out process is nonexistent, lacking any specified procedures or exit conditions, which creates significant uncertainty and risk for operators wishing to withdraw from the validation process.',
    },
    Decentralization: {
      Score: 1,
      Level: 'Poor',
      Description:
        'We rank this AVS poor in decentralization due to the complete centralization of its system and the lack of a clear plan towards decentralization.',
    },
    Dependencies: {
      Score: 2,
      Level: 'Ok',
      Description:
        'The AVS is ranked ok in dependencies, due to the centralization issues associated with some of its supported restaked assets.',
    },
  },
  'AltLayer MACH': {
    avs_contract_address: '0x71a77037870169d47aad6c2c9360861a4c0df2bf',

    'Smart Contracts': {
      Score: 3,
      Level: 'Good',
      Description:
        'The smart contracts reflect good security practices with at least one successful public audit and adherence to excellent code lifecycle and development standards. However, the lack of a bug bounty program and limited audit frequency necessitate a downgrade from an excellent rating.',
      Criteria: {
        Audited: 'yes',
        'Number of audits': 2,
        Links:
          'https://github.com/alt-research/mach-avs/blob/m2-dev/audits/PeckShield-Audit-Report-AltLayer-MACH-AVS-v1.0.pdf, https://github.com/alt-research/mach-avs/blob/m2-dev/audits/AltLayer-Mach-AVS-M2-Final-by-n-var.pdf',
        'Bug Bounty': 'no',
        'Developer Activity': 'low',
        'Mainnet Deployment Date': '11/04/2024',
      },
    },
    'Access Control': {
      Score: 3,
      Level: 'Good',
      Description:
        'Admin rights are centralized under a multisig wallet, controlled by three signatories whose identities remain undisclosed.',
      Criteria: {
        'EOA Owner': 'no',
        'Multisig owner': 'yes',
        'Number of signers': '',
        'Privileged roles': 'yes',
      },
    },
    Team: {
      Score: 4,
      Level: 'Excellent',
      Description:
        "The project is backed by a well-known and highly experienced team with a strong industry track record. Excellent investors and strategic partnerships with major players significantly boost the project's credibility and potential for success.",
      Criteria: {
        'Known/Doxxed': 'yes',
        'Investors /Fundraising': 'yes',
        'Backup team': 'Altlayer',
      },
    },
    'Slashing Conditions': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The absence of specified slashing conditions creates substantial risk and uncertainty for operators. Without defined rules and penalties, operators cannot adequately assess or mitigate the risks of slashing.',
      Criteria: {
        Documented: 'no',
        Implemented: 'no',
      },
    },
    'Economic Model': {
      Score: 3,
      Level: 'Good',
      Description: 'TBD',
      Criteria: {
        'Model Type': 'TBD',
      },
    },
    'Opt out Process': {
      Score: 3,
      Level: 'Good',
      Description:
        'The opt-out process is manageable with clear documentation and instructions. While there are some steps involved, the process is relatively smooth with minimal risk of penalties or delays.',
    },
    Decentralization: {
      Score: 1,
      Level: 'Poor',
      Description:
        'We rank this AVS poor in decentralization due to the complete centralization of its system and the lack of a clear plan towards decentralization.',
    },
    Dependencies: {
      Score: 1,
      Level: 'Poor',
      Description:
        'The AVS has a high dependency risk because four other AVS contracts, also relying on Altlayer, are unaudited and share the same contract owner and signer, creating a centralization issue; consequently, a security problem in Altlayer or any of these AVS contracts could compromise the entire system.',
    },
  },
  'Brevis coChain AVS': {
    avs_contract_address: '0x9fc952bdcbb7daca7d420fa55b942405b073a89d',
    'Smart Contracts': {
      Score: 2,
      Level: 'Ok',
      Description:
        'The smart contracts have undergone minimal security audits or the underlying protocol used has been audited multiple times. The lack of a comprehensive bug bounty program further adds to the uncertainty, making the system moderately vulnerable to potential exploits.',
      Criteria: {
        Audited: 'yes',
        'Number of audits': 1,
        Links:
          'https://github.com/brevis-network/brevis-contracts-avs/blob/main/audit/SlowMist%20Audit%20Report%20-%20Brevis%20Contracts%20AVS.pdf',
        'Bug Bounty': 'no',
        'Developer Activity': 'low',
        'Mainnet Deployment Date': '09/04/2024',
      },
    },
    'Access Control': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The access control is high risk due to centralized control in an EOA managed by unknown individuals. The lack of transparency and inadequate control measures make the system vulnerable to malicious activities and unauthorized access.',
      Criteria: {
        'EOA Owner': 'yes',
        'Multisig owner': 'no',
        'Number of signers': '3/4',
        'Privileged roles': 'yes',
      },
    },
    Team: {
      Score: 1,
      Level: 'Poor',
      Description:
        'The team behind the AVS lacks transparency and verifiable public records. The absence of known investors or partnerships further raises concerns about the credibility and reliability of the project.',
      Criteria: {
        'Known/Doxxed': 'no',
        'Investors /Fundraising': 'no',
        'Backup team': '',
      },
    },
    'Slashing Conditions': {
      Score: 2,
      Level: 'Ok',
      Description:
        'The documentation includes references to slashing conditions, but they are not yet live or fully detailed. There are references to potential slashing mechanisms, but they lack comprehensive explanation or implementation. This partial information can lead to confusion and inadequate risk assessment for operators.',
      Criteria: {
        Documented: 'yes',
        Implemented: 'no',
      },
    },
    'Economic Model': {
      Score: 3,
      Level: 'Good',
      Description: 'TBD',
      Criteria: {
        'Model Type': 'TBD',
      },
    },
    'Opt out Process': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The opt-out process is nonexistent, lacking any specified procedures or exit conditions, which creates significant uncertainty and risk for operators wishing to withdraw from the validation process.',
    },
    Decentralization: {
      Score: 1,
      Level: 'Poor',
      Description:
        'We rank this AVS poor in decentralization due to the complete centralization of its system and the lack of a clear plan towards decentralization.',
    },
    Dependencies: {
      Score: 2,
      Level: 'Ok',
      Description:
        'The AVS is ranked ok in dependencies, due to the centralization issues associated with some of its supported restaked assets.',
    },
  },
  'Cyber MACH (Powered by AltLayer)': {
    avs_contract_address: '0x1f2c296448f692af840843d993ffc0546619dcdb',
    'Smart Contracts': {
      Score: 2,
      Level: 'Ok',
      Description:
        'The smart contracts have undergone minimal security audits or the underlying protocol used has been audited multiple times. The lack of a comprehensive bug bounty program further adds to the uncertainty, making the system moderately vulnerable to potential exploits.',
      Criteria: {
        Audited: 'no',
        'Number of audits': 0,
        Links: '',
        'Bug Bounty': 'no',
        'Developer Activity': 'low',
        'Mainnet Deployment Date': '28/05/2024',
      },
    },
    'Access Control': {
      Score: 2,
      Level: 'Ok',
      Description:
        'The access control is moderately risky. Although there is a multisig wallet in place controlled by three signatories whose identities remain undisclosed, the three signatories are the same for four other different AVS managed by AltLayer.',
      Criteria: {
        'EOA Owner': 'no',
        'Multisig owner': 'yes',
        'Number of signers': '2/3',
        'Privileged roles': 'unidentified',
      },
    },
    Team: {
      Score: 2,
      Level: 'Ok',
      Description:
        "The team has some degree of transparency, with members who are doxxed, but there is limited information available about their background. While there are investors or partnerships, they are not prominent or influential, which may affect the project's credibility.",
      Criteria: {
        'Known/Doxxed': 'no',
        'Investors /Fundraising': 'no',
        'Backup team': '',
      },
    },
    'Slashing Conditions': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The absence of specified slashing conditions creates substantial risk and uncertainty for operators. Without defined rules and penalties, operators cannot adequately assess or mitigate the risks of slashing.',
      Criteria: {
        Documented: 'no',
        Implemented: 'no',
      },
    },
    'Economic Model': {
      Score: 2,
      Level: 'Ok',
      Description:
        'The economic model for this AVS is rated ok. It involves a dual staking utility, relying on both ETH restakers and the AVS native token stakers. This dual dependency creates complexities in security and token value dynamics, leading to a higher risk compared to simpler economic models.',
      Criteria: {
        'Model Type': 'Dual Staking',
      },
    },
    'Opt out Process': {
      Score: 3,
      Level: 'Good',
      Description:
        'The opt-out process is manageable with clear documentation and instructions. While there are some steps involved, the process is relatively smooth with minimal risk of penalties or delays.',
    },
    Decentralization: {
      Score: 1,
      Level: 'Poor',
      Description:
        'We rank this AVS poor in decentralization due to the complete centralization of its system and the lack of a clear plan towards decentralization.',
    },
    Dependencies: {
      Score: 1,
      Level: 'Poor',
      Description:
        'The AVS has a high dependency risk because four other AVS contracts, also relying on Altlayer, are unaudited and share the same contract owner and signer, creating a centralization issue; consequently, a security problem in Altlayer or any of these AVS contracts could compromise the entire system.',
    },
  },
  'GM Network MACH (Powered by AltLayer)': {
    avs_contract_address: '0xb3acaf09a1b801e36655b786da4eaa6ae9f5dc37',
    'Smart Contracts': {
      Score: 2,
      Level: 'Ok',
      Description:
        'The smart contracts have undergone minimal security audits or the underlying protocol used has been audited multiple times. The lack of a comprehensive bug bounty program further adds to the uncertainty, making the system moderately vulnerable to potential exploits.',
      Criteria: {
        Audited: 'no',
        'Number of audits': 0,
        Links: '',
        'Bug Bounty': 'no',
        'Developer Activity': 'low',
        'Mainnet Deployment Date': '04/04/2024',
      },
    },
    'Access Control': {
      Score: 2,
      Level: 'Ok',
      Description:
        'The access control is moderately risky. Although there is a multisig wallet in place controlled by three signatories whose identities remain undisclosed, the three signatories are the same for four other different AVS managed by AltLayer.',
      Criteria: {
        'EOA Owner': 'no',
        'Multisig owner': 'yes',
        'Number of signers': '2/3',
        'Privileged roles': 'unidentified',
      },
    },
    Team: {
      Score: 2,
      Level: 'Ok',
      Description:
        "The team has some degree of transparency, with members who are doxxed, but there is limited information available about their background. While there are investors or partnerships, they are not prominent or influential, which may affect the project's credibility.",
      Criteria: {
        'Known/Doxxed': 'no',
        'Investors /Fundraising': 'no',
        'Backup team': '',
      },
    },
    'Slashing Conditions': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The absence of specified slashing conditions creates substantial risk and uncertainty for operators. Without defined rules and penalties, operators cannot adequately assess or mitigate the risks of slashing.',
      Criteria: {
        Documented: 'no',
        Implemented: 'no',
      },
    },
    'Economic Model': {
      Score: 2,
      Level: 'Ok',
      Description:
        'The economic model for this AVS is rated ok. It involves a dual staking utility, relying on both ETH restakers and the AVS native token stakers. This dual dependency creates complexities in security and token value dynamics, leading to a higher risk compared to simpler economic models.',
      Criteria: {
        'Model Type': 'Dual Staking',
      },
    },
    'Opt out Process': {
      Score: 3,
      Level: 'Good',
      Description:
        'The opt-out process is manageable with clear documentation and instructions. While there are some steps involved, the process is relatively smooth with minimal risk of penalties or delays.',
    },
    Decentralization: {
      Score: 1,
      Level: 'Poor',
      Description:
        'We rank this AVS poor in decentralization due to the complete centralization of its system and the lack of a clear plan towards decentralization.',
    },
    Dependencies: {
      Score: 1,
      Level: 'Poor',
      Description:
        'The AVS has a high dependency risk because four other AVS contracts, also relying on Altlayer, are unaudited and share the same contract owner and signer, creating a centralization issue; consequently, a security problem in Altlayer or any of these AVS contracts could compromise the entire system.',
    },
  },
  'Hyperlane AVS': {
    avs_contract_address: '0xe8e59c6c8b56f2c178f63bcfc4ce5e5e2359c8fc',
    'Smart Contracts': {
      Score: 3,
      Level: 'Good',
      Description:
        'The smart contracts reflect good security practices with at least one successful public audit and adherence to excellent code lifecycle and development standards. However, the lack of a bug bounty program and limited audit frequency necessitate a downgrade from an excellent rating.',
      Criteria: {
        Audited: 'no',
        'Number of audits': 0,
        Links: '',
        'Bug Bounty': 'yes',
        'Developer Activity': 'high',
        'Mainnet Deployment Date': '11/06/2024',
      },
    },
    'Access Control': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The access control is high risk due to centralized control in an EOA managed by unknown individuals. The lack of transparency and inadequate control measures make the system vulnerable to malicious activities and unauthorized access.',
      Criteria: {
        'EOA Owner': 'yes',
        'Multisig owner': 'no',
        'Number of signers': '',
        'Privileged roles': 'unidentified',
      },
    },
    Team: {
      Score: 4,
      Level: 'Excellent',
      Description:
        "The project is backed by a well-known and highly experienced team with a strong industry track record. Excellent investors and strategic partnerships with major players significantly boost the project's credibility and potential for success.",
      Criteria: {
        'Known/Doxxed': 'yes',
        'Investors /Fundraising': 'yes',
        'Backup team': '',
      },
    },
    'Slashing Conditions': {
      Score: 2,
      Level: 'Ok',
      Description:
        'The documentation includes references to slashing conditions, but they are not yet live or fully detailed. There are references to potential slashing mechanisms, but they lack comprehensive explanation or implementation. This partial information can lead to confusion and inadequate risk assessment for operators.',
      Criteria: {
        Documented: 'yes',
        Implemented: 'no',
      },
    },
    'Economic Model': {
      Score: 1,
      Level: 'Poor',
      Description:
        "The economic model for this AVS is rated poor due to its high dependency on its native token. This dependence introduces significant risk, as the fee structure and overall profitability are closely tied to the volatile market performance of the AVS's native token.",
      Criteria: {
        'Model Type': 'Pay in the Native Token of the AVS',
      },
    },
    'Opt out Process': {
      Score: 3,
      Level: 'Good',
      Description:
        'The opt-out process is manageable with clear documentation and instructions. While there are some steps involved, the process is relatively smooth with minimal risk of penalties or delays.',
    },
    Decentralization: {
      Score: 1,
      Level: 'Poor',
      Description:
        'We rank this AVS poor in decentralization due to the complete centralization of its system and the lack of a clear plan towards decentralization.',
    },
    Dependencies: {
      Score: 2,
      Level: 'Ok',
      Description:
        'The AVS is ranked ok in dependencies, due to the centralization issues associated with some of its supported restaked assets.',
    },
  },
  'Omni Network': {
    avs_contract_address: '0xed2f4d90b073128ae6769a9a8d51547b1df766c8',
    'Smart Contracts': {
      Score: 3,
      Level: 'Good',
      Description:
        'The smart contracts reflect good security practices with at least one successful public audit and adherence to excellent code lifecycle and development standards. However, the lack of a bug bounty program and limited audit frequency necessitate a downgrade from an excellent rating.',
      Criteria: {
        Audited: 'yes',
        'Number of audits': 2,
        Links: 'https://docs.omni.network/sigma-prime-avs.pdf, https://docs.omni.network/zellic-avs.pdf',
        'Bug Bounty': 'no',
        'Developer Activity': 'low',
        'Mainnet Deployment Date': '12/04/2024',
      },
    },
    'Access Control': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The access control is high risk due to centralized control in an EOA managed by unknown individuals. The lack of transparency and inadequate control measures make the system vulnerable to malicious activities and unauthorized access.',
      Criteria: {
        'EOA Owner': 'no',
        'Multisig owner': 'yes',
        'Number of signers': '',
        'Privileged roles': 'no',
      },
    },
    Team: {
      Score: 4,
      Level: 'Excellent',
      Description:
        "The project is backed by a well-known and highly experienced team with a strong industry track record. Excellent investors and strategic partnerships with major players significantly boost the project's credibility and potential for success.",
      Criteria: {
        'Known/Doxxed': 'yes',
        'Investors /Fundraising': 'yes',
        'Backup team': '',
      },
    },
    'Slashing Conditions': {
      Score: 2,
      Level: 'Ok',
      Description:
        'The documentation includes references to slashing conditions, but they are not yet live or fully detailed. There are references to potential slashing mechanisms, but they lack comprehensive explanation or implementation. This partial information can lead to confusion and inadequate risk assessment for operators.',
      Criteria: {
        Documented: 'no',
        Implemented: 'no',
      },
    },
    'Economic Model': {
      Score: 2,
      Level: 'Ok',
      Description:
        'The economic model for this AVS is rated ok. It involves a dual staking utility, relying on both ETH restakers and the AVS native token stakers. This dual dependency creates complexities in security and token value dynamics, leading to a higher risk compared to simpler economic models.',
      Criteria: {
        'Model Type': 'Dual Staking',
      },
    },
    'Opt out Process': {
      Score: 3,
      Level: 'Good',
      Description:
        'The opt-out process is manageable with clear documentation and instructions. While there are some steps involved, the process is relatively smooth with minimal risk of penalties or delays.',
    },
    Decentralization: {
      Score: 1,
      Level: 'Poor',
      Description:
        'We rank this AVS poor in decentralization due to the complete centralization of its system and the lack of a clear plan towards decentralization.',
    },
    Dependencies: {
      Score: 2,
      Level: 'Ok',
      Description:
        'The AVS is ranked ok in dependencies, due to the centralization issues associated with some of its supported restaked assets.',
    },
  },
  'ARPA Network': {
    avs_contract_address: '0x1de75eaab2df55d467494a172652579e6fa4540e',
    'Smart Contracts': {
      Score: 2,
      Level: 'Ok',
      Description:
        'The smart contracts have undergone minimal security audits or the underlying protocol used has been audited multiple times. The lack of a comprehensive bug bounty program further adds to the uncertainty, making the system moderately vulnerable to potential exploits.',
      Criteria: {
        Audited: 'no',
        'Number of audits': 0,
        Links: '',
        'Bug Bounty': 'no',
        'Developer Activity': 'low',
        'Mainnet Deployment Date': '16/05/2024',
      },
    },
    'Access Control': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The access control is high risk due to centralized control in an EOA managed by unknown individuals. The lack of transparency and inadequate control measures make the system vulnerable to malicious activities and unauthorized access.',
      Criteria: {
        'EOA Owner': 'yes',
        'Multisig owner': 'no',
        'Number of signers': '',
        'Privileged roles': 'unidentified',
      },
    },
    Team: {
      Score: 1,
      Level: 'Poor',
      Description:
        'The team behind the AVS lacks transparency and verifiable public records. The absence of known investors or partnerships further raises concerns about the credibility and reliability of the project.',
      Criteria: {
        'Known/Doxxed': 'no',
        'Investors /Fundraising': 'yes',
        'Backup team': '',
      },
    },
    'Slashing Conditions': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The absence of specified slashing conditions creates substantial risk and uncertainty for operators. Without defined rules and penalties, operators cannot adequately assess or mitigate the risks of slashing.',
      Criteria: {
        Documented: 'no',
        Implemented: 'no',
      },
    },
    'Economic Model': {
      Score: 1,
      Level: 'Poor',
      Description:
        "The economic model for this AVS is rated poor due to its high dependency on its native token. This dependence introduces significant risk, as the fee structure and overall profitability are closely tied to the volatile market performance of the AVS's native token.",
      Criteria: {
        'Model Type': 'Pay in the Native Token of the AVS',
      },
    },
    'Opt out Process': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The opt-out process is nonexistent, lacking any specified procedures or exit conditions, which creates significant uncertainty and risk for operators wishing to withdraw from the validation process.',
    },
    Decentralization: {
      Score: 1,
      Level: 'Poor',
      Description:
        'We rank this AVS poor in decentralization due to the complete centralization of its system and the lack of a clear plan towards decentralization.',
    },
    Dependencies: {
      Score: 2,
      Level: 'Ok',
      Description:
        'The AVS is ranked ok in dependencies, due to the centralization issues associated with some of its supported restaked assets.',
    },
  },
  OpenLayer: {
    avs_contract_address: '0xf7fcff55d5fdaf2c3bbeb140be5e62a2c7d26db3',

    'Smart Contracts': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The smart contracts have undergone minimal security audits or the underlying protocol used has been audited multiple times. The lack of a comprehensive bug bounty program further adds to the uncertainty, making the system moderately vulnerable to potential exploits.',
      Criteria: {
        Audited: 'no',
        'Number of audits': 0,
        Links: '',
        'Bug Bounty': 'no',
        'Developer Activity': 'low',
        'Mainnet Deployment Date': '09/05/2024',
      },
    },
    'Access Control': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The access control is high risk due to centralized control in an EOA managed by unknown individuals. The lack of transparency and inadequate control measures make the system vulnerable to malicious activities and unauthorized access.',
      Criteria: {
        'EOA Owner': 'yes',
        'Multisig owner': 'no',
        'Number of signers': '',
        'Privileged roles': 'unidentified',
      },
    },
    Team: {
      Score: 1,
      Level: 'Poor',
      Description:
        'The team behind the AVS lacks transparency and verifiable public records. The absence of known investors or partnerships further raises concerns about the credibility and reliability of the project.',
      Criteria: {
        'Known/Doxxed': 'no',
        'Investors /Fundraising': 'yes',
        'Backup team': '',
      },
    },
    'Slashing Conditions': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The absence of specified slashing conditions creates substantial risk and uncertainty for operators. Without defined rules and penalties, operators cannot adequately assess or mitigate the risks of slashing.',
      Criteria: {
        Documented: 'yes',
        Implemented: 'no',
      },
    },
    'Economic Model': {
      Score: 1,
      Level: 'Poor',
      Description:
        "The economic model for this AVS is rated poor due to its high dependency on its native token. This dependence introduces significant risk, as the fee structure and overall profitability are closely tied to the volatile market performance of the AVS's native token.",
      Criteria: {
        'Model Type': 'Pay in the Native Token of the AVS',
      },
    },
    'Opt out Process': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The opt-out process is nonexistent, lacking any specified procedures or exit conditions, which creates significant uncertainty and risk for operators wishing to withdraw from the validation process.',
    },
    Decentralization: {
      Score: 1,
      Level: 'Poor',
      Description:
        'We rank this AVS poor in decentralization due to the complete centralization of its system and the lack of a clear plan towards decentralization.',
    },
    Dependencies: {
      Score: 2,
      Level: 'Ok',
      Description:
        'The AVS is ranked ok in dependencies, due to the centralization issues associated with some of its supported restaked assets.',
    },
  },
  'Xterio Mach (Powered by AltLayer)': {
    avs_contract_address: '0x6026b61bdd2252160691cb3f6005b6b72e0ec044',
    'Smart Contracts': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The smart contracts have undergone minimal security audits or the underlying protocol used has been audited multiple times. The lack of a comprehensive bug bounty program further adds to the uncertainty, making the system moderately vulnerable to potential exploits.',
      Criteria: {
        Audited: 'no',
        'Number of audits': 0,
        Links: '',
        'Bug Bounty': 'no',
        'Developer Activity': 'low',
        'Mainnet Deployment Date': '11/04/2024',
      },
    },
    'Access Control': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The access control is high risk due to centralized control in an EOA managed by unknown individuals. The lack of transparency and inadequate control measures make the system vulnerable to malicious activities and unauthorized access.',
      Criteria: {
        'EOA Owner': 'yes',
        'Multisig owner': 'no',
        'Number of signers': '',
        'Privileged roles': 'unidentified',
      },
    },
    Team: {
      Score: 3,
      Level: 'Good',
      Description:
        "The founding team is experienced and known within the industry, which adds credibility to the project. The presence of reputable investors and ongoing partnerships with key players enhances the project's reliability and potential for success.",
      Criteria: {
        'Known/Doxxed': 'yes',
        'Investors /Fundraising': 'yes',
        'Backup team': 'Altlayer',
      },
    },
    'Slashing Conditions': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The absence of specified slashing conditions creates substantial risk and uncertainty for operators. Without defined rules and penalties, operators cannot adequately assess or mitigate the risks of slashing.',
      Criteria: {
        Documented: 'no',
        Implemented: 'no',
      },
    },
    'Economic Model': {
      Score: 3,
      Level: 'Good',
      Description: 'TBD',
      Criteria: {
        'Model Type': 'TBD',
      },
    },
    'Opt out Process': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The opt-out process is nonexistent, lacking any specified procedures or exit conditions, which creates significant uncertainty and risk for operators wishing to withdraw from the validation process.',
    },
    Decentralization: {
      Score: 1,
      Level: 'Poor',
      Description:
        'We rank this AVS poor in decentralization due to the complete centralization of its system and the lack of a clear plan towards decentralization.',
    },
    Dependencies: {
      Score: 1,
      Level: 'Poor',
      Description:
        'The AVS has a high dependency risk because four other AVS contracts, also relying on Altlayer, are unaudited and share the same contract owner and signer, creating a centralization issue; consequently, a security problem in Altlayer or any of these AVS contracts could compromise the entire system.',
    },
  },
  'DODOchain MACH (Powered by AltLayer)': {
    avs_contract_address: '0xd50e0931703302b080880c45148f5d83ea66ae2a',
    'Smart Contracts': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The smart contracts have undergone minimal security audits or the underlying protocol used has been audited multiple times. The lack of a comprehensive bug bounty program further adds to the uncertainty, making the system moderately vulnerable to potential exploits.',
      Criteria: {
        Audited: 'no',
        'Number of audits': 0,
        Links: '',
        'Bug Bounty': 'no',
        'Developer Activity': 'low',
        'Mainnet Deployment Date': '04/04/2024',
      },
    },
    'Access Control': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The access control is high risk due to centralized control in an EOA managed by unknown individuals. The lack of transparency and inadequate control measures make the system vulnerable to malicious activities and unauthorized access.',
      Criteria: {
        'EOA Owner': 'no',
        'Multisig owner': 'yes',
        'Number of signers': '2/3',
        'Privileged roles': 'unidentified',
      },
    },
    Team: {
      Score: 2,
      Level: 'Ok',
      Description:
        "The team has some degree of transparency, with members who are doxxed, but there is limited information available about their background. While there are investors or partnerships, they are not prominent or influential, which may affect the project's credibility.",
      Criteria: {
        'Known/Doxxed': 'no',
        'Investors /Fundraising': 'yes',
        'Backup team': '',
      },
    },
    'Slashing Conditions': {
      Score: 1,
      Level: 'Poor',
      Description:
        'The absence of specified slashing conditions creates substantial risk and uncertainty for operators. Without defined rules and penalties, operators cannot adequately assess or mitigate the risks of slashing.',
      Criteria: {
        Documented: 'no',
        Implemented: 'no',
      },
    },
    'Economic Model': {
      Score: 2,
      Level: 'Ok',
      Description:
        'The economic model for this AVS is rated ok. It involves a dual staking utility, relying on both ETH restakers and the AVS native token stakers. This dual dependency creates complexities in security and token value dynamics, leading to a higher risk compared to simpler economic models.',
      Criteria: {
        'Model Type': 'Dual Staking',
      },
    },
    'Opt out Process': {
      Score: 3,
      Level: 'Good',
      Description:
        'The opt-out process is manageable with clear documentation and instructions. While there are some steps involved, the process is relatively smooth with minimal risk of penalties or delays.',
    },
    Decentralization: {
      Score: 1,
      Level: 'Poor',
      Description:
        'We rank this AVS poor in decentralization due to the complete centralization of its system and the lack of a clear plan towards decentralization.',
    },
    Dependencies: {
      Score: 1,
      Level: 'Poor',
      Description:
        'The AVS has a high dependency risk because four other AVS contracts, also relying on Altlayer, are unaudited and share the same contract owner and signer, creating a centralization issue; consequently, a security problem in Altlayer or any of these AVS contracts could compromise the entire system.',
    },
  },
};
