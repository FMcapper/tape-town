const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './client/index.js',
  output: { 
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-react'], ['@babel/preset-env']],
          },
        }
      }
    ]
  },
  devServer: {
    static: {
      publicPath: '/',
      directory: path.join(__dirname)
    }
  },
  plugins: [new HtmlWebpackPlugin({template: "./index.html"})]
}