(function(){
	'use strict';

	var gulp = require('gulp'); //Initialization of the plugin
	var sass = require('gulp-sass');
	var autoprefixer = require('gulp-autoprefixer');
	var concat = require('gulp-concat');
	var argv = require('yargs').argv;
	var gulpif = require('gulp-if');
	var cssmin = require('gulp-cssmin');
	var htmlmin = require('gulp-htmlmin');
	var livereload = require('gulp-livereload');

	
	var paths = {
		src: {
			html: './src/*.html',
			css: ['./src/css/vendors/*.css','./src/sass/**/*.scss'],
			images: './src/images/**/*',
			fonts: './src/css/fonts/*',
			js: ['./src/js/vendors/*.js', './src/js/base.js']
		},

		build: {
			root: './_build',
			css: './_build/css',
			images: './_build/images',
			fonts: './_build/css/fonts',
			js: './_build/js'
		}
	};

	function cssTask() {
		gulp.src(paths.src.css)
			.pipe(sass())
				.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
			.pipe(concat('base.min.css'))
			.pipe(gulpif((argv.prod), cssmin()))
			.pipe(gulp.dest(paths.build.css))
			.pipe(livereload());

	}

	function htmlTask() {
		gulp.src(paths.src.html)
			.pipe(gulpif((argv.prod), htmlmin({
				collapseWhitespase:true
			})))
			.pipe(gulp.dest(paths.build.root))
			.pipe(livereload());
	}

	function defaultTask() {
		livereload({
			start: true
		});


		gulp.watch(paths.src.html, ['html']);
		gulp.watch(paths.src.css, ['css']);
		gulp.watch(paths.src.images, ['images']);
		gulp.watch(paths.src.js, ['js']);
		gulp.watch(paths.src.fonts, ['fonts']);

	}

	function imagesTask() {
		gulp.src(paths.src.images)
			.pipe(gulp.dest(paths.build.images));
	}
	function jsTask() {
		gulp.src(paths.src.js)
			.pipe(concat('base.min.js'))
			.pipe(gulp.dest(paths.build.js))
			.pipe(livereload());

	}

	function fontsTask() {
		gulp.src(paths.src.fonts)
			.pipe(gulp.dest(paths.build.fonts));
	}

	gulp.task('default', ['html', 'css', 'images', 'js', 'fonts'], defaultTask);
	gulp.task('html', htmlTask);
	gulp.task('css', cssTask);
	gulp.task('images', imagesTask);
	gulp.task('js', jsTask);
	gulp.task('fonts', fontsTask);

	
	
}());