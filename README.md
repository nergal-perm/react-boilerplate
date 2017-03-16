# React + Redux frontend boilerplate project

Here's a condensed version of how to get a React app up and running:

In the terminal, create a new directory. `cd` into that directory.

Type the following command-line scripts:

```
npm init
npm i -S {react,react-dom}
npm i -D babel-{core,loader} babel-preset-react
npm i -D webpack webpack-dev-server html-webpack-plugin
```

In your root directory, create a file named `.babelrc`. Write this inside:

```
{ presets: ['es2015', 'react'] }
```

In your root directory, create another file named `webpack.config.js`. Write (or copy) this inside:

```
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: __dirname + '/app/index.js',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	output: {
		filename: 'transformed.js',
		path: __dirname + '/build'
	},
	plugins: [HTMLWebpackPluginConfig]
};
```

In package.json, replace the scripts object with this:

```
  "scripts": {
    "build": "webpack",
    "start": "webpack-dev-server",
  },
```

Create a directory inside of your root directory named `app`, and another directories inside of `app` named `app/components` and `app/containers`.

Start writing code ;)

## Testing with tape

On Windows tests should be run by this command:

```
tape -r babel-register -r babel-polyfill tests/*.test.js
```

On Linux it's probably (I didn't try it yet) should be run by 

```
babel-node ./node_modules/.bin/tape tests/*.test.js | faucet
```