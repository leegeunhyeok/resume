import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import { VERSION, RELEASE_DATE } from '@/common';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');

/* !! DO NOT CHANGE UNDER CONTENTS !! */
console.log(
  '> Résume template by Geunhyeok LEE\nMore information: https://github.com/leegeunhyeok/resume',
);
console.log(`> Version: v${VERSION} (Release ${RELEASE_DATE})`);
