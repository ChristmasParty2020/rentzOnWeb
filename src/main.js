import { createApp } from 'vue'
import Harlem from '@harlem/core';
import App from './App.vue'
import './index.css'

import createDevtoolsPlugin from '@harlem/plugin-devtools';
import createStoragePlugin from '@harlem/plugin-storage';
import createTransactionPlugin from '@harlem/plugin-transaction';

const storagePlugin = createStoragePlugin('*', {
  type: 'local',
  prefix: 'rentz',
  sync: true
});

function start() {
  let plugins = [storagePlugin, createTransactionPlugin()];

  if (process.env.NODE_ENV === 'development') {
    plugins.push(createDevtoolsPlugin({
      label: 'State'
    }));
  }

  return createApp(App)
  .use(Harlem, {
    plugins
  })
  .mount('#app');
}

start();
