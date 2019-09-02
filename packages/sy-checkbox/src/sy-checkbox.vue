<!--
 * @Author: Siwen
 * @Date: 2019-09-02 15:03:04
 * @LastEditors: Siwen
 * @LastEditTime: 2019-09-02 16:50:13
 * @Description: 
 -->
<template>
  <div class="table_checkbox">
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedOptions" @change="handlecheckedOptionsChange">
      <el-checkbox v-for="item in options" :label="item" :key="item">{{ item }}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>
   
<script>
export default {
  name: 'sy-checkbox',
  props: {
    options: {
      type: Array,
      default: () => {
        return []
      }
    },
    isCheckAll: { //是否默认全选
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      checkAll: false,
      checkedOptions: [],
      isIndeterminate: true
    }
  },
  created() {
    this.handleCheckAllChange(this.isCheckAll)
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedOptions = val ? this.options : []
      this.checkAll = val
      this.isIndeterminate = false
      this.$emit('change', this.checkedOptions)
    },
    handlecheckedOptionsChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.options.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.options.length
      this.$emit('change', this.checkedOptions)
    }
  }
}
</script>
<style lang='scss'>
.table_checkbox {

}
</style>