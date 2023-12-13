import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as Sentry from "@sentry/vue";

Vue.config.productionTip = false

Sentry.init({
  Vue,
  dsn: "https://c7acd42f923a6991c9bbe3373c4bf9f6@o4506386935185409.ingest.sentry.io/4506386975883264",
  
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracePropagationTargets: [],
    }),
  ],

  tracesSampleRate: 1.0, 
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0, 
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
