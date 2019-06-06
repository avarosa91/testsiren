const gulp = require('gulp'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    csso = require('gulp-csso'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel');

gulp.task('js', function() {
    gulp.src(['assets/js/index.js'])
        .pipe(babel({presets: ['es2015']}))
        .pipe(gulp.dest('build/javascript/'))
});

gulp.task('sass', function () {
    gulp.src('assets/scss/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.min.css'))
        .pipe(csso())
        .pipe(gulp.dest('build/css/'));
});

gulp.task('img', function() {
    gulp.src('assets/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img/'))

});

gulp.task('fonts', function () {
    gulp.src('assets/fonts/**/*')
        .pipe(gulp.dest('build/fonts/'))
});

gulp.task('build', ['sass', 'js', 'img', 'fonts']);

gulp.task('watch', function () {
    gulp.watch('assets/scss/*.scss', ['sass']);
    gulp.watch('assets/js/*.js', ['js']);
    gulp.watch('assets/img/*', ['img']);
    gulp.watch('assets/fonts/*', ['fonts']);
});
