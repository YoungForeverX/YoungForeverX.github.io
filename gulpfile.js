const gulp = require("gulp")
// 用到的各个插件

const fontmin = require('gulp-fontmin')

function minifyFont(text, cb) {
    gulp
        .src('./public/fonts/*.ttf') //原字体所在目录
        .pipe(fontmin({
            text: text
        }))
        .pipe(gulp.dest('./public/fontsdest/')) //压缩后的输出目录
        .on('end', cb);
}

gulp.task('minify-ttf', (cb) => {
    var buffers = [];
    gulp
        .src(['./public/**/*.html']) //HTML文件所在目录请根据自身情况修改
        .on('data', function (file) {
            buffers.push(file.contents);
        })
        .on('end', function () {
            var text = Buffer.concat(buffers).toString('utf-8');
            minifyFont(text, cb);
        });
});

//压缩
gulp.task("zip", gulp.parallel('minify-ttf'))
