const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const DeadCodePlugin = require('webpack-deadcode-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {
  //...other config options
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new DeadCodePlugin({
      patterns: ['src/**/*.(js|jsx)'],
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          [
            'svgo',
            {
              plugins: [{ removeViewBox: false }],
            },
          ],
        ],
      },
    }),
    new LoadablePlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import'],
          },
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
