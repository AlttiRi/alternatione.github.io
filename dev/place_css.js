const fs = require("fs");
const path = require("path");


let projectDir = path.resolve(__dirname, "../");
let cssfrom = path.resolve(projectDir, './out/result.css');
let cssto   = path.resolve(projectDir, './css/compiled.css');
let mapfrom = path.resolve(projectDir, './out/result.css.map');
let mapto   = path.resolve(projectDir, './css/compiled.css.map');


let str = /sourceMappingURL=result.css.map/g;
let placer = "sourceMappingURL=compiled.css.map";


fs.rename(cssfrom, cssto, (err) => {
    if (err) {
        throw err;
    }

    console.log('Rename complete!');
    fs.readFile(cssto, 'utf8', (err, css) => {

        fs.writeFile(cssto, css.replace(str, placer), 'utf8', (error) => {

        })
    });
});

fs.rename(mapfrom, mapto, (err) => {
    if (err) {
        throw err;
    }

    console.log('Rename complete!');
});
