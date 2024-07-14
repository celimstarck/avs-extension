import Chart from 'chart.js/auto';
import extractAddressFromURL from '../utils/extractAddressFromURL';

function sendDataToContentScript(data: any) {
  window.postMessage({ type: 'SEND_DATA', data: data }, '*');
}

async function displayChart() {
  // Wait for the DOM to be fully loaded

  const targetOperatorAddress = document.querySelector('.text-TextS.font-abcRepro.font-normal');
  const currentUrl = window.location.href;
  const operatorAddress = extractAddressFromURL(currentUrl);
  sendDataToContentScript(operatorAddress);

  window.addEventListener('OperatorRequest', (event: any) => {
    // Radar Chart

    const chartLabels = event.detail.dates;
    const chartData = event.detail.liveCount;

    const targetElementRadar = document.querySelector(
      '.flex.cursor-pointer.items-center.justify-between.rounded-lg.bg-black-800\\/5.px-4.py-3.hover\\:bg-black-800\\/10.hover\\:text-blue-800'
    );

    if (targetElementRadar) {
      // Create a div for the chart container
      const chartContainerRadar = document.createElement('div');
      chartContainerRadar.style.marginTop = '20px'; // Add some margin for spacing

      // Create a canvas element for the chart
      const canvasRadar = document.createElement('canvas');
      canvasRadar.id = 'radarChart';
      canvasRadar.width = 400;
      canvasRadar.height = 400;

      // Insert the chart container with the canvas below the target element
      chartContainerRadar.appendChild(canvasRadar);
      targetElementRadar.insertAdjacentElement('afterend', chartContainerRadar);

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

    // Multiple Line Chart
    const targetElementLine = document.querySelector('.flex.justify-between.rounded-lg.bg-white.p-4');

    if (targetElementLine) {
      // Create a div for the chart container
      const chartContainerLine = document.createElement('div');
      chartContainerLine.style.marginTop = '20px'; // Add some margin for spacing

      // Create a canvas element for the chart
      const canvasLine = document.createElement('canvas');
      canvasLine.id = 'lineChart';
      canvasLine.width = 800;
      canvasLine.height = 400;

      // Insert the chart container with the canvas below the target element
      chartContainerLine.appendChild(canvasLine);
      targetElementLine.insertAdjacentElement('afterend', chartContainerLine);

      // Get the canvas context
      const ctxLine = canvasLine.getContext('2d');
      if (ctxLine) {
        // Create the line chart
        new Chart(ctxLine, {
          type: 'line',
          data: {
            labels: chartLabels,
            datasets: [
              {
                label: 'Number of secured AVS',
                data: chartData,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
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
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      } else {
        console.error('Failed to get line chart canvas context');
      }
    } else {
      console.error('Target element for line chart not found');
    }
  }); // end listner
}

console.log('@@ ext is Loading!!');

window.addEventListener('load', async function () {
  console.log('All resources finished loading!');

  // Logic for when the full page is ready
  displayChart();
});
