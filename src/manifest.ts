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
  if (env === 'development') {
    return {
      name: 'Revelio Dev',
      icons: {
        '16': 'assets/img/logos/logo-dev.png',
        '32': 'assets/img/logos/logo-dev.png',
        '48': 'assets/img/logos/logo-dev.png',
        '128': 'assets/img/logos/logo-dev.png',
      },
    };
  }

  if (env === 'staging') {
    return {
      name: 'Revelio Staging',
      icons: {
        '16': 'assets/img/logos/logo-staging.png',
        '32': 'assets/img/logos/logo-staging.png',
        '48': 'assets/img/logos/logo-staging.png',
        '128': 'assets/img/logos/logo-staging.png',
      },
    };
  }
  return {
    name: 'Revelio',
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
  description: 'Starknet transactions will never be a mistery again',
  icons,
  /* background: {
    service_worker: 'background.bundle.js',
    type: 'module',
  }, */
  content_scripts: [
    {
      matches: ['https://app.eigenlayer.xyz/operator'],
      js: ['attach.content.bundle.js'],
      css: ['assets/css/explorer.css'],
      all_frames: true,
      run_at: 'document_idle',
    },

    {
      matches: ['https://app.eigenlayer.xyz/operator/*'],
      js: ['operator.content.bundle.js'],
      css: ['assets/css/explorer.css'],
      all_frames: true,
      run_at: 'document_idle',
    },
    {
      matches: ['https://app.eigenlayer.xyz/avs/*'],
      js: ['avs.content.bundle.js'],
      css: ['assets/css/explorer.css'],
      all_frames: true,
      run_at: 'document_idle',
    },
  ],
  action: {
    default_popup: 'popup.html',
  },
  //permissions: ['tabs'],
  web_accessible_resources: [
    {
      resources: ['attach.bundle.js'],
    },
    {
      resources: ['operator.bundle.js'],
    },
    {
      resources: ['avs.bundle.js'],
    },
  ],
};
