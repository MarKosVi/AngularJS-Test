const { watch } = require('gulp');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var svgmin = require('gulp-svgmin');


function imgMin() {
  return gulp
    .src('statics/imagens/*')
    .pipe(imagemin())
    .pipe(gulp.dest("public/static/imagens"))
}

function svgMin() {
  return gulp
    .src('statics/icones/*')
    .pipe(svgmin())
    .pipe(gulp.dest("public/static/icones"))
}



gulp.task('svgMin', svgMin);
gulp.task('imgMin', imgMin);

gulp.task('watch', () => {
  gulp.watch('statics/imagens/*', imgMin);
  gulp.watch('statics/icones/*', svgMin);
});

gulp.task("default", gulp.series("imgMin", "svgMin", "watch"));