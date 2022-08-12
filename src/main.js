import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/rem'
import 'amfe-flexible'
import Vant from 'vant';
import './assets/iconfont/iconfont.css'
import 'vant/lib/index.css';
import * as echarts from 'echarts'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
