module.exports = function() {
    $.gulp.task('php', () => {
        return $.gulp.src('./dev/static/php/**/*.*')
            .pipe($.gulp.dest('./build/static/php/'));
    }); 

    $.gulp.task('vendor', () => {
        return $.gulp.src('./dev/static/vendor/**/*.*')
            .pipe($.gulp.dest('./build/vendor/'));
    }); 

    $.gulp.task('textolite', () => {
        return $.gulp.src('./dev/textolite/**/*.*')
            .pipe($.gulp.dest('./build/edit/'));
    }); 
};