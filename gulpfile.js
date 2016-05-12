var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
/*var nunjucksRender = require('gulp-nunjucks-render');*/
// var path = require('path');

gulp.task('html-watcher', ['html'], reload);
gulp.task('reload', reload);

/*gulp.task('html', function () {
    return gulp.src('app/html/!*.html')
        // .pipe($.data(getDataForFile))
        .pipe(nunjucksRender({
            path: ['app/html/layouts'] // String or Array
        }))
        .pipe(gulp.dest('app'));
});*/

gulp.task('watch', function() {
    gulp.watch([
        'app/css/**/*.css',
        'app/!css/main.css',
        'app/js/**/*.js',
        'app/images/**/*.{png,jpg,jpeg,gif,svg}',
        'app/fonts/**/*.*'
    ], {
        interval: 800
    }).on('change', reload);

    gulp.watch(['app/html/*.html', 'app/html/**/*.html'], ['html-watcher']);
});

gulp.task('serve', function() {
    browserSync({
        notify: false,
        open: false,
        server: {
            baseDir: ['app']
        }
    });
    gulp.start(['watch']);
});

gulp.task('default', ['serve']);