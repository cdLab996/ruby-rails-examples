import Vue from 'vue'
import router from '../router/index'

import App from '../App.vue'

// Vue.use(VueRouter);
window.bus = new Vue()

window.onload = () => {
  window.WOOT = new Vue({
    router,
    components: { App },
    template: '<App/>',
  }).$mount('#app')
}
