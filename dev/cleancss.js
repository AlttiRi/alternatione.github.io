"use strict";


const fs = require('fs');
const path = require("path");

const CleanCSS = require('clean-css');


// const fileName = "result.scss";

let projectDir = path.resolve(__dirname, "../");
let fromCSS = path.resolve(projectDir, './out/post_sass_result.css');
let fromCSSMap = path.resolve(projectDir, './out/post_sass_result.css.map');
let toCSS = path.resolve(projectDir, './out/result.css');
let toCSSMap = path.resolve(projectDir, './out/result.css.map');
let CSSMapFile = "result.css.map";


let CSSMapContent = fs.readFileSync(fromCSSMap, 'utf8');

console.log(CSSMapContent);
console.log("\n\n");

// console.log(fromCSS);
// console.log(toCSS);


// console.log(path.resolve(projectDir, './out/post_result.scss'));
// console.log(path.resolve(projectDir, './out/post_result.scss.map'));

// let PostTCSSContent = fs.readFileSync(path.resolve(projectDir, './out/post_result.scss'), 'utf8');
// let PostTCSSMapContent = fs.readFileSync(path.resolve(projectDir, './out/post_result.scss.map'), 'utf8');



// let pathToOutputDirectory = path.resolve(projectDir, './out/');
// let options = { sourceMap: true, rebaseTo: pathToOutputDirectory}; // ???
let options = {sourceMap: true};


fs.readFile(fromCSS, 'utf8', (err, css) => {

    const output = new CleanCSS(options).minify(css, CSSMapContent

        // const output = new CleanCSS(options).minify({
        //         "./post_sass_result.css": {
        //             styles: css,
        //             sourceMap: CSSMapContent
        //         }
        //         // ,
        //         // "./post_result.scss": {
        //         //     styles: PostTCSSContent,
        //         //     sourceMap: PostTCSSMapContent
        //         // }
        //     }

        , function (error, output) {

            output.styles += `\n/*# sourceMappingURL=${CSSMapFile}*/`;

            fs.writeFile(toCSS, output.styles, 'utf8', (error) => {
                if (error) throw err;
                console.log('The file result.css has been saved!');
            });

            let sourceMap = output.sourceMap.toString().replace(/\\\\/g, "/").replace(/,"\$stdin"/g, "");
            fs.writeFile(toCSSMap, sourceMap, 'utf8', (error) => {
                if (error) throw err;
                console.log('The file result.css.map has been saved!');
            });
        });

});
