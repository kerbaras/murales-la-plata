module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        sourceMap : true
      },
      app: {
        src: 'src/AppBundle/Resources/public/js/**/*.js',
        dest: 'web/dist/app.min.js'
      }
    },
    less: {
      app: {
        options: {
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
            new (require('less-plugin-clean-css'))({advanced: true, s1: true, sourceMap: true})
          ]
        },
        files: {
          "web/dist/styles.min.css": "src/AppBundle/Resources/public/less/main.less"
        }
      }
    },
    copy: {
      app: {
        expand: true,
        cwd: 'src/AppBundle/Resources/public/templates/',
        src: '**',
        dest: 'web/dist/templates/',
      },
    },
    watch: {
      scripts: {
        files: ['src/AppBundle/Resources/public/js/**/*.js'],
        tasks: ['uglify:app']
      },
      styles: {
        files: ['src/AppBundle/Resources/public/less/**/*.less'],
        tasks: ['less:app']
      },
      templates: {
        files: ['src/AppBundle/Resources/public/templates/**/*.html'],
        tasks: ['copy:app']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "less" task.
  grunt.loadNpmTasks('grunt-contrib-less');

  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Load the plugin that provides the "copy" task.
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'less']);

};
