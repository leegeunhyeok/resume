import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import { VERSION, RELEASE_DATE } from '@/common';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLine,
  faLinkedin,
  faGithub,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faEnvelope,
  faGlobeAmericas,
  faFacebook,
  faInstagram,
  faTwitter,
  faLine,
  faLinkedin,
  faGithub,
  faGitlab,
);

createApp(App)
  .use(store)
  .use(router)
  .component('fa', FontAwesomeIcon)
  .mount('#app');

/* !! DO NOT CHANGE UNDER CONTENTS !! */
console.log(
  '> Résume template by Geunhyeok LEE\nMore informations: https://github.com/leegeunhyeok/resume',
);
console.log(`> Version: v${VERSION} (Release ${RELEASE_DATE})`);
