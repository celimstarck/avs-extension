import dotenv from 'dotenv';
dotenv.config();
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

import { Manifest } from 'webextension-polyfill';
import { version } from './environments/environment';
import { Environments } from './types/environment';

if (version === undefined) throw new Error('version is undefined');

type Parameters = {
  name: string;
  icons: {
    '16': string;
    '32': string;
    '48': string;
    '128': string;
  };
};

function getParameters(env: Environments | undefined): Parameters {
  return {
    name: 'KYA',
    icons: {
      '16': 'assets/img/logos/logo-prod.png',
      '32': 'assets/img/logos/logo-prod.png',
      '48': 'assets/img/logos/logo-prod.png',
      '128': 'assets/img/logos/logo-prod.png',
    },
  };
}

const environment = process.env.NODE_ENV as Environments | undefined;

const { name, icons } = getParameters(environment);

export const manifest: Manifest.WebExtensionManifest = {
  manifest_version: 3,
  name,
  version: version,
  host_permissions: ['<all_urls>'],
  description: 'Know your AVS on EigenLayer!',
  /*   content_security_policy: {
    sandbox:
      "sandbox allow-scripts allow-forms allow-popups allow-modals; script-src 'self' 'unsafe-inline' 'unsafe-eval'; child-src 'self';",
    extension_pages:
      "script-src 'self'; object-src 'self'; connect-src 'self' https://*.vercel-scripts.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://polygon-mumbai-infura.wallet.coinbase.com https://cloudflare-eth.com https://api-prod-useast1.eigenlayer.xyz https://rpc.ankr.com https://mainnet-infura.wallet.coinbase.com/ https://explorer-api.walletconnect.com/ wss://*.walletconnect.org wss://relay.walletconnect.com wss://*.walletlink.org https://*.walletconnect.com https://*.sentry.io https://*.alchemy.com https://ethereum-holesky.publicnode.com https://webserver-testnet-holesky.eigenlayer.xyz https://webserver-preprod-holesky.eigenlayer.xyz https://webserver-mainnet-ethereum.eigenlayer.xyz https://api.web3modal.com https://ethereum-rpc.publicnode.com https://eth.merkle.io https://eth.llamarpc.com https://ethereum-holesky-rpc.publicnode.com https://52cc-178-51-98-244.ngrok-free.app https://7qcjx39s6h.execute-api.eu-west-1.amazonaws.com https://7qcjx39s6h.execute-api.eu-west-1.amazonaws.com/station-; ",
  }, */
  icons,
  background: {
    service_worker: 'background.bundle.js',
    type: 'module',
  },
  content_scripts: [
    {
      matches: ['https://app.eigenlayer.xyz/operator'],
      js: ['operators.content.bundle.js'],
      css: ['assets/css/operators.css'],
      all_frames: true,
      run_at: 'document_start',
    },
    {
      matches: ['https://app.eigenlayer.xyz/operator/*'],
      js: ['operator.content.bundle.js'],
      css: ['assets/css/operator.css'],
      all_frames: true,
      run_at: 'document_start',
    },
    {
      matches: ['https://app.eigenlayer.xyz/avs/*'],
      js: ['avs.content.bundle.js'],
      css: ['assets/css/avs.css'],
      all_frames: true,
      run_at: 'document_start',
    },
  ],
  action: {
    default_popup: 'popup.html',
  },
  permissions: ['scripting', 'activeTab'],
  web_accessible_resources: [
    {
      resources: ['operators.bundle.js'],
      matches: ['<all_urls>'],
    },
    {
      resources: ['operator.bundle.js'],
      matches: ['<all_urls>'],
    },
    {
      resources: ['avs.bundle.js'],
      matches: ['<all_urls>'],
    },
  ],
};
