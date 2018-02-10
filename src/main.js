import Vue from 'vue'
import App from './App.vue'
import SuiVue from '../node_modules/semantic-ui-vue';

Vue.use(SuiVue);

new Vue({
  el: '#app',
  render: h => h(App)
})
