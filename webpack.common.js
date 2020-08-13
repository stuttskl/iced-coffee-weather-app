const path = require("path");
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, "src", "app.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, './src/'),
        use: [
          "style-loader", 
          "css-loader",
        ]
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/"
  }, 
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
  ],
};