'use strict';

	var poststylus = function() {
		return require('poststylus')(['lost'])
	};

var enviro = "test";

	module.exports = function(grunt) {

		grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),

			stylus: {
				dev: {
					options: {
						compress: false,
						use: [
							require('nib'),
							require('rupture'),
							poststylus
						]
					},
					files: {
						'css/segments.lib.css': 'stylus/segments.lib.styl',
						'css/wc-segments.lib.css': 'stylus/wc-segments.lib.styl'
					}
				},
				dist: {
					options: {
						compress: true,
						use: [
							require('nib'),
							require('rupture'),
							poststylus
						]
					},
					files: {
						'css/segments.lib.min.css': 'stylus/segments.lib.styl',
						'css/wc-segments.lib.min.css': 'stylus/wc-segments.lib.styl'
					}
				}
			},

			watch: {
				stylus: {
					files: ['stylus/*.styl'],
					tasks: 'stylus',
					options: {
						livereload: true,
					},
				}
			}
		});

		require('load-grunt-tasks')(grunt);

		grunt.registerTask('default',['watch']);
		grunt.registerTask('create', ['stylus:dev', 'stylus:dist']);

	};
