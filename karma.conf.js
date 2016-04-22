/* global module */
module.exports = function (config) {
    'use strict';
    config.set({

        basePath: './',

        singleRun: false,

        frameworks: ['jspm', 'jasmine'],

        jspm: {
            loadFiles: [
               'src/**/*.spec.ts',
           //   'spec/env.spec.ts'        
            ],
            serveFiles: [
                'src/**/*!(*.spec).ts',
                'tsconfig.json'
            ]
        },

        proxies: {
            '/src': '/base/src',
            '/spec': '/base/spec',
            '/jspm_packages': '/base/jspm_packages',
            '/tsconfig.json': '/base/tsconfig.json'
        },
        reporters: ['spec'],
        browsers: ['PhantomJS']
    });
};
