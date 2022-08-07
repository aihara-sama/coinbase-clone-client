const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (_, config) => {
  console.log({ config });
  return {
    mode: config.mode,
    entry: [path.resolve(__dirname, 'frontend/src/index.tsx')],
    output: {
      pathinfo: false,
      path: path.resolve(__dirname, 'backend/dist/public/scripts'),
      filename: '[name].[contenthash].js',
      assetModuleFilename: ({ filename }) => {
        const index = filename.indexOf('assets');
        return filename.substring(index);
      },
    },
    // ...(config.mode === 'development' ? { devtool: 'source-map' } : {}),
    module: {
      rules: [
        // videos
        // {
        //   test: /\.(mov|mp4)$/,
        //   use: [
        //     {
        //       loader: 'file-loader',
        //       options: {
        //         name: '[name].[ext]',
        //         outputPath: 'assets/videos',
        //       },
        //     },
        //   ],
        //   exclude: '/node_modules',
        // },
        // fonts
        // {
        //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
        //   exclude: '/node_modules',
        //   type: 'asset/resource',
        // },
        // jpg
        // {
        //   test: /\.(jpe?g)$/i,
        //   exclude: '/node_modules',
        //   use: {
        //     loader: 'file-loader',
        //     options: {
        //       name: '[name].[ext]',
        //       outputPath: 'assets/images/jpg',
        //     },
        //   },
        // },
        // png
        // {
        //   test: /\.(png)$/i,
        //   exclude: '/node_modules',
        //   use: {
        //     loader: 'file-loader',
        //     options: {
        //       name: '[name].[ext]',
        //       outputPath: 'assets/images/png',
        //     },
        //   },
        // },
        // js/ts
        {
          test: /\.tsx?$/,
          use: ['babel-loader', 'ts-loader'],
          exclude: '/node_modules',
        },
        {
          test: /\.(svg)$/i,
          exclude: '/node_modules',
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/svg',
              transpileOnly: true,
            },
          },
        },
        // svg
        // {
        //   test: /\.svg$/,
        //   loader: 'react-svg-loader',
        //   exclude: '/node_modules',
        // },
      ],
    },
    resolve: {
      symlinks: false,
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@Pages': [path.resolve(__dirname, './frontend/src/pages')],
        '@Services': [path.resolve(__dirname, './frontend/src/services')],
        '@Components': [path.resolve(__dirname, './frontend/src/Components')],
        '@Interfaces': [path.resolve(__dirname, './frontend/src/interfaces')],
        '@Helpers': [path.resolve(__dirname, './frontend/src/helpers')],
        '@Hooks': [path.resolve(__dirname, './frontend/src/hooks/index.ts')],
        '@Utils': [path.resolve(__dirname, './frontend/src/utils')],
        '@Images': [path.resolve(__dirname, './frontend/src/assets/images')],
        '@Videos': [path.resolve(__dirname, './frontend/src/assets/videos')],
      },
    },
    plugins: [
      ...(config.mode === 'production'
        ? [
            new CleanWebpackPlugin(),
            new CopyPlugin({
              patterns: [
                {
                  from: path.resolve(
                    __dirname,
                    'frontend/src/assets/images/svg',
                  ),
                  to: path.resolve(
                    __dirname,
                    'backend/dist/public/assets/images/svg',
                  ),
                },
              ],
            }),
          ]
        : []),

      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'backend/dist/public/index.html'),
        ...(config.mode === 'production'
          ? {
              filename: path.resolve(
                __dirname,
                './backend/dist/public/index.html',
              ),
            }
          : {}),
      }),
    ],

    devServer: {
      hot: true,
      port: 8000,
      compress: true,
      static: path.resolve(__dirname, 'backend/dist/public'),
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  };
};
