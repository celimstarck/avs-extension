import Chart from 'chart.js/auto';

import axios, { AxiosResponse } from 'axios';

function sendDataToContentScript(data: any) {
  window.postMessage({ type: 'SEND_DATA', data: data }, '*');
}

// Define an interface for the request data
async function displayChart() {
  const frontendData = {
    operatorAddress: '0xa42cd0029f681b08b61f535e846f2a36f468c1c2',
  };
  sendDataToContentScript(frontendData);
  window.addEventListener('createdPostReady', (event) => {
    //const createdPost1 = event.detail;
    console.log('Accessing Created Post in operator.ts:', event);

    const targetElementRadar = document.querySelector('.flex.justify-between.rounded-lg.bg-white.p-4');

    console.log('targetElementRadar:', targetElementRadar);

    if (targetElementRadar) {
      // Create a container for the card
      const cardContainer = document.createElement('div');
      //cardContainer.style.border = '1px solid #e0e0e0';
      cardContainer.style.borderRadius = '8px';
      cardContainer.style.padding = '20px';
      cardContainer.style.backgroundColor = '#ffffff';
      cardContainer.style.display = 'flex';
      cardContainer.style.flexDirection = 'row';
      //cardContainer.style.justifyContent = 'center'; // Center the content horizontally
      //cardContainer.style.alignItems = 'center'; // Center the content vertically
      cardContainer.style.gap = '20px'; // Add some gap between columns
      cardContainer.style.marginTop = '20px'; // Add some margin for spacing

      // Create the left column for the radar chart
      const leftColumn = document.createElement('div');
      leftColumn.style.flex = '1'; // Flex to ensure even distribution
      leftColumn.style.display = 'flex';
      leftColumn.style.flexDirection = 'column';
      //leftColumn.style.alignItems = 'center';
      //leftColumn.style.textAlign = 'center'; // Center the text

      // Add title for the radar chart
      const radarTitle = document.createElement('h3');
      radarTitle.innerText = 'Radar Chart';
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
        <h3>Radar Chart Parameters</h3>
        <br/>
        <p><strong>Red:</strong> Explanation for Red parameter.</p>
        <br/>
        <p><strong>Blue:</strong> Explanation for Blue parameter.</p>
        <br/>
        <p><strong>Yellow:</strong> Explanation for Yellow parameter.</p>
        <br/>
        <p><strong>Green:</strong> Explanation for Green parameter.</p>
        <br/>
        <p><strong>Purple:</strong> Explanation for Purple parameter.</p>
        <br/>
        <p><strong>Orange:</strong> Explanation for Orange parameter.</p>
        <br/>
      `;

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
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
              {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
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
