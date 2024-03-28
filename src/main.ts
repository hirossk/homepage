/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */



// Components
import App from './App.vue'
// Composables
import { createApp } from 'vue'
// Plugins
import { registerPlugins } from './plugins/'

import router from "./router/index"; // Vue Routerの設定をインポート

const app = createApp(App)

registerPlugins(app)

app.use(router).mount('#app')
