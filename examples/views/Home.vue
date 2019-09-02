<!--
 * @Author: Siwen
 * @Date: 2019-09-02 16:32:02
 * @LastEditors: Siwen
 * @LastEditTime: 2019-09-02 16:45:36
 * @Description: 
 -->
<template>
  <div class="home">
    <sy-checkbox :options="tableColumn" @change="changeCheckbox"></sy-checkbox>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      tableColumn: [
        '商户号', '创建时间', '商户名', '邮箱', '支付货币', '商户属性', '商户费率',
        '状态', '操作'
      ],
      checkedColumn: []
    }
  },
  methods: {
    changeCheckbox(options) {
      this.checkedColumn = options
      console.log(this.checkedColumn)
    }
  },
};
</script>
