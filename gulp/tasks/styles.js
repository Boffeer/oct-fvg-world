module.exports = function () {
    $.gulp.task('styles:build', () => {
        return $.gulp.src('./dev/static/stylus/main.styl')
            .pipe($.gp.stylus({
                'include css': true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            // .pipe($.gp.csscomb())

            .pipe($.gp.criticalCss())

            .pipe($.gp.csso())
            .pipe($.gp.uncss({
                html: ['./build/index.html'],
                ignore: [
                '.slick-next:before',
                '.slick-prev:before',
                'button.slick-arrow',
                'li.slick-active',
                '.slick-dots ',
                ]
            }))

            .pipe($.gulp.dest('./build/static/css/'))
    });

    // $.gulp.task('cssmod', () => {
    //     return $.gulp.src('./build/static/css/**')
    //         .pipe($.gp.csscomb())
    // })

    $.gulp.task('styles:dev', () => {
        return $.gulp.src('./dev/static/stylus/main.styl')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.stylus({
                'include css': true
            }))
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'Stylus',
                    message: error.message
                };
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gulp.dest('./build/static/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
