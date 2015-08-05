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
          files:  [ 'server/*.js', 'client/app/**/*.{jade,css}', 'client/app/**/*.js' ],
          tasks:  [ 'express:dev', 'jade', 'copy' ],
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
          src: [ 'bower_components/**/*', 'app/**/*.js' ],
          dest: '.tmp',
          expand: true
        },
      }
    //   concat: {
    //     options: {
    //       separator: ';'
    //     },
    //     dist: {
    //       src: ['src/**/*.js'],
    //       dest: '.js'
    //     }
    //   },
      // uglify: {
      //   options: {
      //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      //   },
      //   dist: {
      //     files: {
      //       'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
      //     }
      //   }
      // }
    });
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');

    // grunt.registerTask('server', ['concat']);

    grunt.registerTask('server', function (argument) {
        grunt.task.run([
          'express:dev',
          'copy',
          'jade',
          'watch',
        ]);
    });
};
