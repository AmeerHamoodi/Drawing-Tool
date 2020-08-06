const { join, resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let getV = () => {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 4; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  return result;
};

let PACKAGE = require("./package.json");
let vers = getV();

module.exports = {
  entry: "./src/js/main.jsx",
  output: {
    path: __dirname + "./devBuild/js",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      }
    ]
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname + "/src/index.html"),
      filename: resolve(__dirname + "./dist/index.html"),
      inject: false,
      version: vers,
      changeVersion: PACKAGE.version,
      scriptTag: `<script src="js/bundle.js?build=${vers}"></script>`
    })
  ]
};
