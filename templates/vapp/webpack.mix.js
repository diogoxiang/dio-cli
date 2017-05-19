const mix = require('laravel-mix')


// 这里发布包需要绝对路径
// mix.setPublicPath('F:\\taihe_iot\\vueprod')
mix.setPublicPath('public')
mix.sass('src/assets/scss/app.scss', 'public/css')
mix.js('src/index.js', 'public/js/app.js')
    // mix.copy('src/public/index.html', 'public/index.html')