module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },

    connect: {
			server: {
				options: {
				    hostname: '*'
				}
			}
		},

    watch: {
      livereload: {
				files: ['scss/*.scss','*.html'],
				tasks: ['sass'],
				options: {
					livereload: true
				}
			}
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','connect','watch']);
}
