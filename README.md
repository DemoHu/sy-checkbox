<!--
 * @Author: Siwen
 * @Date: 2019-09-02 16:32:52
 * @LastEditors: Siwen
 * @LastEditTime: 2019-09-04 11:32:17
 * @Description: 
 -->
# sy-checkbox

## 基于element-ui的Checkbox,用于Table组件的列控制

### 安装
```
npm install sy-checkbox -S

// 在 main.js 引入并注册
import syCheckbox from 'sy-checkbox'
import 'sy-checkbox/lib/sy-checkbox.css'
Vue.use(syCheckbox)
```
### 在组件中使用
```
<template>
  <div class="home">
    <div class="table_box">
      <sy-checkbox :options="tableColumn" @change="changeCheckbox"></sy-checkbox>
      <el-table :data="tableData">
        <!-- 也可在v-for中判断 v-if="checkedColumn.includes(item.label)" -->
        <el-table-column v-if="checkedColumn.includes('日期')" prop="date" label="日期"></el-table-column>
        <el-table-column v-if="checkedColumn.includes('姓名')" prop="name" label="姓名"></el-table-column>
        <el-table-column v-if="checkedColumn.includes('年龄')" prop="age" label="年龄"></el-table-column>
        <el-table-column v-if="checkedColumn.includes('性别')" prop="gender" label="性别"></el-table-column>
        <el-table-column v-if="checkedColumn.includes('地址')" prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      tableColumn: ['日期', '姓名', '年龄', '性别', '地址'],
      checkedColumn: [],
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          age: '18',
          gender: '男',
          address: '上海市普陀区金沙江路 1518 弄'
        }, 
        {
          date: '2016-05-04',
          name: '王小虎',
          age: '18',
          gender: '男',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          age: '18',
          gender: '男',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          age: '18',
          gender: '男',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {
    changeCheckbox(options) {
      this.checkedColumn = options
    }
  },
};
</script>
<style lang='scss'>
.home {
  .table_box {
    position: relative;
  }
}
</style>
```

### 文档说明
|参数名|必填|类型|说明|默认值|
|:----|:---|:----- |:-----|:-----|
|options|是|Array|选项数组|--|
|width|否|String、Number|宽度|最小宽度 100px|
|show-check-all|否|Boolean|是否显示全选按钮|false|
|is-check-all|否|Boolean|是否默认全选|true|
|trigger|否|String|触发方式：click/focus/hover/manual|click|
|placement|否|String|popper显示的位置：top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end|bottom-end|
|change|是|Function|回调函数|已选项数组|


