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
          }
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
    devServer: {
        hot: true,
        publicPath: "/src",
        historyApiFallback: true
    }
};