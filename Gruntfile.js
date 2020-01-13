module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            combine: {
                files: {
                    'css/main.min.css' : ['css/bootstrap.css', 'css/font-family.css','css/fontawesome.css','css/owl.carousel.css','css/owl.theme.default.css','css/style.css']
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'js/main.min.js' : ['js/jquery.js', 'js/bootstrap.js','js/owl.carousel.js','js/script.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['cssmin', 'uglify']);
};