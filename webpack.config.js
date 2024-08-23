// Node.js 환경

// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const copyPlugin = require('copy-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // 요걸 생략해도 아래와 동일하게 output이 만들어짐.
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean : true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',     // 3..
          'postcss-loader', // 2
          'sass-loader'     // 1
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        {from: 'static'}
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}