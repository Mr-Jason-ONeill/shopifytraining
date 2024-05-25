const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  stats: 'minimal',
  entry: path.resolve(__dirname, '../../src/main.js'),
  output: {
    path: path.resolve(__dirname, '../../assets/'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['*', '.js', '.json', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../../src/'),
      '@shopify-directory': path.resolve(__dirname, '../../'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env', 
            ],
            plugins: [],
          }
        }
      },
      ... (() => {
        const rules = []

        const loaders = [
          { test: /\.(css|postcss)$/i },
        ]

        loaders.forEach((element, index) => {
          rules.push({
            test: element.test,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: require(path.resolve(__dirname, '../postcss.config.js'))
                }
              }
            ]
          })

          if (element.loader) rules[index].use.push(element.loader)
        })

        return rules
      })()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}