var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var map = require('postcss-map');
var pxtorem = require('postcss-pxtorem');

// Get the root dir and work from there
var path = require('path');
var rootDir = path.resolve(__dirname + '../../../');

var cssDir = path.resolve(rootDir + '/styles/');
var outputDir = path.resolve(rootDir + '/dist/');
var configDir = path.resolve(cssDir + '/config/');



var configVariables = require(configDir);
var pxToRemConfig = require(cssDir + '/config/pxtorem');


// Maps options
var opts = {
    basePath: cssDir,
    maps: configVariables
};

gulp.task('css', function() {
    var processors = [
        map(opts),
        autoprefixer({ browsers: ['last 1 version'] }),
        precss,
        pxtorem(pxToRemConfig)
    ];

    return gulp.src(cssDir + '/styles.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest(rootDir + '/dist'));
});
