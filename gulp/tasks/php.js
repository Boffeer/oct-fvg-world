module.exports = function() {
    $.gulp.task('php', () => {
        return $.gulp.src('./dev/static/php/**/*.*')
            .pipe($.gulp.dest('./build/static/php/'));
    }); 
};