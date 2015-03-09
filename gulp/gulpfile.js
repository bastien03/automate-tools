var gulp = require('gulp');
var run = require('gulp-run');
var bowerFiles = require('main-bower-files');
var inject = require('gulp-inject');


gulp.task("copy-scripts", function(){
	gulp.src(
		[
			'./app/**/*.js'
		],
		{base: './app/'})
	.pipe(gulp.dest('build'));
});

gulp.task("inject-bower-includes", function(){
	gulp.src('app/index.html')
		.pipe(
			inject(
				gulp.src(
					bowerFiles(),
					{read: false}
				),
				{
					name: 'bower',
					relative: true,
					ignorePath: '/app/'
				}
			)
		)
		.pipe(gulp.dest('./build'));
});

gulp.task('default', ['copy-scripts', 'inject-bower-includes']);
