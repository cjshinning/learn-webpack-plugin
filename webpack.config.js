const HtmlWebpackPlugin = require('html-webpack-plugin');
const HelloWorldPlugin = require('./plugins/hello-world-plugin');
const HelloAsyncPlugin = require('./plugins/hello-async-plugin');
const {FileListPlugin} = require('./plugins/file-list-plugin');
const MyCleanPlugin = require('./plugins/my-clean-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new MyCleanPlugin()
        // new HelloWorldPlugin({options: true}),
        // new HelloAsyncPlugin(),
        // new FileListPlugin(),
        // new FileListPlugin({
        //     outputFile: 'my-assets.md'
        // })
    ]
};