const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.config");

module.exports = merge(common, {
  devtool: false,
  devServer: {
    contentBase: path.join(__dirname, "dist")
    // port: 3000
  },
  mode: "development"
});
