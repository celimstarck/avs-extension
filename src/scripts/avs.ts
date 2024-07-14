import Chart from 'chart.js/auto';

import axios, { AxiosResponse } from 'axios';

import { avsRiskData } from '../data/avs_risk_data';
import extractAddressFromURL from '../utils/extractAddressFromURL';

type getAVSScoreListType = {
  categories: string[];
  scores: number[];
};

enum Categories {
  SMART_CONTRACTS = 'Smart Contracts',
  ACCESS_CONTROL = 'Access Control',
  ECONOMIC_MODEL = 'Economic Model',
  SLASHING_CONDITIONS = 'Slashing Conditions',
  TEAM = 'Team',
  OPT_OUT_PROCESS = 'Opt Out Process',
  DEPENDENCIES = 'Dependencies',
  DECENTRALIZATION = 'Decentralization',
}

function getAVSNameByContractAddress(address: string): string {
  for (const [name, data] of Object.entries(avsRiskData)) {
    if (data.avs_contract_address.toLowerCase() === address.toLowerCase()) {
      return name;
    }
  }
  return ''; // Return null if not found
}

function getAVSScoreList(avsName: string, avsRiskData: any): getAVSScoreListType {
  const dict_ = avsRiskData[avsName];
  const categories: string[] = [];
  const scores: number[] = [];

  Object.entries(dict_).forEach(([key, value]: any) => {
    categories.push(key);

    scores.push(value.Score);
  });
  const result: getAVSScoreListType = {
    categories: categories,
    scores: scores,
  };
  return result;
}

function getData(avsName: string, avsRiskData: any) {
  const dict_ = avsRiskData[avsName];
  return dict_;
}

function sendDataToContentScript(data: any) {
  window.postMessage({ type: 'SEND_DATA', data: data }, '*');
}

const DescriptionCategories = (address: string, name: string, riskData: any) => {
  return address;
};

// Define an interface for the request data
async function displayChart() {
  const currentUrl = window.location.href;
  const avsAddress = extractAddressFromURL(currentUrl);
  const avsName = getAVSNameByContractAddress(avsAddress);
  const result = getAVSScoreList(avsName, avsRiskData);

  const chartLabels = result.categories.slice(1);
  const chartData = result.scores.slice(1);

  const targetElementName = document.querySelector('.text-DisplayM.font-abcRepro.font-medium.truncate');

  const dataAVS = getData(avsName, avsRiskData);

  const frontendData = {
    operatorAddress: '0xa42cd0029f681b08b61f535e846f2a36f468c1c2',
  };
  sendDataToContentScript(frontendData);
  window.addEventListener('createdPostReady', (event) => {
    //const createdPost1 = event.detail;

    const targetElementRadar = document.querySelector('.flex.justify-between.rounded-lg.bg-white.p-4');

    if (targetElementRadar) {
      // Create a container for the card
      const cardContainer = document.createElement('div');
      //cardContainer.style.border = '1px solid #e0e0e0';
      cardContainer.style.borderRadius = '8px';
      cardContainer.style.padding = '20px';
      cardContainer.style.backgroundColor = '#ffffff';
      cardContainer.style.display = 'flex';
      cardContainer.style.flexDirection = 'row';

      cardContainer.style.gap = '20px'; // Add some gap between columns
      cardContainer.style.marginTop = '20px'; // Add some margin for spacing

      // Create the left column for the radar chart
      const leftColumn = document.createElement('div');
      leftColumn.style.flex = '1'; // Flex to ensure even distribution
      leftColumn.style.display = 'flex';
      leftColumn.style.flexDirection = 'column';

      // Add title for the radar chart
      const radarTitle = document.createElement('h3');
      radarTitle.innerText = 'AVS Risk Chart';
      leftColumn.appendChild(radarTitle);

      // Create a canvas element for the radar chart
      const canvasRadar = document.createElement('canvas');
      canvasRadar.id = 'radarChart';
      canvasRadar.width = 400;
      canvasRadar.height = 400;

      // Append the canvas to the left column
      leftColumn.appendChild(canvasRadar);

      // Create the right column for the card
      const rightColumn = document.createElement('div');
      rightColumn.style.flex = '1'; // Flex to ensure even distribution
      //rightColumn.style.textAlign = 'center'; // Center the text

      // Add content to the card
      rightColumn.innerHTML = `
        <strong>Smart Contract Risk</strong>
        <p style="font-size: 12px;">${dataAVS[Categories.SMART_CONTRACTS].Description}</p>
        <p style="font-size: 12px;">Audited: ${dataAVS[Categories.SMART_CONTRACTS].Criteria.Audited}</p>
        <p style="font-size: 12px;">Bug Bounty: ${dataAVS[Categories.SMART_CONTRACTS].Criteria['Bug Bounty']}</p>
        <p style="font-size: 12px;">Developer Activity: ${
          dataAVS[Categories.SMART_CONTRACTS].Criteria['Developer Activity']
        }</p>
        <p style="font-size: 12px;">Mainnet Development Date: ${
          dataAVS[Categories.SMART_CONTRACTS].Criteria['Mainnet Deployment Date']
        }</p>  
        
        <strong>Access Control Risk</strong>
        <p style="font-size: 12px;">${dataAVS[Categories.ACCESS_CONTROL].Description}</p>
        <p style="font-size: 12px;">Privileged roles: ${
          dataAVS[Categories.ACCESS_CONTROL].Criteria['Privileged roles']
        }</p>
        <p style="font-size: 12px;">EOA Owner: ${dataAVS[Categories.ACCESS_CONTROL].Criteria['EOA Owner']}</p>
        <p style="font-size: 12px;">Number of signers: ${
          dataAVS[Categories.ACCESS_CONTROL].Criteria['Number of signers']
        }</p>
         <p style="font-size: 12px;">Multisig Owner: ${
           dataAVS[Categories.ACCESS_CONTROL].Criteria['Multisig owner']
         }</p>
                 <strong>Slashing Conditions</strong>
        <p style="font-size: 12px;">${dataAVS[Categories.SLASHING_CONDITIONS].Description}</p>
        <p style="font-size: 12px;">Documented: ${dataAVS[Categories.SLASHING_CONDITIONS].Criteria.Documented}</p>
        <p style="font-size: 12px;">Implemented: ${dataAVS[Categories.SLASHING_CONDITIONS].Criteria.Implemented}</p>
    
       
      `;
      //rightColumn.innerHTML = 'aa';

      // Create cards for each category
      // Function to create cards

      // Example usage

      // Append both columns to the card container
      cardContainer.appendChild(leftColumn);
      cardContainer.appendChild(rightColumn);

      // Insert the card container below the target element
      targetElementRadar.insertAdjacentElement('afterend', cardContainer);

      // Get the canvas context
      const ctxRadar = canvasRadar.getContext('2d');
      if (ctxRadar) {
        // Create the radar chart
        new Chart(ctxRadar, {
          type: 'radar',
          data: {
            labels: chartLabels,
            datasets: [
              {
                label: 'Risk Score',
                data: chartData,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true,
              },
              title: {
                display: false,
              },
            },
            scales: {
              r: {
                beginAtZero: true,
              },
            },
          },
        });
      } else {
        console.error('Failed to get radar chart canvas context');
      }
    } else {
      console.error('Target element for radar chart not found');
    }
  });
}

window.addEventListener('load', async function () {
  console.log('All resources finished loading!');
  displayChart();
});
