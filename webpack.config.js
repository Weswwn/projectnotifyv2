const path = require('path');

module.exports = {
    entry: './dist/index.html',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'src')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.css']
    }
};