var
gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
cssnano = require('gulp-cssnano'),
sassLint = require('gulp-sass-lint'),
rename = require('gulp-rename'),
sourcemaps = require('gulp-sourcemaps'),
sassPath = 'scss/portfolio.scss';

// Gulp help instructions triggered as Gulp default task
gulp.task('help', function() {
  console.log('develop - Watch sass files and generate unminified CSS for development');
  console.log('test  - Lint Sass');
  console.log('build  - Lint Sass files and generate minified CSS for production');
});

// Provide details of Sass errors
function throwSassError(sassError) {
  throw new gutil.PluginError({
    plugin: 'sass',
    message: util.format(
      "Sass error: '%s' on line %s of %s",
      sassError.message,
      sassError.line,
      sassError.file
    )
  });
}

// Lints Sass and provides errors
gulp.task('lint:sass', function() {
  return gulp.src('scss/**/*.s+(a|c)ss')
    .pipe(sassLint({
      options: {
          configFile: '.sass-lint.yml'
      }
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

// Build Sass for local development
gulp.task('sass:develop', function() {
  return gulp.src(sassPath)
    .pipe(sourcemaps.init())
    .pipe(sass({ style: 'expanded', errLogToConsole: true }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(sourcemaps.write('maps/'))
    .pipe(gulp.dest('build/css/'))
});

// Build Sass for production
gulp.task('sass:build', function() {
  return gulp.src(sassPath)
    .pipe(sass({
      style: 'compressed',
      errLogToConsole: true,
      omitSourceMapUrl: true,
      onError: throwSassError
    }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(gulp.dest('build/css/'))
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/css/'));
});

// Gulp default tasks
gulp.task('default', ['help']);
gulp.task('develop', ['watch', 'sass:develop']);
gulp.task('test', ['lint:sass']);
gulp.task('build', ['lint:sass', 'sass:build']);
