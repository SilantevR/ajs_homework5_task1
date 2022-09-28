const path = require("path");
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.[contenthash].js",
    clean: true,
  },
  devServer: {
    static: "./dist",
  },
  optimization: {
    runtimeChunk: "single",
  },
  /*plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: './index.html',
      title: 'Output Management',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],*/
  module: {
    rules: [
      /*{
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },*/
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
