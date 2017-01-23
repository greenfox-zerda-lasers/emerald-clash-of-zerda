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
        loader: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.svg/,
        loader: 'svg-url-loader'
      }
    ]
  }

};
