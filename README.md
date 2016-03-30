# Post CSS Setup

The purpose of this repo is to test out running a CSS build process using Gulp, Webpack and whatever build tools I can think of.

## TL;DR
To build projects:

1. `$ npm i`
2. Choose Webpack (`$ npm run pack`) or Gulp (`$ npm run gulp`)
3. Files build to the `dist/` directory

PostCSS plugin configs can be found in `styles/config`, but I'd move those somewhere else for your own project.


## Goal

Take CSS files from the `styles/` directory and compile them such that they can use SCSS-like functionality.

## Current Setup

* Gulp
    * Variables using `postcss-map`
    * Imports/SCSS features using `precss`
    * Autoprefixer

*Webpack
    * Variables using `postcss-map`
    * Imports/SCSS features using `precss`
    * Autoprefixer
    * Webpack builds standalone CSS file using ExtractTextPlugin


## Caution

Not recommending any architecture, just trying to get it to work. Since multiple build tools are being tested the variables/PostCSS config modules are stored in the `styles/` directory. Ideally those would be pulled out into a different directory based on a real project's needs.