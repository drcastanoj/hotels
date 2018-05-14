var webpackConfig = require('./webpack.test');
var argv = require('yargs').argv;
module.exports = function (config) {

  if (argv.test) {
    webpackConfig.module.rules.push(
      {
        test: /\.ts$/,
        enforce: 'post',
        exclude: [/\.spec\.ts$/, /node_modules/],
         use: { loader: 'istanbul-instrumenter-loader', options: { esModules: true } }
      });
    reporters = ['kjhtml', 'html'];
  } else {
    reporters = ['kjhtml'];
  }
  const coverage = config.singleRun ? ['coverage'] : [];
  var _config = {
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      { pattern: './config/karma-test-shim.js', watched: true }
    ],

    preprocessors: {
      './config/karma-test-shim.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
       stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,

    reporters: reporters,
    // Configuración para reporte de cobertura
    coverageReporter: {
      includeAllSources: true,
      instrumenterOptions: {
        istanbul: { noCompact: true }
      }
    },
    // para evitar error en debug
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    htmlReporter: {
      outputDir: 'reporters/test',
      focusOnFailures: true,
      namedFiles: false,
      reportName: 'karma-chrome-launcher'
    },
  };

  config.set(_config);
};
