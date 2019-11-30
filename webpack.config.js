const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src',
  devtool: 'eval-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
         loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
    ]
  },
plugins: [
  new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: 'index.html'
  })
 ],
 output: {
  path: __dirname + '/public',
  publicPath: '/',
  filename: 'bundle.js'
}
};