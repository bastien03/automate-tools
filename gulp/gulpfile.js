var gulp = require('gulp');
var run = require('gulp-run');
var watch = require('gulp-watch');

gulp.task('default', function() {
	console.log('1. `gulp.task()` -> create a task');
	console.log('2. `gulp.run()` -> run a task');
	console.log('3. `gulp.watch()` -> watch files');
	console.log('4. `gulp.src()` -> matchs files');
	console.log('5. `gulp.dest()` -> write files');
});

gulp.task('run', function() {
	run('echo Hello World').exec();
})

gulp.task('watch', function() {
	watch('gulpfile.js')
		.pipe(run('echo gulpfile.js has been changed')).exec()
})

gulp.task('src-dest', function() {
	gulp.src('app/index.html')
		.pipe(gulp.dest('build/'));
})