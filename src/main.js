import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import 'materialize-css/dist/js/materialize.min'
import VueChatScroll from 'vue-chat-scroll'


Vue.use(firestorePlugin)
Vue.use(VueChatScroll)
Vue.filter('date', dateFilter)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
