import * as React from 'react';
import { createRoot } from 'react-dom/client';

import '../../assets/css/popup.css';
import logoWide from '../../assets/img/logos/revelio-wide.png';

function Popup() {
  return (
    <>
      <div id='container'>
        <img src={logoWide} width='128px' />
      </div>
    </>
  );
}

const container = window.document.querySelector('#app-container');

const root = createRoot(container as Element);
root.render(<Popup />);
