<!--
 * @Author: Siwen
 * @Date: 2019-09-02 15:03:04
 * @LastEditors: Siwen
 * @LastEditTime: 2019-09-04 11:31:55
 * @Description: 
 -->
<template>
  <div class="table_checkbox">
    <el-popover
      :width="width"
      :trigger="trigger"
      :placement="placement"
      popper-class="popper-checkbox">
      <i class="el-icon-setting" slot="reference"></i>
      <el-checkbox v-if="showCheckAll" :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="checkedOptions" @change="handlecheckedOptionsChange">
        <el-checkbox v-for="item in options" :label="item" :key="item">{{ item }}</el-checkbox>
      </el-checkbox-group>
    </el-popover>
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
    width: { //宽度
      type: String,
      default: '100'
    },
    trigger: { //触发方式
      type: String,
      default: 'click'
    },
    placement: { //显示的位置
      type: String,
      default: 'bottom-end'
    },
    showCheckAll: { //是否提供全选
      type: Boolean,
      default: false
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
  position: absolute;
  right: 10px;
  z-index: 10;
  .el-icon-setting.el-popover__reference {
    font-size: 20px;
  }
}
.popper-checkbox {
  min-width: 100px;
  padding-right: 20px;
  .el-checkbox-group {
    display: flex;
    flex-direction: column;
    .el-checkbox {
      margin-bottom: 8px;
    }
  }
}
</style>