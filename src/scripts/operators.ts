import getTrustLevelByAddress from '../api/getOperatorData';
//import getOperatorData from '../api/getOperatorData';
import operatorRiskData from '../data/operator_risk_data';

async function displayOperators() {
  const explanationContainer = document.createElement('div');
  explanationContainer.classList.add('explanation');

  /* var card = document.createElement('div');
  card.className = 'card'; */

  // Add content to the card
  /*   var cardTitle = document.createElement('h3');
  cardTitle.textContent = 'Nefture AVS Curation';
  var cardDescription = document.createElement('p');
  cardDescription.textContent = 'You will find now AVS curation by Nefture';

  card.appendChild(cardTitle);
  card.appendChild(cardDescription); */

  // Select the target span element

  var targetSpan = document.querySelector('.text-DisplayS.font-abcRepro.font-medium.text-blue-800');

  // Check if the target element exists
  /* if (targetSpan) {
    // Insert the card after the target span element
    targetSpan.insertAdjacentElement('afterend', card);
  } else {
    console.error('Target element not found');
  } */

  //var rows = document.querySelectorAll('div[role="row"]');

  /* ------------------------------------- */

  setTimeout(() => {
    // On chope les rows
    const rows = document.querySelectorAll('div[role="row"]');

    function addNewColumn() {
      const rows = document.querySelectorAll('div[role="row"]');

      // Risk score for each Operator
      /* rows.forEach((row, index) => {
        const operatorName = row.firstChild?.textContent;
        const operatorData = getTrustLevelByAddress(operatorName, operatorRiskData);

        if (!row.querySelector('.new-cell')) {
          const newCell = document.createElement('div');
          newCell.className =
            'ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-right-aligned-cell new-cell';
          newCell.style.paddingLeft = '300px'; // Add padding to move text to the right
          //newCell.innerText = `Données ${index + 1}`; // Replace this with your data
          newCell.innerText = `${operatorData}`;
          row.appendChild(newCell);
        }
      }); */
    }

    addNewColumn();

    // Observe changes to the table
  }, 2000); // Attendre 1 seconde

  let newDiv = document.createElement('div');
  newDiv.innerHTML = '<h1>NEFTURE AVS</h1>';
  document.body.appendChild(newDiv);
}

window.addEventListener('load', displayOperators);
