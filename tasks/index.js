import gulp from 'gulp'
import suite from '@cloudcannon/suite'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import { scripts, config as webpackConfig } from './webpack'

const bundler = webpack(webpackConfig)
suite.dev(gulp, {
  serve: {
    middleware: [
      webpackDevMiddleware(bundler, { /* options */ }),
      webpackHotMiddleware(bundler)
    ]
  }
});

export const build = gulp.series(scripts)