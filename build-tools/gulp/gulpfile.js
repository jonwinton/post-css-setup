var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var vars = require('postcss-simple-vars');
var map = require('postcss-map');

// Get the root dir and work from there
var path = require('path');
var rootDir = path.resolve(__dirname + '../../../');

var cssDir = path.resolve(rootDir + '/styles/');
var outputDir = path.resolve(rootDir + '/dist/');
var configDir = path.resolve(cssDir + '/config/');


var configVariables = require(configDir);


// Maps options
var opts = {
    basePath: cssDir,
    maps: configVariables
};

gulp.task('css', function() {
    var processors = [
        map(opts),
        autoprefixer({ browsers: ['last 1 version'] }),
        precss
    ];

    return gulp.src(cssDir + '/styles.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest(rootDir + '/dist'));
});
