const path = require('path');

const webpack = require('webpack');

module.exports = {
    devServer: {
        port: 3000,
        inline: true,
        hot: true,
        stats: 'normal',
        contentBase: path.join(__dirname, 'src'),
        index: 'index.html',
        historyApiFallback: {
            index: '/',
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
    },
    // entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'src'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        },
      ]
    },
    resolve: {
        extensions: ['*', '.tsx','.jsx', '.js']
    }
};