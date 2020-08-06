const gulp = require("gulp");
const webpack = require("webpack-stream");
const sass = require("gulp-sass");

sass.compiler = require("node-sass");

const mainModule = {
  js: () => {
    return gulp
      .src("./src/js/main.jsx")
      .pipe(webpack(require("./webpack.config.js")))
      .pipe(gulp.dest("./dist/js"));
  },
  watchJs: () => {
    gulp.watch("./src/js/**", mainModule.js);
  },
  watchHtml: () => {
    gulp.watch("./src/*.html", mainModule.js);
  },
  css: () => {
    return gulp
      .src("./src/sass/master.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(gulp.dest("./dist/css"));
  },
  watchCss: () => {
    gulp.watch("./src/sass/*.scss", mainModule.css);
  }
};

module.exports.default = gulp.parallel(
  mainModule.js,
  mainModule.watchJs,
  mainModule.watchHtml,
  mainModule.css,
  mainModule.watchCss
);
