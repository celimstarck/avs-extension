import getOperatorData from '../api/getOperatorData';

async function attach() {
  console.log('in attach');

  console.log('coucou1');
  console.log(document);

  const loadingBox = document.createElement('div');
  loadingBox.classList.add('test');
  loadingBox.classList.add('loading-animation');

  const revelioBox = document.createElement('div');
  revelioBox.id = 'revelio-container';
  revelioBox.classList.add('test');

  /* const logo = document.createElement('img');

  logo.src = 'https://i.ibb.co/FYwGpKX/Icon-Showcase.png';

  revelioBox.appendChild(logo);
 */
  const header = document.createElement('h2');
  header.textContent = 'Transaction Explanation';

  revelioBox.appendChild(header);

  const explanationContainer = document.createElement('div');
  explanationContainer.classList.add('explanation');

  console.log('test');

  const test = document.querySelector('div[data-cypress="restakedBalance"]');
  console.log('test;', test);

  const test2 = document.querySelector('ag-center-cols-container');
  console.log('test22222;', test2);

  /* const container = document.querySelector(explorerSelector[explorer]); */

  var card = document.createElement('div');
  card.className = 'card';

  // Add content to the card
  var cardTitle = document.createElement('h3');
  cardTitle.textContent = 'Nefture AVS Curation';
  var cardDescription = document.createElement('p');
  cardDescription.textContent = 'You will find now AVS curation by Nefture';

  card.appendChild(cardTitle);
  card.appendChild(cardDescription);

  // Select the target span element

  var targetSpan = document.querySelector('.text-DisplayS.font-abcRepro.font-medium.text-blue-800');

  // Check if the target element exists
  if (targetSpan) {
    // Insert the card after the target span element
    targetSpan.insertAdjacentElement('afterend', card);
  } else {
    console.error('Target element not found');
  }

  var rows = document.querySelectorAll('div[role="row"]');

  console.log('rows:', rows);

  /* ------------------------------------- */

  setTimeout(() => {
    // On chope les rows
    const rows = document.querySelectorAll('div[role="row"]');
    console.log(rows);

    function addNewColumn() {
      const rows = document.querySelectorAll('div[role="row"]');

      // Check if the header already has the new column
      /*   const headerRow = document.querySelector('div[role="row"][row-index="0"]');
      if (headerRow) {
        if (!headerRow.querySelector('.new-column-header')) {
          const headerCell = document.createElement('div');
          headerCell.className = 'ag-cell ag-cell-not-inline-editing ag-column-last ag-cell-value new-column-header';
          headerCell.innerText = 'Nouvelle Colonne';

          headerRow.appendChild(headerCell);
        }
      } else {
        console.log('header row null (in addNewColumn)');
      } */

      // Add new cell to each row
      rows.forEach((row, index) => {
        const operatorName = row.firstChild?.textContent;
        const operatorData = getOperatorData(operatorName);

        if (!row.querySelector('.new-cell')) {
          const newCell = document.createElement('div');
          newCell.className =
            'ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-right-aligned-cell new-cell';
          newCell.style.paddingLeft = '300px'; // Add padding to move text to the right
          //newCell.innerText = `Données ${index + 1}`; // Replace this with your data
          newCell.innerText = `${operatorData}`;
          //console.log('newCell.firstChild?.textContent', newCell.firstChild?.textContent);
          row.appendChild(newCell);
        }
      });
    }

    function observeTable() {
      const targetNode = document.querySelector('.ag-center-cols-viewport');

      if (!targetNode) return;

      const config = { childList: true, subtree: true };

      const callback = (mutationsList: any) => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            addNewColumn();
          }
        }
      };

      const observer = new MutationObserver(callback);

      observer.observe(targetNode, config);
    }
    addNewColumn();

    // Observe changes to the table
    observeTable();
  }, 2000); // Attendre 1 seconde

  /* 
  setTimeout(() => {
    const rows = document.querySelectorAll('div[role="row"]');
    console.log(rows);
  }, 1000); // Attendre 1 seconde */

  let newDiv = document.createElement('div');
  newDiv.innerHTML = '<h1>NEFTURE AVS</h1>';
  document.body.appendChild(newDiv);
}

console.log('@@ Extension is Loading');
window.addEventListener('load', attach);
