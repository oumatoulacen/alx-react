const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',  // Entry point
  output: {
    filename: 'bundle.js',  // Output filename
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
};