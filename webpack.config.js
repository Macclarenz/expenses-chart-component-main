const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, './src/js/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        clean: true,
        assetModuleFilename: 'assets/images/[name][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: ''}
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.html$/i,
                use: [
                    'html-loader'
                ]
            }, {
                test: /\.(jsx?)$/i, 
                exclude: /node_modules/,
                use: 'babel-loader'
            }, {
                test: /\.(jpeg?|png|svg)$/i,
                type: 'asset/resource'
            }
        ]
    }, 
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    resolve: {
        extensions: ['.jsx', '.js']
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist')
        },
        port: 3000,
        compress: true, 
        hot: true
    }
}