const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve('dist/build/'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          filename: 'vendors.js',
          chunks: 'all',
        },
      },
    },
  },
  resolve: { extensions: ['.js', '.jsx'] },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    inline: true,
    port: 3000,
    publicPath: '/',
    proxy: {
      '/': 'http://127.0.0.1:8080/',
    },
  },
  module: {
    rules: [
      {
        test: /\.j(s|sx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
