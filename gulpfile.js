const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-cleancss');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
  return gulp.src('./assets/styles/scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./assets/styles/css'));
});

gulp.task('watch', gulp.series('sass', () => {
  gulp.watch('assets/styles/scss/*.scss', gulp.series('sass'));
}));