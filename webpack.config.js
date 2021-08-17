const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  watch: true,
  output: {
	path: path.resolve(__dirname, 'dist'),
	//path: path.resolve(__dirname, 'lib/dq_template/v1/static'),
	filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
	test: /\.css$/i,
	use: ['style-loader', 'css-loader']
      },
      {
	test: /\.less$/,
	use: [
		{
			loader: "style-loader"
		},
		{
			loader: "css-loader",
			options: {
			    sourceMap: true,
			    modules: true,
			}
		},
		{
			loader: "less-loader"
		}
	]
      },
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
}
