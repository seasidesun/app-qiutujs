var config = require('./config');

module.exports = function(grunt) {
    // require('jit-grunt')(grunt, {
    //   express: 'grunt-express-server'
    // });
    // grunt.loadNpmTasks('grunt-express-server');

    grunt.initConfig({
      // pkg: grunt.file.readJSON('package.json'),
      watch: {
        express: {
          files:  [ 'client/*.{js,css}', 'client/*.html' ],
          tasks:  [ 'express:dev'],
          options: {
            spawn: false,
            livereload: true
          }
        }
      },
      express: {
        options: {
          port: config.port
        },
        dev: {
          options: {
            script: 'app.js',
            debug: true
          }
        },
        prod: {
          options: {
            script: 'app.js'
          }
        }
      },
    //   jade: {
    //     compile: {
    //       options: {
    //         data: {
    //           debug: false
    //         }
    //       },
    //       files: [{
    //         expand: true,
    //         cwd: 'client',
    //         src: [
    //           'app/**/*.jade'
    //         ],
    //         // dest: '.tmp',
    //         dest: 'client',
    //         ext: '.html'
    //       }]
    //     }
    //   },
    //   copy: {
    //     build: {
    //       cwd: 'client',
    //       src: [ 'bower_components/**/*', 'app/**/*.{js,css}', 'components/**/*.js', '*.html' ],
    //       dest: '.tmp',
    //       expand: true
    //     },
    //   },
    //   concat: {
    //     options: {
    //       separator: ';'
    //     },
    //     js: {
    //       src: [ 'client/bower_components/angular/angular.js', 'client/bower_components/angular-ui-router/release/angular-ui-router.js', 'client/app/**/*.js', 'client/components/**/*.js' ],
    //       dest: '.tmp/dist/default.js'
    //     }
    //   },
      uglify: {
        dist: {
          option: {
            report: 'min'
          },
          files: {
            '.tmp/dist/default.ctcd.min.js': ['client/ctcd.js']
          }
        }
      },
      cssmin: {
         options: {
             keepSpecialComments: 0
         },
         compress: {
             files: {
                 '.tmp/dist/default.ctcd.min.css': ['client/ctcd.css']
             }
         }
      },
    //   jshint: {
    //       all: [ 'client/app/**/*.js', 'client/components/**/*.js' ],
    //   }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('server', function (argument) {
        grunt.task.run([
          'express:dev',
        //   'copy',
        //   'jade',
        //   'concat',
        //   'cssmin',
        //   'uglify',
          'watch'
        ]);
    });

    grunt.registerTask('build', function (argument) {
        grunt.task.run([
        //   'copy',
        //   'jade',
        //   'concat',
          'uglify',
          'cssmin'
        ]);
    });
};
