module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dev: {
                options: {
                    includePaths: ['bower_components/foundation/scss']
                },
                files: {
                    'out/style.css': 'src/sass/style.scss'
                }
            }
        },

        concat: {
            dev: {
                src: [
                    'bower_components/fastclick/lib/fastclick.js',
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/foundation/js/foundation.min.js',
                    'bower_components/foundation/js/foundation/foundation.equalizer.js',
                    'bower_components/foundation/js/foundation/foundation.reveal.js',
                    'bower_components/handlebars/handlebars.min.js',
                    'bower_components/ember/ember.js',
                    'bower_components/ember-data/ember-data.js',
                    'src/js/jitter.js',
                    'src/js/**/*.js'
                ],
                dest: 'out/script.js'
            }
        },

        emberTemplates: {
            compile: {
                options: {
                    templateBasePath: /src\/templates\//
                },
                files: {
                    'out/templates.js': ['src/templates/**/*.hbs']
                }
            }
        },

        preprocess : {
            dev: {
                src : 'src/html/index.html',
                dest : 'out/index.html',
                options : {
                    context : {
                        env: 'DEVELOPMENT'
                    }
                }
            },
            dist: {
                src : 'src/html/index.html',
                dest : 'out/index.html',
                options : {
                    context : {
                        env: 'DISTRIBUTION'
                    }
                }
            }
        },

        cssmin: {
            dist: {
                files: {
                    'out/style.css': ['out/style.css']
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    'out/script.js': ['out/script.js','out/templates.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'concat', 'emberTemplates', 'preprocess:dev']);
    grunt.registerTask('distribution', ['sass', 'concat', 'emberTemplates', 'preprocess:dist', 'cssmin:dist', 'uglify:dist']);
};
