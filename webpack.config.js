const path = require('path')
// 导入模块
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    // entry: './main.js',
    entry: {
        // 可以有多个入口，也可以有一个，如果有一个默认从这个入口开始分析
        'main': './src/main.js'
    },
    output: {
        // 指定产出目录
        path: path.resolve('./dist'), // 相对转绝对路径,dist也可以改成static,webpack默认使用dist
        'filename': 'build.js'
    },
    watch: true, // 文件监视改动，自动产生build.js
    mode: 'development',
    module: { // 这个节点用于配置所有的第三方模块加载器
        rules: [
            {
                /**
                 * 遇到后缀是css的文件，webpack首先用css-loader加载器去解析这个文件
                 * 最后计算完的css，将会使用style-loader生成一个内容为最终解释完的css代码的style标签，放在head标签里
                 * webpack在打包国城中，遇到后缀为css的文件，就会使用style-loader和css-loader去加载这个文件
                 */
                test: /\.css$/, // 后缀是css的文件
                use: ["style-loader", 'css-loader',], // 先去使用css-loader解析css文件再使用style-loader生成style标签(link)插入head标签中
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    // 添加插件
    plugins: [
        new HtmlWebpackPlugin({
            // 插件的执行运行与元素索引有关
            template: './index.html', //参照物
        }),
        new VueLoaderPlugin()
    ]
}