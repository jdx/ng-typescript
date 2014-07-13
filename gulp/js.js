var gulp = require('gulp')
var tsc  = require('gulp-typescript-compiler')

gulp.task('js', function () {
  return gulp.src('ng/**/*.ts')
    .pipe(tsc())
    .pipe(gulp.dest('assets'))
})

gulp.task('watch:js', ['js'], function () {
  gulp.watch('ng/**/*.ts', ['js'])
})
