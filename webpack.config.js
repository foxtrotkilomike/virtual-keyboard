const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production';
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const config = {
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: {
      keep: /\.git/,
    },
  },
  devServer: {
    open: true,
    host: 'localhost',
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
    new FaviconsWebpackPlugin({
      logo: './src/assets/favicon.png',
      favicons: {
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          favicons: true,
          windows: true,
          yandex: false,
        },
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              exportLocalsConvention: 'camelCase',
            },
            sourceMap: true,
          },
        }],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpe?g|gif)$/i,
        type: isProduction ? 'asset' : 'asset/resource',
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';

    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = 'development';
  }
  return config;
};
