module.exports = function (config) {
    var testWebpackConfig = require('./webpack.test.js');

    var options = {
        basePath: '',
        frameworks: ['jasmine', 'sinon'],
        exclude: [],
        files: [{ pattern: './config/specBundle.js', watched: false }],
        preprocessors: { './config/specBundle.js': ['coverage', 'webpack', 'sourcemap'] },
        webpack: testWebpackConfig,
        coverageReporter: { type: 'in-memory' },
        remapCoverageReporter: {
            'text-summary': null,
            json: './coverage/coverage.json',
            html: './coverage/html'
        },
        webpackMiddleware: { stats: 'errors-only' },
        reporters: ['mocha', 'coverage', 'remap-coverage'],
        mochaReporter: {
            ignoreSkipped: true
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'],
        customLaunchers: {
            ChromeTravisCi: { base: 'Chrome', flags: ['--no-sandbox'] }
        },
        singleRun: true
    };

    if (process.env['TRAVIS']) {
        options.browsers = ['ChromeTravisCi'];
    }
    config.set(options);
};
