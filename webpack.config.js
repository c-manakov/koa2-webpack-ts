/**
 * Created by Monyk on 02.11.2016.
 */
var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, './bin'),
        publicPath: '/bin/',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {test: /\.tsx?$/, loader: 'ts-loader',
                exclude: /(node_modules|bower_components)/}
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    }
}