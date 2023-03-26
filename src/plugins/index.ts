/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { createPersistedState } from 'pinia-plugin-persistedstate';
import router from '../router';
import pinia from '../store';
import vuetify from './vuetify';
import { loadFonts } from './webfontloader';

// Types
import type { App } from 'vue';

pinia.use(
  createPersistedState({
    storage: sessionStorage,
  })
);
export function registerPlugins(app: App) {
  loadFonts();
  app.use(vuetify).use(router).use(pinia);
}
