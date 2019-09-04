<!--
 * @Author: Siwen
 * @Date: 2019-09-02 16:32:02
 * @LastEditors: Siwen
 * @LastEditTime: 2019-09-04 11:07:26
 * @Description: 
 -->
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
    width: 60%;
    margin-top: 100px;
    position: relative;
  }
}
</style>
