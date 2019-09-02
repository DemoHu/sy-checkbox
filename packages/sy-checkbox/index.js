/*
 * @Author: Siwen
 * @Date: 2019-09-02 16:36:45
 * @LastEditors: Siwen
 * @LastEditTime: 2019-09-02 16:53:46
 * @Description: 
 */
// 导入组件，组件必须声明 name
import syCheckbox from './src/sy-checkbox.vue'

// 为组件提供 install 安装方法，供按需引入
syCheckbox.install = function (Vue) {
  Vue.component(syCheckbox.name, syCheckbox)
}

// 默认导出组件
export default syCheckbox