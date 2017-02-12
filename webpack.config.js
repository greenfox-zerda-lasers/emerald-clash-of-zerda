//https://github.com/kevlened/copy-webpack-plugin

module.exports = {

  entry: './main.js',

  output: {
    path: 'dist',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test:/\.scss$/,
        use: ["style-loader", {
          loader: 'css-loader',
          options: { url: false }
        }, "sass-loader"]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.svg/,
        loader: 'svg-url-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: require.resolve('snapsvg'),
        loader: 'imports-loader?this=>window,fix=>module.exports=0'
      }

    ]
  }


};
