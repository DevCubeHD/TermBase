const webpack = require('webpack'),
    path = require('path')
const { spawn } = require('child_process')

const SRC_DIR = path.resolve(__dirname, 'src')
const OUTPUT_DIR = path.resolve(__dirname, 'dist')

const defaultInclude = [SRC_DIR]

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js',
        './src/assets/style/app.less'
    ],
    mode: 'development',
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
                use: ['style-loader', 'css-loader', 'less-loader']
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    devtool: 'cheap-source-map',
    devServer: {
        contentBase: OUTPUT_DIR,
        overlay: true,
        hot: true,
        stats: {
            colors: true,
            chunks: false,
            children: false
        },
        setup() {
            spawn('electron', ['.'], {shell: true, env: process.env, stdio: 'inherit'})
            .on('close', code => process.exit(0))
            .on('error', spawnError => console.error(spawnError))
        }
    }
}
