import Vue from 'vue'
import './styles/app.scss'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.min.css'

Vue.config.productionTip = false


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
