let gulp = require('gulp')
let rev = require('gulp-rev')
let concat = require('gulp-concat')
let rename = require('gulp-rename')
let replace = require('gulp-replace')
// let replaceRev = require('gulp-rev-manifest-replace')
let clean = require('gulp-clean')
let uglify = require('gulp-uglify')
let autoprefixer = require('gulp-autoprefixer')
let cssnano = require('gulp-cssnano')
let htmlmin = require('gulp-htmlmin')
let inject = require('gulp-inject')
let file = require('gulp-file')

let stylus = require('gulp-stylus')
let pug = require('gulp-pug')

let rollup = require('rollup')
let babel = require('rollup-plugin-babel')
let alias = require('rollup-plugin-alias')
let commonjs = require('rollup-plugin-commonjs')
let noderesolve = require('rollup-plugin-node-resolve')

let browserSync = require('browser-sync')
let server = browserSync.create({
  // ui: {
  //     port: 3000
  // }
})

let path = require('path')

let resolve = (...paths) => path.join(__dirname, ...paths)

let rollme = () => rollup
  .rollup({
    input: paths.js.entry,
    plugins: [
      babel({
        presets: [ [ 'env', { modules: false } ] ],
        exclude: 'node_modules/**',
        babelrc: false
      }),
      alias({
        resolve: [ '.js' ],
        '@': resolve('src/js')
      }),
      commonjs(),
      noderesolve()
    ]
  })
  .then(bundle => bundle.generate({
    format: 'iife',
    name: 'main'
  }))

let dirs = {
  src: resolve('src'),
  temp: resolve('temp'),
  dist: resolve('/')
}

let paths = {
  js: {
    entry: dirs.src + '/js/main.js',
    all: dirs.src + '/js/**/*.js'
  },
  stylus: {
    entry: [ dirs.src + '/stylus/main.styl', '!' + dirs.src + '/stylus/imports', '!' + dirs.src + '/stylus/components' ],
    all: dirs.src + '/stylus/**/*.styl'
  },
  pug: {
    entry: [ dirs.src + '/pug/**/*.pug' , '!' + dirs.src + '/pug/includes', '!' + dirs.src + '/pug/layouts'],
    all: dirs.src + '/pug/**/*.pug'
  },
  static: {
    entry: [ dirs.src + '/**/static/**' ],
    all: dirs.src + '/**/static/**'
  }
}

let serveClean = done => gulp
  .src(dirs.temp, { read: false, allowEmpty: true })
  .pipe(clean())

let serveJs = done => rollme()
  .then(gen => file('main.js', gen.code, { src: true })
    .pipe(gulp.dest(dirs.temp))
    .pipe(server.stream()))

let serveStylus = done => gulp
  .src(paths.stylus.entry)
  .pipe(stylus())
  .pipe(autoprefixer())
  .pipe(gulp.dest(dirs.temp))
  .pipe(server.stream())

let servePug = done => gulp
  .src(paths.pug.entry, '!./pug/layout.pug')
  .pipe(pug({
    pretty: true,
    basedir: __dirname + '/src/pug'
  }))
  .pipe(inject(gulp.src([
    '**/*.css',
    '**/*.js'
  ], {
    cwd: dirs.temp,
    read: false
  }), {
    addRootSlash: false
  }))
  .pipe(gulp.dest(dirs.temp))
  .pipe(server.stream())

let serveStatic = done => gulp
  .src(paths.static.entry, {base: dirs.src})
  .pipe(gulp.dest(dirs.temp))

let serveWatch = done => {
  gulp.watch(paths.js.all, serveJs)
  gulp.watch(paths.stylus.all, serveStylus)
  gulp.watch(paths.pug.all, servePug)
  gulp.watch(paths.static.all, serveStatic).on('change', server.reload)
  done()
}

let serveStart = done => {
  server.init({
    server: {
      baseDir: dirs.temp
    },
    open: false,
    tunnel: false,
    notify: false
  })
  done()
}

let serve = gulp.series(serveClean, serveJs, serveStylus, servePug, serveStatic, serveWatch, serveStart)

let buildClean = done => gulp
  .src(dirs.dist, { read: false, allowEmpty: true })
  .pipe(clean())

let buildJs = done => rollme()
  .then(gen => file('main.js', gen.code, { src: true })
    .pipe(uglify())
    // .pipe(rev())
    .pipe(gulp.dest(dirs.dist)))

let buildStylus = done => gulp
  .src(paths.stylus.entry)
  .pipe(stylus())
  .pipe(autoprefixer())
  .pipe(concat('main.css'))
  .pipe(cssnano())
  // .pipe(rev())
  // .pipe(gulp.dest(dirs.dist))
	// .pipe(rev.manifest())
  .pipe(gulp.dest(dirs.dist))

// let manifest = require('./temp/rev-manifest.json');
let buildPug = done => gulp
  .src(paths.pug.entry)
  .pipe(pug({
    pretty: true,
    basedir: __dirname + '/src/pug'
  }))
  .pipe(inject(gulp.src([
    '**/*.css',
    '**/*.js'
  ], {
    cwd: dirs.dist,
    read: false
  }), {
    addRootSlash: false
  }))
  .pipe(htmlmin({
    minifyJS: true,
    minifyCSS: true,
    removeComments: true,
    collapseWhitespace: true
  }))
  .pipe(gulp.dest(dirs.dist))

let buildStatic = done => gulp
  .src(paths.static.entry, { base: dirs.src })
  .pipe(gulp.dest(dirs.dist))

let build = gulp.series(buildJs, buildStylus, buildStatic, buildPug)

exports.default = serve
exports.build = build

exports.clean = gulp.parallel(serveClean, buildClean)
