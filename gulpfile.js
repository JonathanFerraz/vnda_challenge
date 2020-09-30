'use strict';

const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const del = require('del');
const gulp = require('gulp');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const uglify = require('gulp-terser');

// Suporte para navegadores
const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

// Gulp task para minificar os arquivos CSS
gulp.task('styles', function () {
  return gulp.src('./src/scss/*.scss')
    // Compilar SCSS
    .pipe(sass({
      outputStyle: 'nested',
      precision: 10,
      includePaths: ['.'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    // Auto-prefix css compativeis com diversos navegadores
    .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    // Minificar o arquivo
    .pipe(csso())
    // Output
    .pipe(gulp.dest('./dist/css'))
});

// Gulp task para minificar os arquivos Javascript
gulp.task('scripts', function() {
  return gulp.src('./src/js/**/*.js')
    // Concatenar os arquivos .js
    .pipe(concat('scripts.js'))
    // Minificar o arquivo
    .pipe(uglify())
    // Output
    .pipe(gulp.dest('./dist/js'))
});

// Gulp task para minificar os arquivos HTML
gulp.task('pages', function() {
  return gulp.src(['./src/**/*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('images', function() {
  return gulp.src(['./src/assets/**/*.{gif,jpg,png,svg}'])
    .pipe(gulp.dest('./dist/assets'));
});


// Remover pasta /dist
gulp.task('clean', () => del(['dist']));

gulp.task('watch', function(){
  gulp.watch('./src/scss/*.scss', gulp.series('styles')),
  gulp.watch('./src/js/**/*.js', gulp.series('scripts')),
  gulp.watch('./src/assets/**/*.{gif,jpg,png,svg}', gulp.series('images'));     
  gulp.watch('./src/**/*.html', gulp.series('pages'));    
});

gulp.task('default', gulp.series('styles', 'scripts', 'images', 'pages'));
