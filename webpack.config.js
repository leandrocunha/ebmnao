const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'file-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({ filename: '[name].js.map' }),
    new HtmlWebpackPlugin({
      title: '#EBMNAO - Devolvam o meu Flamengo!',
      template: 'src/templates/index.html'
    }),
    new ImageMinPlugin({
      externalImages: {
        context: 'src',
        sources: glob.sync('src/images/**/*'),
        destination: 'dist'
      }
    })
  ]
};
