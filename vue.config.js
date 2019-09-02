/*
 * @Author: Siwen
 * @Date: 2019-09-02 16:34:13
 * @LastEditors: Siwen
 * @LastEditTime: 2019-09-02 16:57:12
 * @Description: 
 */
module.exports = {
  lintOnSave:false,//是否使用eslint
  productionSourceMap: false,
  devServer:{
    open:true,
  },
  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
    .rule('js')
    .include
      .add('/packages/')
      .end()
    .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}