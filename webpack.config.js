const HtmlWebpackPlugin = require('html-webpack-plugin');
const HelloWorldPlugin = require('./plugins/hello-world-plugin');
const HelloAsyncPlugin = require('./plugins/hello-async-plugin');
const {FileListPlugin} = require('./plugins/file-list-plugin');
const MyCleanPlugin = require('./plugins/my-clean-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/i,
    //             use: ["style-loader", "css-loader"],
    //         },
    //     ],
    // },
    plugins: [
        new HtmlWebpackPlugin(),
        new MyCleanPlugin()
        // new HelloWorldPlugin({options: true}),
        // new HelloAsyncPlugin(),
        // new FileListPlugin(),
        // new FileListPlugin({
        //     outputFile: 'my-assets.md'
        // })
    ],
    module: {
        rules: [{
            test: /\.txt/,
            use: {
                loader: path.resolve(__dirname, './loader/name-loader.js'),
                options: {
                    name: 'foo'
                }
            }
        }, {
            test: /\.html/,
            use: {
                loader: path.resolve(__dirname, './loader/html-optimize-loader.js'),
                options: {
                    comments: false
                }
            }
        }, {
            test: /\.xml/,
            use: {
                loader: path.resolve(__dirname, './loader/xml-loader.js'),
                options: {
                    comments: false
                }
            }
        }]
    },
    devServer: {
        contentBase: './dist',
        overlay: {
            warnings: true,
            errors: true
        },
        open: true
    }
};