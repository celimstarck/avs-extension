import Chart from 'chart.js/auto';
import { getOperatorAVSSecured } from '../api/getOperatorData';
import getListFromAVSOperatorData from '../helpers/getLists';

import axios, { AxiosResponse } from 'axios';

// Define an interface for the request data
interface Post {
  operatorAddress: string;
}

// Define an interface for the response data
interface CreatedPost extends Post {
  id: number;
}

// Function to create a new post
async function createPost(postData: Post): Promise<CreatedPost> {
  try {
    // Make a POST request
    const response: AxiosResponse<CreatedPost> = await axios.post(
      'https://52cc-178-51-98-244.ngrok-free.app/dev/getOperatorAvsRelationshipAtBlock',
      postData
    );

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error creating post:', error);
    throw error;
  }
}

async function displayChart() {
  // Wait for the DOM to be fully loaded

  console.log('hello coucou displayChart');
  const newPost: Post = {
    operatorAddress: '0xeb6a4540cfd0d55bc222314f96938b523cc925c1',
  };

  const createdPost1 = createPost(newPost)
    .then((createdPost) => {
      console.log('Created Post:', createdPost);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  console.log('createdPost1 :::: OPERATOR NOT CONTENT', createdPost1);
  /* const test = await getOperatorAVSSecured('0x4bd479a34450d0cb1f5ef16a877bee47e1e4cdb9');

  console.log('getOperatorAVSSecured :::: ', test);
  if (test) {
    const test2 = getListFromAVSOperatorData(test);
    console.log('getListFromAVSOperatorData : ', test2);
  } */

  // La j'ai toute la donnée
  // Puis maintenant je créé les listes

  setTimeout(() => {
    // Radar Chart
    const targetElementRadar = document.querySelector(
      '.flex.cursor-pointer.items-center.justify-between.rounded-lg.bg-black-800\\/5.px-4.py-3.hover\\:bg-black-800\\/10.hover\\:text-blue-800'
    );

    console.log('targetElementRadar:', targetElementRadar);

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

    console.log('targetElementLine:', targetElementLine);

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

        // Dans le front, il nous faut:
        // Labels: liste de tous les TimeStampBlock
        // datasets" data: liste de tous les count : 1, 2, 1 ...

        new Chart(ctxLine, {
          type: 'line',
          data: {
            labels: ['January', 'February', 'March'],
            datasets: [
              {
                label: 'Dataset 1',
                data: [1, 2, 1],
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
  }, 2000);
}

console.log('@@ ext is Loading!!');

/* window.addEventListener('load', async function () {
  console.log('All resources finished loading!');

  // Logic for when the full page is ready
  console.log('coucou');
  displayChart();
}); */

window.addEventListener('load', displayChart);
