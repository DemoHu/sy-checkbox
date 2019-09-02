/*
 * @Author: Siwen
 * @Date: 2019-09-02 16:32:02
 * @LastEditors: Siwen
 * @LastEditTime: 2019-09-02 16:45:15
 * @Description: 
 */
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }
  ]
});
