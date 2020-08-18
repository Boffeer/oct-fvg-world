module.exports = function() {
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('./build/static/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest('./build/static/js/'));
    });

    $.gulp.task('js:copy', () => {
        return $.gulp.src(['./dev/static/js/*.js',
                           '!./dev/static/js/libs.min.js'])
            .pipe($.gulp.dest('./build/static/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('js:dev', () => {
        return $.gulp.src(['./dev/static/js/main.js','./dev/static/js/*.js', '!./dev/static/js/slick.min.js', '!./dev/static/js/jquery.js'])
        .pipe($.gp.concat('main.js'))
        
        .pipe($.gp.babel({
            presets: ['@babel/env']
        }))


        // .pipe($.gp.eslint({
        //     rules: {
        //         strict: 2,
        //     },
        //     globals: [
        //         'Jquery',
        //         '$'
        //     ],
        //     envs: [
        //         'browser'
        //     ]
        // }))
        // .pipe($.gp.eslint.formatEach('compact'))


        .pipe($.gulp.dest('./build/static/js/'))
    })

    $.gulp.task('js:build', () => {
        return $.gulp.src(['./dev/static/js/*.js', '!./dev/static/js/slick.min.js', '!./dev/static/js/jquery.js'])

        .pipe($.gp.concat('main.js'))
        
        .pipe($.gp.babel({
            presets: ['@babel/env']
        }))

        .pipe($.gp.uglifyjs())
        .pipe($.gulp.dest('./build/static/js/'))
    })
};
