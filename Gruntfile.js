module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			livereload: {
				files: ['scss/*.scss','*.html'],
				tasks: ['sass'],
				options: {
					livereload: true
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
    sass: {
      dist: {
        files: {
        'css/style.css': 'scss/style.scss'
        }
      }
	  }
	});
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['sass', 'connect', 'watch']);
};
