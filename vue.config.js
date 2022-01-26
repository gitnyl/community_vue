const ansiRegex = require('ansi-regex')
const path = require('path')
const webpack = require('webpack')
const fs = require('fs')

module.exports = {
    lintOnSave: false,
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['postcss-loader']
                }
            ]
        }
    }
}
