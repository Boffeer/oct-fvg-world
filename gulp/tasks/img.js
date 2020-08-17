module.exports = function() {
  $.gulp.task('img:dev', () => {
    return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif}')
      .pipe($.gulp.dest('./build/static/img/'));
  });

  $.gulp.task('webp:dev', () => {
    return $.gulp.src('./dev/static/img/content/**/*.{png,jpg}')
    .pipe($.gp.webp())
    .pipe($.gulp.dest('./build/static/img/'));
  })

  $.gulp.task('webp:build', () => {
    return $.gulp.src('./dev/static/img/content/**/*.{png,jpg}')
    .pipe($.gp.webp({
      quality: 40,
    }))
    .pipe($.gulp.dest('./build/static/img/'));
  })
  
  $.gulp.task('img:build', () => {
    return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif}')
      .pipe($.gp.tinypng('RTZKR6FSSTWY2k89lCRZWvwT3lcGscJv'))
      .pipe($.gulp.dest('./build/static/img/'));
  });


  $.gulp.task('svg:copy', () => {
    return $.gulp.src('./dev/static/img/general/*.svg')
      .pipe($.gulp.dest('./build/static/img/general/'));
  });

  $.gulp.task('videos:copy', () => {
    return $.gulp.src('./dev/static/videos/*.*')
      .pipe($.gulp.dest('./build/static/videos/'));
  })
};