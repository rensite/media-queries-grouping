const   gulp            = require('gulp'),
        postcss         = require('gulp-postcss'),
        fs              = require('fs');

const mqpacker = require('postcss-sort-media-queries');
const   outputDir = 'build';
const   inputDir = 'src';


function css () {
    return gulp.src(inputDir + '/css/artemide.css')
        .pipe(postcss([ mqpacker() ]))
        .pipe(gulp.dest(outputDir + '/css'))
}

gulp.task('group', css);