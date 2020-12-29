module.exports = function() {
    $.gulp.task('libs', () => {
        return $.gulp.src('./dev/static/css/**/*.*')
            .pipe($.gulp.dest('./build/static/css/'));
    });
};