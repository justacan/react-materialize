import path from 'path';  
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default () => ({  
  entry: [
    path.join(__dirname, 'src/index.jsx'),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }), 
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                ['es2015', { modules: false }],
                'react',
              ],
            }
          }
        ]
      },
      {
        test: /\.(css|scss|sass)$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'file-loader?limit=100000' },
    ]
  },
});