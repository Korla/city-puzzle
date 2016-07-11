var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    files: [
      'node_modules/babel-polyfill/browser.js',
      'src/**/*.test.js'
    ],
    preprocessors: {
      'src/**/*.test.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
        noInfo: true
    },
    frameworks: ['jasmine'],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
