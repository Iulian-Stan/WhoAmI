const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (_env, argv) => {
  const devMode = argv.mode !== 'production';
  const styleLoader = devMode ? 'style-loader' : MiniCssExtractPlugin.loader;
  const cssLoader = {
    loader: 'css-loader',
    options: {
      modules: true
    }
  };
  return {
    entry: './src/index.jsx', // Entry point of your application
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'assets/js/[name].[contenthash:8].js', // Output bundle file name
      assetModuleFilename: 'assets/resources/[name].[contenthash:8][ext][query]',
      clean: true
    },
    module: {
      rules: [
        // Rule to load JavaScript (uses .babelrc)
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false
            }
          }
        },
        // Rule to load CSS
        {
          test: /\.css$/,
          exclude: /node_modules/,
          oneOf: [{
            include: /\.module\.css$/,
            use: [
              styleLoader,
              cssLoader
            ]
          }, {
            exclude: /\.module\.css$/,
            use: [
              styleLoader,
              'css-loader'
            ]
          }]
        },
        // Rule to load Images
        {
          test: /\.(png|jpe?g|gif|webp)$/,
          type: 'asset/resource'
        },
        // Rule to load Fonts
        {
          test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
          type: 'asset/resource'
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
        filename: 'index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/css/[name].[contenthash:8].css',
        chunkFilename: 'assets/css/[id].[contenthash:8].css',
      }),
      new CopyWebpackPlugin({
        patterns: [{ context: 'public/', from: '*.json', toType: 'dir' }]
      })
    ],
    optimization: {
      splitChunks: {
        // include all types of chunks
        chunks: 'all'
      }
    },
    // Development server
    devServer: {
      port: 9000,
    },
    // Development tools
    devtool: devMode ? 'source-map' : undefined
  };
};
