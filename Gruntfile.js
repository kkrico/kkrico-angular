module.exports = function (grunt) {

    grunt.initConfig({

        watch: {
            cssmin: {
                files: 'styles/styles.css',
                options: {
                    livereload: 35729
                }
            },
            concat: {
                files: 'scripts/**/*.js',
                tasks: ['concat:main']
            },
            uglify: {
                files: 'dist/js/app.js',
                options: {
                    livereload: true
                }
            },
            all: {
                files: ['**/*.html'],
                options: {
                    livereload: true
                }
            }
        },

        ngAnnotate: {
            main: {
                files: [
                    {
                        expand: true, src: ['scripts/**/*.js'], ext: '.js',
                        extDot: 'last'
                    }
                ]
            },
        },


        connect: {
            server: {

            }
        },

        cssmin: {
            main: {
                src: 'styles/styles.css',
                dest: 'dist/css/styles.min.css'
            },

            bootstrap: {
                src: 'node_modules/bootstrap/dist/css/bootstrap.css',
                dest: 'dist/css/bootstrap.min.css',
            }
        },

        copy: {
            font: {
                files: [
                    { expand: true, flatten: true, cwd: 'node_modules/bootstrap/dist/fonts/', src: ["**"], dest: 'dist/fonts/' }
                ]
            }
        },

        concat: {
            options: {
                separator: '\n'
            },
            main: {
                src: 'scripts/**/*.js',
                dest: 'dist/js/app.js'
            },

            angular: {
                options: {
                    separator: '\n'
                },
                files: {
                    'dist/js/angular.js': ['node_modules/angular/angular.js', 'node_modules/angular-route/angular-route.js'],
                }
            }
        },

        uglify: {
            options: {
                sourceMap: true,
            },
            main: {
                files: {
                    'dist/js/app.min.js': ['dist/js/app.js'],
                }
            },
            angular: {
                files: {
                    'dist/js/angular.min.js': ['dist/js/angular.js'],
                }
            }
        }
    });

    grunt.registerTask('css', ['cssmin']);
    grunt.registerTask('font', ['copy:font']);
    grunt.registerTask('js', ['concat', 'uglify']);
    grunt.registerTask('default', ['css', 'font', 'js', 'uglify', 'ngAnnotate', 'connect', 'watch']);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-ng-annotate');
};