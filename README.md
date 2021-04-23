# Postcss-on-alert

[![NPM version](https://img.shields.io/npm/v/postcss-on-alert.svg)](https://www.npmjs.com/package/postcss-on-alert)

Calls a function when an error or warning message is received. This module is for [PostCSS](https://github.com/postcss/postcss).

# Get started

##  Install

```shell
npm i postcss-on-alert --save-dev
```
You as need install [PostCSS](https://github.com/postcss/postcss),  if you don't have it.


##  Examples of using

### Gulp
```javascript
const postcss_on_alert = require('postcss-on-alert');
const alert_messages = [];

gulp.task('css', () => {
  const postcss    = require('gulp-postcss');
  const sourcemaps = require('gulp-sourcemaps');

  return gulp.src('src/**/*.css')
    .pipe( sourcemaps.init() )
    .pipe( postcss([ 
        require('precss'), 
        require('autoprefixer'),
        postcss_on_alert({
            filterPlugins: ['autoprefixer'],
            filterTypeErrors: ['warning'],
            filterMessages: [],
            onAlert: function(messages){
                alert_messages = alert_messages.concat(messages);
            }
        })         
    ]) )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('build/') )
})
```

### JS API
```javascript
const postcss_on_alert = require('postcss-on-alert');
const alert_messages = [];

gulp.task('css', () => {
  const postcss    = require('gulp-postcss');
  const sourcemaps = require('gulp-sourcemaps');
  
  return gulp.src('src/**/*.css')
    .pipe( sourcemaps.init() )
    .pipe( postcss([ 
        postcss, 
        sourcemaps,
        postcss_on_alert({
            filterPlugins: [],
            filterTypeErrors: [],
            filterMessages: [],
            onAlert: function(messages){
                alert_messages = alert_messages.concat(messages);
            }
        })        
    ]) )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('build/') )
})
```

##  Options

### filterPlugins

* Type: `Array`
* Default value: `[]`

Filters messages from certain plugins. Specifies the name of the plugins.

### filterTypeErrors

* Type: `Array`
* Default value: `[]`

The message type is filtered. Possible options: `warning` or `error`

### filterMessages

* Type: `Array`
* Default value: `[]`

Filters messages with specific text.

### onAlert

* Type: `Function`
* Default value: `undefined`

This function is called when a warning or error message is received, except for a syntax error. Pass an array with messages.