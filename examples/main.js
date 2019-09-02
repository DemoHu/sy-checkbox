/*
 * @Author: Siwen
 * @Date: 2019-09-02 16:32:02
 * @LastEditors: Siwen
 * @LastEditTime: 2019-09-02 17:50:38
 * @Description: 
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// 测试
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

import syCheckbox from './../packages/index'
Vue.use(syCheckbox)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
