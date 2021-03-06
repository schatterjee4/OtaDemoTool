// Generated on 2015-10-21 using generator-angular-require 1.0.1
// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  var properties = {
    cdnBase: 'http://analytics.sabre.com/sdsdemo/dslab/otademotool_static'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/src/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      sass: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['sass', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/**/*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect().use(
                  '/node_modules',
                  connect.static('./node_modules')
              ),
              connect().use(
                '/app/styles',
                connect.static('./app/styles')
              ),
              connect().use(
                  '/widgets/img/airlineLogos',
                  connect.static('./bower_components/sabre-dev-studio-widgets/dist/widgets/img/airlineLogos')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: {
        src: [
          '<%= yeoman.app %>/src/{,*/}*.js'
        ]
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      server: {
        options: {
          map: true
        },
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath:  /\.\.\//
      },
      sass: {
      src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },

    // Compiles Sass to CSS
    sass: {
      options: {
          sourceMap: true
      },
      dist: {
          files: {
            '.tmp/styles/main.css': 'app/styles/main.scss'
          }
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/styles/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>'
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/**/*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: [
          '<%= yeoman.dist %>',
          '<%= yeoman.dist %>/images',
          '<%= yeoman.dist %>/styles'
        ]
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    cssmin: {
       dist: {
         files: {
           '<%= yeoman.dist %>/styles/main.css': [
             '.tmp/styles/{,*/}*.css',
             '<%= yeoman.app %>/styles/{,*/}*.css'
           ]
         }
       }
    },
    concat: {
       dist: {}
    },

    cdnify: {
      img: {
        options: {
          html: {
            'img[ng-src]': 'ng-src'
          },
          rewriter: function (url) {
            return url
                .replace('images', properties.cdnBase)
          }
        },
        files: [{
          cwd: '<%= yeoman.app %>',
          expand: true,
          src: 'src/**/*.html',
          dest: '.tmp/imagesCdnified'
        }]
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          // cwd: '<%= yeoman.app %>/scripts',
          src: ['<%= yeoman.app %>/src/**/*.js'],
          dest: '.tmp'
        }]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'images/{,*/}*.{webp}',
            'styles/fonts/*/*.*'
          ]
        }, {
          expand: true,
          cwd: '.',
          dest: '.tmp',
          src: ['bower_components/**/*']
        }, {
            expand: true,
            cwd: '.',
            dest: '.tmp',
            src: ['node_modules/**/*']
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: 'bower_components/bootstrap/dist',
          src: 'fonts/*',
          dest: '<%= yeoman.dist %>'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    replace: {
      linkToOptimizedJs: {
        src: 'dist/index.html',
        overwrite: true,
        replacements: [
          {
            from: /<script.*src=\".*require.js\".*<\/script>/g,
            to: '<script async src="otademotool.min.js"></script>'
          }
        ]
      }
    },

    requirejs: {
      dist: {
        options: grunt.file.readJSON('r.compiler.options.json')
      }
    },

    ngtemplates: {
      'otademoToolApp.templates': {
        cwd: '.tmp/imagesCdnified',
        src: 'src/**/*.html',
        dest: '.tmp/ngtemplates/templates.mod.js',
        options: {
          bootstrap:  function(module, templateCacheChargingScript) {
            return 'define(["angular"], function(angular) { ' +
                'angular.module("' + module + '", []).run(["$templateCache", function($templateCache) {' +
                templateCacheChargingScript + ' ' +
                '}]);' +
                '});';
          }
          , htmlmin: {
            collapseBooleanAttributes:      true,
            collapseWhitespace:             true,
            removeAttributeQuotes:          true,
            removeComments:                 true, // Only if you don't use comment directives!
            removeEmptyAttributes:          true,
            removeRedundantAttributes:      true,
            removeScriptTypeAttributes:     true,
            removeStyleLinkTypeAttributes:  true,
            keepClosingSlash:               true // needed for HTML5 closing slashes. Also for svg <line />. Without this option the SVG is broken, see https://github.com/kangax/html-minifier/pull/122
          }
        }
      }
    }
  });

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'sass',
      'autoprefixer:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('serve-fast', [
      'clean:server',
      'sass',
      'connect:livereload',
      'watch'
    ]);

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'sass',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cssmin',
    'filerev',
    'usemin',
    'cdnify:img',
    'ngtemplates',
    'requirejs:dist',
    'replace:linkToOptimizedJs'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'build'
  ]);
};
