module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-wiredep');

  // Project configuration.
  grunt.initConfig({
    wiredep: {

      task: {

        src: [
          'app/index.html'
        ]
      }
    }
  });

  grunt.registerTask('default', ['wiredep']);

}
