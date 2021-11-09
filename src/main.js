import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import '../common/common.css'
import './mock/mock.js'
import axios from 'axios'
import "./permission"
import * as echarts from 'echarts';


Vue.prototype.$echarts=echarts
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios=axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
