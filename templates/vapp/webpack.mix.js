const mix = require('laravel-mix')


// 这里发布包需要绝对路径
// mix.setPublicPath('F:\\taihe_iot\\vueprod')
mix.setPublicPath('public')
mix.sass('assets/scss/app.scss', 'public/css/app.css')
mix.js('index.js', 'public/js/app.js')