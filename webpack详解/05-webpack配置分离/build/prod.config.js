/**
 * 生产环境下的配置
 * @type {function(): void}
 */
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig, {
    plugins: [
        new UglifyjsWebpackPlugin()
    ]
});