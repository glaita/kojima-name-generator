const { resolve, join } = require('path')

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost',
    'webpack/hot/only-dev-server',
    './index.js',
  ],

  output: {
    filename: 'main.js',
    path: resolve(__dirname, 'static'),
    publicPath: '/static/',
  },

  context: resolve(__dirname, 'src'),

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'build'),
    publicPath: '/static/',
    historyApiFallback: true,
  },

  resolve: {
    modules: [resolve('src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      '../../theme.config$': join(__dirname, 'src/styles/theme.config'),
      react: resolve(__dirname, 'node_modules', 'react'),
    },
    mainFields: ['browser', 'main'],
  },

  module: {
    rules: [
      {
        test: /(\.sass|\.scss)$/,
        exclude: /node_modules/,
        use: ['css-hot-loader'].concat(
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            // Could also be write as follow:
            use: [
              {
                loader: 'css-loader',
                query: {
                  modules: true,
                  sourceMap: true,
                  importLoaders: 2,
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          })
        ),
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader'],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader'],
        }),
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
        use: 'file-loader?name=[name].[ext]?[hash]',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/fontwoff',
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEBUG__: true,
      __DEV__: true,
      __QA__: false,
      __PRODWIN__: false,
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.jsx?$/,
      options: {
        eslint: {
          configFile: resolve(__dirname, '.eslintrc'),
          cache: false,
        },
      },
    }),
    // new webpack.optimize.ModuleConcatenationPlugin(),
    //        new CopyWebpackPlugin([{ from: 'vendors', to: 'vendors' }]),
    //     new OpenBrowserPlugin({url: 'http://localhost:8080'}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin({
      // filename: '[name].[contenthash].css',
      filename: '[name].css',
    }),
  ],
}

module.exports = config
