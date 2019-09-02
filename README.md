<!--
 * @Author: Siwen
 * @Date: 2019-09-02 16:32:52
 * @LastEditors: Siwen
 * @LastEditTime: 2019-09-02 17:33:19
 * @Description: 
 -->
# sy-checkbox

## 基于element-ui的Checkbox组件的二次封装

### 安装
```
npm install sy-checkbox -S

// 在 main.js 引入并注册
import syCheckbox from 'sy-checkbox'
Vue.use(syCheckbox)
```
### 在组件中使用
```
<template>
  <sy-checkbox :options="options" @change="changeCheckbox"></sy-checkbox>
</template>
<script>
  export default {
    data () {
      return {
        options: ['商户号', '创建时间', '商户名', '邮箱', '支付货币', '商户费率'],
        checkedOptions: []
      }
    },
    methods: {
      changeCheckbox(options) {
        this.checkedOptions = options
      }
    },
  }
</script>
```

### 文档说明
|参数名|必填|类型|说明|
|:----|:---|:----- |-----|
|options|是|array|选项数组|
|is-check-all|否|boolean|是否默认全选： 默认true|
|change|否|function|回调函数,返回已选项数组|
