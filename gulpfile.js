const gulp = require("gulp");
const htmlmin = require('gulp-htmlmin');
const cssClean = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const imagemin = require("gulp-imagemin");
const connect = require("gulp-connect");

const app = {
    src: "src/",
    dist: "dist/"
}

// 处理html
gulp.task("html", function () {
    gulp.src(app.src + "pages/*.html")
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(app.dist + "pages/"))
        .pipe(connect.reload());
})

// 处理css
gulp.task("css", function () {
    gulp.src(app.src + "css/*.css")
        .pipe(cssClean())
        .pipe(gulp.dest(app.dist + "css/"))
        .pipe(connect.reload());
})
gulp.task("css2", function () {
    gulp.src(app.src + "css/shaixuanqu/*.css")
        .pipe(cssClean())
        .pipe(gulp.dest(app.dist + "css/shaixuanqu/"))
        .pipe(connect.reload());
})

// 处理js
gulp.task('js', function () {
    gulp.src(app.src + "js/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        })).pipe(uglify()).pipe(gulp.dest(app.dist + "js/"))
        .pipe(connect.reload());
});

// 处理图片
gulp.task("img-gouwuche",function(){
    gulp.src(app.src+"images/gouwuche/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest(app.dist+"images/gouwuche/"))
    .pipe(connect.reload());
});
gulp.task("img-public",function(){
    gulp.src(app.src+"images/public/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest(app.dist+"images/public/"))
    .pipe(connect.reload());
});
gulp.task("img-register",function(){
    gulp.src(app.src+"images/register/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest(app.dist+"images/register/"))
    .pipe(connect.reload());
});
gulp.task("img-ribenguan",function(){
    gulp.src(app.src+"images/ribenguan/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest(app.dist+"images/ribenguan/"))
    .pipe(connect.reload());
});
gulp.task("img-xiangqing",function(){
    gulp.src(app.src+"images/xiangqing/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest(app.dist+"images/xiangqing/"))
    .pipe(connect.reload());
});
gulp.task("img-xiangqing1",function(){
    gulp.src(app.src+"images/xiangqing1/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest(app.dist+"images/xiangqing1/"))
    .pipe(connect.reload());
});
gulp.task("img-zhuce",function(){
    gulp.src(app.src+"images/zhuce/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest(app.dist+"images/zhuce/"))
    .pipe(connect.reload());
});


//处理其他
gulp.task("img2",function(){
    gulp.src(app.src+"img/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest(app.dist+"img/"))
    .pipe(connect.reload());
});
gulp.task("img3",function(){
    gulp.src(app.src+"img/Iconfont/font_9zvzjt7k7wb6s9k9/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest(app.dist+"/img/Iconfont/font_9zvzjt7k7wb6s9k9/"))
    .pipe(connect.reload());
});
gulp.task("img4",function(){
    gulp.src(app.src+"img/Iconfont/*.*")
    .pipe(gulp.dest(app.dist+"img/Iconfont/"))
    .pipe(connect.reload());
});
gulp.task("font",function(){
    gulp.src(app.src+"font/*.*")
    .pipe(gulp.dest(app.dist+"font/"))
    .pipe(connect.reload());
});
gulp.task("font2",function(){
    gulp.src(app.src+"font/download (5)/font_7jyb9hgif2n/*.*")
    .pipe(gulp.dest(app.dist+"font/download (5)/font_7jyb9hgif2n/"))
    .pipe(connect.reload());
});
gulp.task("font3",function(){
    gulp.src(app.src+"font/iconfont/*.*")
    .pipe(gulp.dest(app.dist+"font/iconfont/"))
    .pipe(connect.reload());
});
gulp.task("font4",function(){
    gulp.src(app.src+"font/iconfont/jiantou/*.*")
    .pipe(gulp.dest(app.dist+"font/iconfont/jiantou/"))
    .pipe(connect.reload());
});
gulp.task("font5",function(){
    gulp.src(app.src+"font_rx71ur82t4/*.*")
    .pipe(gulp.dest(app.dist+"font_rx71ur82t4/"))
    .pipe(connect.reload());
});

// build 构建生产环境的代码
gulp.task("build",['html','css','css2','js','img-gouwuche','img-public','img-register','img-ribenguan','img-xiangqing','img-xiangqing1','img-zhuce','img2','img3','img4','font','font2','font3','font4','font5']);

//结合实时服务器 一起使用
gulp.task("server",function(){
    connect.server({
        root:"src",
        port:1111,
        livereload:true
    });
    // 监听
    gulp.watch("src/pages/*.html",['html']);
    gulp.watch("src/css/*.css",['css']);
    gulp.watch("src/js/*.js",['js']);
    gulp.watch("src/images/*.*",["img"]);
})