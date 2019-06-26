const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';
const isDev = mode === 'development';
const supportedBrowsers = [
  '>1%',
  'last 4 versions',
  'Firefox ESR',
  'not ie < 9'
];
const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: [
      ['@babel/preset-env', { targets: supportedBrowsers }]
    ]
  }
};

module.exports = {
  mode,
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: isDev ? 'bundle.js' : 'bundle.[hash:8].js',
    chunkFilename: isDev ? '[name].js' : '[name].[chunkhash:8].js',
    publicPath: '/'
  },
  devServer: {
    quiet: true
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(html|svelte)$/,
            use: [
              babelLoader,
              {
                loader: 'svelte-loader',
                options: {
                  // Emitting the CSS allows webpack to handle url(...) in the style part of the component.
                  emitCss: true,
                  legacy: true
                }
              }
            ]
          },
          {
            test: /\.m?js$/,
            // Babel must transpile svelte helper files for older browsers.
            exclude: /node_modules\/(?!svelte)/,
            use: babelLoader
          },
          {
            test: /\.css$/,
            use: [
              isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      flexbox: 'no-2009',
                      browsers: supportedBrowsers
                    }),
                    // Only minify CSS in production.
                    !isDev && require('cssnano')({ preset: 'default' })
                  ].filter(Boolean)
                }
              }
            ]
          },
          {
            loader: 'file-loader',
            // Exclude js files to keep css-loader working as it injects its runtime
            // that would otherwise be processed through file-loader.
            // Exclude ejs files to ignore the HtmlWebpackPlugin template.
            // Exclude json files so they get processed by the internal webpack loader.
            exclude: /\.(js|ejs|json)$/,
            options: {
              name: 'static/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    !isDev && new CleanWebpackPlugin({ verbose: false }),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // Use 'development' unless process.env.NODE_ENV is defined.
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.ejs'),
      inject: true,
      minify: isDev ? undefined : {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
    }),
    !isDev && new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css'
    })
  ].filter(Boolean)
};
