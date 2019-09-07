/**
 * 开发环境下的相关配置
 * @type {merge}
 */
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig, {
  devServer: {
      contentBase: './dist',
      inline: true
  }
});