
const fs = require('fs');
const path = require("path");

const transfer = require("multi-stage-sourcemap").transfer;



let projectDir = path.resolve(__dirname, "../");

const fileNameFrom   = "post_sass_result.css.map";
const fileNameTo = "post_result.scss.map";

const cMapDir = projectDir+ "/out/" + fileNameFrom;
const bMapDir = projectDir+ "/out/" + fileNameTo;



// let fromMap = fs.readFileSync(path.resolve(projectDir, './out/post_result.scss'), 'utf8');
let cMap = fs.readFileSync(cMapDir, 'utf8');
let bMap = fs.readFileSync(bMapDir, 'utf8');


console.log(cMap);
console.log("----");
console.log(bMap);

let cToAMap = transfer({fromSourceMap: cMap, toSourceMap: bMap});

console.log("----");
console.log(cToAMap);

fs.writeFile(cMapDir, cToAMap, 'utf8', (error) => {
    if (error) {
        console.log(error);
    }
    console.log('The file -- cToAMap -- has been saved!');
});
