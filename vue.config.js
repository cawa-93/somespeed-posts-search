const path = require('path');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/somespeed-posts-search/'
        : '/',

    chainWebpack: config => {
        config.optimization.delete('splitChunks')
    },

    configureWebpack: {
        output: {
            filename: '[name].js',
            chunkFilename: '[name].js'
        }
    }
}
