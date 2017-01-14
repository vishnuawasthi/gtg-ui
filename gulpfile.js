/**
 * Created by Dell on 1/13/2017.
 */

var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');

var browserSync = require('browser-sync').create();

gulp.task('js', function(){
    gulp.src('src/app/scripts/*.js')
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/scripts/'));
});

gulp.task('appStyle', function(){
    gulp.src('src/app/styles/*.css')
        .pipe(concat('app-styles.min.css'))
        .pipe(minify())
        .pipe(gulp.dest('build/styles/'));
});

gulp.task('imagemin', function() {
    var imgSrc = 'src/app/images/*.+(png|jpg|gif)',
        imgDst = 'build/images';

    gulp.src(imgSrc)
        .pipe(changed(imgDst))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
});




gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './',

        },
    });

    gulp.watch("src/app/styles/*.css", ['appStyle']);
    gulp.watch("src/app/scripts/*.js", ['js']);
    gulp.watch("src/app/templates/*.html").on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);


});

gulp.task('default',['js','appStyle','imagemin','browserSync'],function(){
});