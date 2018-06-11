const webpack = require('webpack'),
    path = require('path'),
    BabiliPlugin = require('babili-webpack-plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin")

const SRC_DIR = path.resolve(__dirname, 'src')
const OUTPUT_DIR = path.resolve(__dirname, 'dist')

const defaultInclude = [SRC_DIR]

module.exports = {
    entry: [
        './src/index.js',
        './src/assets/style/app.less'
    ],
    mode: 'production',
    output: {
        path: OUTPUT_DIR,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: defaultInclude,
                use: ['babel-loader']
            },{
                test: /\.less$/,
                include: defaultInclude,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },{
                test: /\.(jpg|png|gif)$/,
                include: defaultInclude,
                use: ['file-loader?name=img/[name]__[hash:base64:5].[ext]']
            },{
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                include: defaultInclude,
                use: ['file-loader?name=font/[name]__[hash:base64:5].[ext]']
            }
        ]
    },
    target: 'electron-renderer',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new BabiliPlugin()
    ],
    stats: {
        colors: true,
        children: false,
        chunks: false,
        modules: false
    }
}
