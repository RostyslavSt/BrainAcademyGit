(function(){
	'use strict';

	var gulp = require('gulp'); //Initialization of the plugin
	var sass = require('gulp-sass');
	var autoprefixer = require('gulp-autoprefixer');
	
	var path = {
		src: {
			html: './src/*.html',
			css: './src/sass/**/*.scss',
			js: './src/js/**/*.js'
		},

		build: {
			root: './_build',
			css: './_build/css',
			js: './_build/js'
		}
	};

	function cssTask() {
		gulp.src(path.src.css)
			.pipe(sass())
				.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
			.pipe(gulp.dest(path.build.css));
	}

	function htmlTask() {
		gulp.src(path.src.html)
			.pipe(gulp.dest(paths.build.root));
	}

	function defaultTask() {
		gulp.watch(path.src.html, ['html']);
		gulp.watch(path.src.css, ['css']);
	}

	gulp.task('default', ['html', 'css'], defaultTask);
	gulp.task('html', htmlTask);
	gulp.task('css', cssTask);
	
	
}());