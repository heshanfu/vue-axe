import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

// Use this plugin only in development => if (process.env.NODE_ENV !== 'production') 
const VueAxe = require('../vue-axe')
Vue.use(VueAxe, {
  config: {
    rules: [
      { id: 'heading-order', enabled: true },
      { id: 'label-title-only', enabled: true },
      { id: 'link-in-text-block', enabled: true },
      { id: 'region', enabled: true },
      { id: 'skip-link', enabled: true },
      { id: 'help-same-as-label', enabled: true }
    ]
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
