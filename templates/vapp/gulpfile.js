var del = require('del'),
    gulp = require('gulp');
const ENV = 'dist'


gulp.task('clean', function(callback) {
    del.sync([ENV + '/**/**']);
    callback();
});


gulp.task('copy', function(callback) {
    gulp.src('./src/*')
        .pipe(gulp.dest(ENV))
    callback()
})