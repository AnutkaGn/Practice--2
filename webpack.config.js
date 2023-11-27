const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: {
            import: "./src/index.js"
        },
        search: {
            import: "./src/search.js"
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.[hash].js',
        clean: true,
    },
    module:{
        rules:[
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.svg$/, 
                use: 'svg-inline-loader'
            },
            { 
                test: /\.css$/, 
                use: [ 'style-loader', 'css-loader' ] 
            },
            { 
                test: /\.(js)$/, 
                use: 'babel-loader' 
            },
            {
                test: /\.mustache$/,
                loader: 'mustache-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve("./src/pages/greeting.html"),
            chunks: "index"
        }),
        new HtmlWebpackPlugin({
            filename: "searchPeople.html",
            template: path.resolve("./src/pages/searchPeople.html"),
            chunks: "search"
        }),
        new webpack.EnvironmentPlugin({
            'NODE_ENV': 'production'
        })      
    ],
    mode: "production"
};