const { watch } = require('gulp');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var svgmin = require('gulp-svgmin');


function imgMin() {
  return gulp
    .src('src/static/imagens/*')
    .pipe(imagemin())
    .pipe(gulp.dest("src/static/minified/img"))
}

function svgMin() {
  return gulp
    .src('src/static/icones/*')
    .pipe(svgmin())
    .pipe(gulp.dest("src/static/minified/svg"))
}



gulp.task('svgMin', svgMin);
gulp.task('imgMin', imgMin);

gulp.task('watch', () => {
  gulp.watch('src/static/imagens/*', imgMin);
  gulp.watch('src/static/icones/*', svgMin);
});

gulp.task("default", gulp.series("imgMin", "svgMin", "watch"));