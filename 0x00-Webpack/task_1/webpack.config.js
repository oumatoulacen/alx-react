const path = require('path');

module.exports = {
  mode: 'production',  // Set mode to production
  entry: './js/dashboard_main.js',  // Entry point
  output: {
    filename: 'bundle.js',  // Output filename
    path: path.resolve(__dirname, 'public'),  // Output directory
  },
};
