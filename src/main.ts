import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';

library.add(fas, fab, far);

const app = createApp(App);

app.component('fa-icon', FontAwesomeIcon);

app.use(i18n);

app.mount('#app');
