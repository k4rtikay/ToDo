const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 8080, // Server port
        open: true, // Automatically opens the browser
        hot: true, // Enable Hot Module Replacement (HMR)
        watchFiles: ["./src/template.html"],
      },
  });