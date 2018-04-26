"use strict";

/**
 * https://github.com/postcss/postcss
 */

const fs = require('fs');
const path = require("path");

const POST_CSS = require('postcss');
const PRE_CSS = require('precss');
const AUTO_PREFIXER = require('autoprefixer');
let sass = require('node-sass');

const fileName = "post_sass_result.css";

let projectDir = path.resolve(__dirname, "../");
let fromCSS = path.resolve(projectDir, './out/post_result.scss');
let fromCSSmap = path.resolve(projectDir, './out/post_result.scss.map');
// console.log("===- " + fromCSSmap);

// let dirCSS = path.resolve(projectDir, './css/');
let toCSS = path.resolve(projectDir, `./out/${fileName}`);
let toCSSMap = path.resolve(projectDir, `./out/${fileName}.map`);
console.log(fromCSS);
console.log(toCSS);

// if (!fs.existsSync("./out/")) {
//     fs.mkdir("./out/", () => {
//         console.log("The directory ./out/ created");
//     });
// }


// sass.render({
//     file: fromCSS,
//     sourceMap: true,
//     outFile: toCSS,
//     data: css,
//     // sourceMapContents: true,
//     sourceMapEmbed: false,
//     // outputStyle: "compressed"
// }, function (err, result2) {
//
//     // fs.writeFile(toCSS, result2.css, function(err){
//     //     if(!err){
//     //         //file written on disk
//     //     }
//     // });
//     //
//     // fs.writeFile(toCSSMap, result2.map, function(err){
//     //     if(!err){
//     //         //file written on disk
//     //     }
//     // });
//
//     // console.log(result2.css.toString());
//     // console.log(JSON.stringify(result2.map.toString()));
//     console.log(result2.map.toString());
// });



// function someAsyncFunction(url, prev, func) {
//
//     console.log("--- \n\n\n" + url + "--- \n\n\n");
//     console.log("--- \n\n\n" + prev + "--- \n\n\n");
//
//     let path = path.resolve(dirCSS, url);
//     console.log("--- \n\n\n" + path + "--- \n\n\n");
//     fs.readFile(path, 'utf8', (err, css) => {
//
//     });
// }


// fs.readFile(fromCSS, 'utf8', (err, css) => {
//
//
//     console.log(dirCSS);
//
//     POST_CSS([PRE_CSS])
//         .process(css, {from: fromCSS})
//         .then(function (result) {
            sass.render({
                file: fromCSS,
                // data: css,
                // importer: function(url, prev, done) {
                //     // url is the path in import as is, which LibSass encountered.
                //     // prev is the previously resolved path.
                //     // done is an optional callback, either consume it or return value synchronously.
                //     // this.options contains this options hash, this.callback contains the node-style callback
                //     someAsyncFunction(url, prev, function(result){
                //         done({
                //             file: result.path, // only one of them is required, see section Special Behaviours.
                //             contents: result.data
                //         });
                //     });
                // },
                // includePaths: [dirCSS],
                sourceMap: true,
                // outFile: toCSS,
                outFile: toCSS,
                // sourceMapContents: true,
                sourceMapRoot: "./",
                sourceMapEmbed: false,
                // outputStyle: "compact"
            }, function (err, result2) {

                fs.writeFile(toCSS, result2.css, function (err) {
                    if (!err) {
                        //file written on disk
                    }
                });

                if (result2.map) {
                    fs.writeFile(toCSSMap, result2.map, function (err) {
                        if (!err) {
                            //file written on disk
                        }
                    });
                }


                // console.log(result2.css.toString());
                // console.log(result2.map.toString());
            });

        // });

// });


// let result3 = sass.renderSync({
//     file: fromCSS,
//     // data: css,
//     importer: function(url, prev, done) {
//         // url is the path in import as is, which LibSass encountered.
//         // prev is the previously resolved path.
//         // done is an optional callback, either consume it or return value synchronously.
//         // this.options contains this options hash, this.callback contains the node-style callback
//         someAsyncFunction(url, prev, function(result){
//             done({
//                 file: result.path, // only one of them is required, see section Special Behaviours.
//                 contents: result.data
//             });
//         });
//     },
//     // includePaths: [dirCSS],
//     sourceMap: true,
//     outFile: toCSS,
//     // sourceMapContents: true,
//     sourceMapRoot: true,
//     sourceMapEmbed: false,
//     // outputStyle: "compact"
// });
//     console.log(result3.css.toString());
//     console.log(result3.map.toString());
//     console.log(result3.stats.toString());
