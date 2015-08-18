var config = require('./server/config');

module.exports = function(grunt) {
    // require('jit-grunt')(grunt, {
    //   express: 'grunt-express-server'
    // });
    // grunt.loadNpmTasks('grunt-express-server');

    grunt.initConfig({
      // pkg: grunt.file.readJSON('package.json'),
      watch: {
        express: {
          files:  [ 'server/*.js', 'client/app/**/*.{jade,css}', 'client/app/**/*.js', 'client/components/**/*.js', 'client/index.html' ],
          tasks:  [ 'express:dev', 'jade', 'copy', 'concat', 'uglify' ],
          options: {
            spawn: false,
            livereload: true
          }
        }
      },
      express: {
        options: {
          port: config.PORT
        },
        dev: {
          options: {
            script: 'server/single_core.js',
            debug: true
          }
        },
        prod: {
          options: {
            script: 'server/single_core.js'
          }
        }
      },
      jade: {
        compile: {
          options: {
            data: {
              debug: false
            }
          },
          files: [{
            expand: true,
            cwd: 'client',
            src: [
              'app/**/*.jade'
            ],
            dest: '.tmp',
            ext: '.html'
          }]
        }
      },
      copy: {
        build: {
          cwd: 'client',
          src: [ 'bower_components/**/*', 'app/**/*.{js,css}', 'components/**/*.js', '*.html' ],
          dest: '.tmp',
          expand: true
        },
      },
      concat: {
        options: {
          separator: ';'
        },
        js: {
          src: [ 'client/app/**/*.js', 'client/components/**/*.js', 'bower_components/angular/angular.js', 'bower_components/angular-ui-router/release/angular-ui-router.js' ],
          dest: '.tmp/dist/default.js'
        }
      },
      uglify: {
        jsuglify: {
          option: {
            mangle: false
          },
          files: {
            '.tmp/dist/default.min.js': ['.tmp/dist/default.js']
          }
        }
      },
      cssmin: {
         options: {
             keepSpecialComments: 0
         },
         compress: {
             files: {
                 '.tmp/dist/default.min.css': [ 'client/app/**/*.css', 'client/components/**/*.css' ]
             }
         }
      },
      jshint: {
          all: [ 'client/app/**/*.js', 'client/components/**/*.js' ],
      }

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
          'copy',
          'jade',
          'concat',
          'uglify',
          'cssmin',
          'watch',
        ]);
    });

    grunt.registerTask('build', function (argument) {
        grunt.task.run([
          'jade'
        //   'concat'
        ]);
    });

    grunt.registerTask('test', function (argument) {
        grunt.task.run([
          'jshint'
        //   'concat'
        ]);
    });
};
