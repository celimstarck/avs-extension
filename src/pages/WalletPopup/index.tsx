import * as React from 'react';
import { createRoot } from 'react-dom/client';
function WalletPopup() {
  React.useEffect(() => {}, []);

  return (
    <main>
      <>Hello</>
    </main>
  );
}

const container = window.document.querySelector('#app-container');

const root = createRoot(container as Element);
root.render(<WalletPopup />);
