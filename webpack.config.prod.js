import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';


export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    //Generate an external css file with a hash in the filename
    new ExtractTextPlugin('[name].[contenthash].css'),

    //Hash the files using MD5 so that their names change wehn the content changes.
    new WebpackMd5Hash(),

    //Use CommonsChunkPlugin to create a separate bundle
    // of vendro libraries so that they're cached separtely.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhiteSpace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),

    //Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),
    //Minify Js
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      // {test: /\.css$/, loaders: ['style', 'css']}
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}
;
