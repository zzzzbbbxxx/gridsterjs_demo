const { src, dest, watch, series, parallel } = require('gulp');
const $ = require('gulp-load-plugins')();   // 避免命名污染

// 清空编译文件夹
function clean() {
    return src('dist/', {read: false})  // 不读取文件，避免文件被占用的清空下无法删除
        .pipe($.clean());
}

// 编译js
function jsPackage() {
    return src('src/js/**/*.js')
        .pipe($.uglify())
        .pipe(dest('dist/js'));
}

// 编译scss
function scssPackage() {

    return src('src/scss/**/*.scss')
        .pipe($.sass({"bundleExec": true}))
        .pipe(dest('dist/css/'));
}

function html() {
    return src('src/html/**/*.html')
        .pipe(dest("dist/html"));
}

function copyPlugin() {
    return src('src/plugins/**/*')
        .pipe(dest('dist/plugins'));
}


function build(cb) {
    series(clean, parallel(scssPackage, jsPackage, html, copyPlugin));
    cb();
}

// 监听文件
watch('src/**/*.*', series(clean, parallel(scssPackage, jsPackage, html, copyPlugin)));

module.exports.scssPackage = scssPackage;
module.exports.jsPackage = jsPackage;
module.exports.clean = clean;
exports.default = build;
