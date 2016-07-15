var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('./server/tsconfig.json');

gulp.task('typescript_compile_server', ['install_typings'], function () {
    return gulp.src('server/**/*.ts').pipe(ts(tsProject)).pipe(gulp.dest('release/server'));
});

var gulpTypings = require("gulp-typings");

gulp.task("install_typings", function () {
    return gulp.src("./server/typings.json").pipe(gulpTypings());
});

gulp.task('default', ['install_typings', 'typescript_compile_server']);

var nodemon = require('gulp-nodemon');

gulp.task('dev_server', function () {
    nodemon({
        script: 'release/server/server.js'
    })
});
