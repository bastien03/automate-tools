var gulp = require('gulp');
var run = require('gulp-run');

gulp.task('default', function() {
	console.log('1. `gulp.task()` -> create a task');
	console.log('2. `gulp.run()` -> run a task');
});

gulp.task('run', function() {
	run('echo Hello World').exec();
})