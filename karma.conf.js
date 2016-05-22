/* global module */
module.exports = function (config) {
  'use strict';
  config.set({

    basePath: './',

    singleRun: false,

    frameworks: ['jspm', 'jasmine'],

    jspm: {
      loadFiles: ['src/**/*.spec.ts'],
                           serveFiles: [
                           'src/mko-custom.ts',
                           'src/mko-custom.d.ts',
                           'src/spec/helper.ts',
                           'src/spec/template.html',
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
