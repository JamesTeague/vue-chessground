import type { App } from 'vue';
import * as components from './components';

function install(app: App) {
  for (const key in components) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    app.component(key, components[key]);
  }
}

import './assets/themes.css';

export default { install };

export * from './components';
