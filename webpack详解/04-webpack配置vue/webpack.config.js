const path = require('path');

module.exports = {
    // 入口：可以是字符串/数组对象，这里我们入口只有一个。所以写一个字符串即可
    entry: './main.js',
    // 出口：通常是一个对象，里面至少包含两个重要属性，path和filename
    output:{
        path: path.resolve(__dirname, 'dist'), // 注意：path通常是一个绝对路径
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // css-loader只负责将css文件进行加载
                // style-loader负责将样式添加到DOM中
                // 使用多个loader时，从右向左读取
                use:['style-loader', 'css-loader']
            },
            {
                test:/\.less$/,
                use:[
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'less-loader'}
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 当加载的图片小于limit时，会将图片编译成base64字符串形式
                            // 当加载的图片大于limit时，需要file-loader
                            limit: 8192,
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["es2015"]
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    resolve: {
        // 导入文件时可以省略后缀名
        extensions: ['.js', '.css', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
};
