const   gulp        = require('gulp'),
        sass        = require('gulp-sass'),
        pug         = require('gulp-pug'),
        browserSync = require('browser-sync');

gulp.task('sass', function () {
   const header = gulp.src('src/blocks/01-header/header-sass/header.sass')
       .pipe(sass())
       .pipe(gulp.dest('src/blocks/01-header/header-css'))
       .pipe(browserSync.reload({stream: true}));

   const quote = gulp.src('src/blocks/02-quote/quote-sass/quote.sass')
       .pipe(sass())
       .pipe(gulp.dest('src/blocks/02-quote/quote-css'))
       .pipe(browserSync.reload({stream: true}));

   const media = gulp.src('src/blocks/03-article-and-video/article-and-video-sass/article-and-video.sass')
       .pipe(sass())
       .pipe(gulp.dest('src/blocks/03-article-and-video/article-and-video-css'))
       .pipe(browserSync.reload({stream: true}));

   const surf_shop = gulp.src('src/blocks/04-surfboards-shop/surfboards-shop-sass/surfboards-shop.sass')
       .pipe(sass())
       .pipe(gulp.dest('src/blocks/04-surfboards-shop/surfboards-shop-css/'))
       .pipe(browserSync.reload({stream: true}));

   const articles = gulp.src('src/blocks/05-articles/articles-sass/articles.sass')
       .pipe(sass())
       .pipe(gulp.dest('src/blocks/05-articles/articles-css/'))
       .pipe(browserSync.reload({stream: true}));

   const subscribe = gulp.src('src/blocks/06-subscribe/subscribe-sass/subscribe.sass')
       .pipe(sass())
       .pipe(gulp.dest('src/blocks/06-subscribe/subscribe-css/'))
       .pipe(browserSync.reload({stream: true}));

   const contacts = gulp.src('src/blocks/07-contacts/contacts-sass/contacts.sass')
       .pipe(sass())
       .pipe(gulp.dest('src/blocks/07-contacts/contacts-css/'))
       .pipe(browserSync.reload({stream: true}));

   const footer = gulp.src('src/blocks/08-footer/footer-sass/footer.sass')
       .pipe(sass())
       .pipe(gulp.dest('src/blocks/08-footer/footer-css/'))
       .pipe(browserSync.reload({stream: true}));

   const main_styles = gulp.src('src/sass/main.sass')
       .pipe(sass())
       .pipe(gulp.dest('src/css'))
       .pipe(browserSync.reload({stream: true}));
});

gulp.task('pug', function () {
    gulp.src('src/index/index.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('src'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task ('browserSync', function () {
   browserSync({
       server: {
           baseDir: 'src'
       },
       notify: false
   });
});

gulp.task('watch', ['pug', 'sass', 'browserSync'], function () {
   gulp.watch('src/blocks/**/*.sass', ['sass']);
   gulp.watch('src/**/*.pug', ['pug']);
   gulp.watch('src/css/media/media.css', browserSync.reload)
});