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

const fileName = "post_result.scss";

let projectDir = path.resolve(__dirname, "../");
let fromCSS = path.resolve(projectDir, './css/style.scss');
let toCSS = path.resolve(projectDir, `./out/${fileName}`);
let toCSSMap = path.resolve(projectDir, `./out/${fileName}.map`);
console.log(fromCSS);
console.log(toCSS);

if (!fs.existsSync("./out/")) {
    fs.mkdir("./out/", () => {
        console.log("The directory ./out/ created");
    });
}



fs.readFile(fromCSS, 'utf8', (err, css) => {


    // let sassOffed;
    //
    // POST_CSS([PRE_CSS])
    //     .process(css, {from: fromCSS})
    //     .then(function (result) {
    //         sass.render({data: result.css}, function (err, result2) {
    //             sassOffed = result2.css.toString();
    //             console.log(sassOffed);
    //         });
    //
    //     });



    // console.log(css);
    // console.log(err);
    POST_CSS([PRE_CSS, AUTO_PREFIXER])
        .process(css, {from: fromCSS, to: toCSS, map: { inline: false }})
        .then(result => {
            fs.writeFile(toCSS, result.css, 'utf8', (error) => {
                if (error) {
                    console.log(error);
                    throw err;
                }
                console.log(`The file ${fileName} has been saved!`);
            });
            if (result.map) {
                fs.writeFile(toCSSMap, result.map, 'utf8', (error) => {
                    if (error) {
                        console.log(error);
                        throw err;
                    }
                    console.log(`The file ${fileName}.map has been saved!`);
                });
            }
        });
});
