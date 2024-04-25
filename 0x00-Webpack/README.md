# 0x00-Webpack

Setting up Webpack for a basic project involves several key steps. Webpack is a powerful module bundler that can handle complex build processes. Here's a comprehensive guide for setting up Webpack with entry points, outputs, loaders, plugins, code splitting, and a development server.

## Step 1: Initialize Your Project
Create a new project directory and initialize npm to generate a package.json file.
```
mkdir my-webpack-project
cd my-webpack-project
npm init -y
```

## Step 2: Install Webpack and Webpack CLI
Install Webpack and Webpack CLI (Command Line Interface).
```
npm install --save-dev webpack webpack-cli
```

### Step 3: Create Entry Points and Outputs
Webpack needs an entry point and an output configuration to know where to start bundling and where to place the bundled file.

### Create a simple JavaScript file as the entry point:
```
mkdir src
echo "console.log('Hello, Webpack!');" > src/index.js
```

### Create a basic Webpack configuration file:
```
touch webpack.config.js
```

### Open webpack.config.js and add the following configuration:
```
const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry point
  output: {
    filename: 'bundle.js',  // Output filename
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
};
```

## Step 4: Run Webpack to Build the Bundle
With the Webpack configuration set up, you can now run Webpack to bundle the project.
```
npm run build
```
This will create a dist directory with bundle.js in it.

## Step 5: Add Loaders
Loaders allow Webpack to process other types of files, such as CSS or images.

### Install some common loaders:
```
npm install --save-dev style-loader css-loader
```

### Modify webpack.config.js to add a rule for CSS files:
```
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,  // Match CSS files
        use: ['style-loader', 'css-loader'],  // Loaders to use
      },
    ],
  },
};
```

### Create a simple CSS file in src and import it in index.js:
```
echo "body { background-color: lightblue; }" > src/style.css
```

### Add the import statement to index.js:
```
import './style.css';
```

### Run npm run build again to create the updated bundle.
```
npm run build
```

## Step 6: Add Plugins
Plugins offer additional functionality. One common plugin is HtmlWebpackPlugin, which creates an HTML file and injects the bundled JavaScript.

### Install HtmlWebpackPlugin:
```
npm install --save-dev html-webpack-plugin
```

### Update webpack.config.js to use the plugin:
```
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Template HTML file
    }),
  ],
};
```

### Create a basic HTML template:
```
echo "<!DOCTYPE html><html lang='en'><head><title>Webpack Project</title></head><body></body></html>" > src/index.html
```

### Run npm run build again.
This time, the dist directory should contain an HTML file with the bundled JavaScript injected.

## Step 7: Split Your Code into Chunks
Code splitting helps manage large projects by splitting code into smaller bundles.

### To demonstrate code splitting, create two additional JavaScript files:
```
echo "export function greet() { console.log('Hello from Module 1'); }" > src/module1.js
echo "export function farewell() { console.log('Goodbye from Module 2'); }" > src/module2.js
```

### Update index.js to dynamically import these modules based on a condition:
```
import('./module1').then(module => module.greet());
import('./module2').then(module => module.farewell());
```

### Update webpack.config.js to enable code splitting:
```
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,  // Clean the output directory before each build
    chunkFilename: '[name].bundle.js',  // Naming pattern for chunks
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
```

Now, running npm run build should create separate bundles for different modules.

## Step 8: Set Up a Dev Server
Webpack Dev Server provides a development environment with live reloading.

### Install webpack-dev-server:
```
npm install --save-dev webpack-dev-server
```

### Update webpack.config.js to configure the dev server:
```
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    chunkFilename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),  // Serve content from 'dist'
    compress: true,  // Enable gzip compression
    port: 8080,  // Set the server port
  },
};
```

### To start the dev server, add a script to package.json:
```
{
  "scripts": {
    "start": "webpack serve"
  }
}
```

### Now, run the dev server:
```
npm start
```

### Open your browser and navigate to http://localhost:8080 to see your project with live reloading capabilities.

## Conclusion
This guide walks you through setting up Webpack for a basic project, including entry points, outputs, loaders, plugins, code splitting, and a dev server. By following these steps, you can create a flexible build process that scales with your project's complexity.