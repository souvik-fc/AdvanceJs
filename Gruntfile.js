module.exports = function(grunt) {
       'use strict';
       // Project configuration.
       grunt.initConfig({
               jasmine : {
                       src : 'node_modules/grunt/src/*.js',
                       options : {
                               specs : 'node_modules/grunt/src/specs/*.js'
                       }
               },
               jshint: {
            myFiles: ['amitabh/js/*.js']
        }
       });
       grunt.loadNpmTasks('grunt/node_modules/grunt-contrib-jasmine');
       grunt.loadNpmTasks('grunt/node_modules/grunt-contrib-jshint');
       grunt.registerTask('lint', ['jshint']);
};