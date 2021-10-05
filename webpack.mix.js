const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// Javascript
// mix.js('src/js/app.js', 'public/js');

// Styles
mix.sass('monalisa.scss', 'dist/css');

// Copy files
mix.copy('dist/css/monalisa.css', 'docs/pico/themes/vespera/css');
