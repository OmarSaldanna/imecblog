const path = require('path');
const webpack = require('webpack');
// requerimos el plugin de webpack
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// usamos el plugin de compresion
const compressionWebpackPlugin = require('compression-webpack-plugin');
// un plugin para optimizacion
const TerserPlugin = require('terser-webpack-plugin');
// pligin para el manifest.json
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
// plugin para limpiar la carpeta de public
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

require('dotenv').config;

// verificamos si estamos en desarrollo
const isDev = (process.env.NODE_ENV === 'development');
// creamos esta constante para la configuracion
const entry = ['./src/frontend/index.js'];

// si estamos en desarrollo agregamos el entry para desarrollo
if (isDev) {
  entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true');
}

module.exports = {
  entry: entry,
  mode: process.env.ENV, // usamos las vars de entorno para automatizar el modo
  output: {
    // que el build quede en la carpeta de pblic en server
    path: path.resolve(__dirname, 'src/server/public'),
    // haseamos los archivos en prodiccion
    filename: isDev ? 'assets/app.js' : 'assets/app-[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // { // un loader que no se usa y puede agregar peso
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: 'html-loader',
      //     },
      //   ],
      // },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    // ayuda con el refresh de la app
    // lo validamos para que solo se use en desarrollo
    isDev ? new webpack.HotModuleReplacementPlugin() : () => {},
    // activamos el plugin de limpieza
    isDev ? () => {} : new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: path.resolve(__dirname, 'src/server/public')
    }),
    // activamos el plugin de compresion
    isDev ? () => {} : new compressionWebpackPlugin({
      // extensiones de archivos a comprimir
      test: /\.js$|\.css$/,
      filename: '[path][base].gz',
    }),
    // new HtmlWebpackPlugin({
    //   template: './public/index.html',
    //   filename: './index.html',
    // }),
    new MiniCssExtractPlugin({
      // tambien el css es hasheado
      filename: isDev ? 'assets/app.css' : 'assets/app-[hash].css',
    }),
    isDev ? () => {} : new WebpackManifestPlugin(),
  ],
  // usamos el plugin de optimization
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        // ajuste del vendor que es como el optim de paquetes
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: isDev ? 'assets/vendor.js' : 'assets/vendor-[hash].js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return (chunk) => chunk.name !== 'vendors' && /[\\/]node_modules[\\/]/.test(name);
          },
        },
      },
    },
  },
};
