const { src, dest, watch, series, parallel } = require('gulp');
const $ = require('gulp-load-plugins')();   // 避免命名污染
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

// 清空编译文件夹
function clean() {
    return src('dist/', {read: false, allowEmpty: true})  // 不读取文件，避免文件被占用的清空下无法删除
        .pipe($.clean({force: true}));
}

// 编译js
function jsPackage() {
    return src('src/js/**/*.js')
        .pipe($.uglify())
        .pipe(dest('dist/js'));
}

// 编译sass, 输出到css文件夹
function scssPackage() {
    return src('src/scss/**/*.scss')
        .pipe($.sass({"bundleExec": true}))
        .pipe(dest('src/css/'))
        .pipe(reload({stream: true})); // browser-sync重载
}

function html() {
    return src('src/html/**/*.html')
        .pipe(dest("dist/html"));
}

function copyPlugin() {
    return src('src/plugins/**/*')
        .pipe(dest('dist/plugins'));
}


// 执行构建
function build() {
    return series(clean, parallel(scssPackage, jsPackage, html, copyPlugin));
}

// 监听文件
// watch('src/**/*.*', build());

function test(cb) {
    console.log('test');
    cb();
}

// 实时预览
function server() {
    scssPackage();
    browserSync.init({
        server: {
            baseDir: ['./src','./src/html'], // 选中 当前目录下 src目录作为初始化目录
            index: 'html/index.html'
        }
    })
    // 热更新 scss
    watch('src/scss/**/*.scss', scssPackage);
    // 非html和scss编译结果 重载
    watch(['src/**/*','!src/css/','!src/html'],).on('change', reload);

    // 重载整个html
    watch('src/html/**/*.html').on('all', reload);
}



module.exports.scssPackage = scssPackage;
module.exports.jsPackage = jsPackage;
module.exports.clean = clean;
exports.default = build();
exports.server = server;
