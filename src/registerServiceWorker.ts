/* eslint-disable no-console */

import { register } from 'register-service-worker';

declare const IS_GP_MODE: boolean;

if (process.env.NODE_ENV === 'production') {
  const entryPath = IS_GP_MODE ? '/' : process.env.BASE_URL;
  register(`${entryPath}service-worker.js`, {
    registrationOptions: { scope: entryPath },
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n' +
          'For more details, visit https://goo.gl/AFskqB',
      );
    },
    registered() {
      console.log('Service worker has been registered.');
    },
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updatefound() {
      console.log('New content is downloading.');
    },
    updated() {
      console.log('New content is available; please refresh.');
    },
    offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
}
