/**
 * https://github.com/tapio/live-server
 */

let liveServer = require("live-server");
let path = require("path");

let projectDir = path.resolve("../");

let params = {
    port: 8080,  // Set the server port. Defaults to 8080.
    host: "127.0.0.1", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
    root: projectDir,   // Set root directory that's being served. Defaults to cwd.
    open: true,  // When false, it won't load your browser by default.
    file: "404.html",  // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
    wait: 0,     // Waits for all changes, before reloading. Defaults to 0 sec.
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
    // ignore: 'scss,my/templates',                // comma-separated string for paths to ignore
    // mount: [['/components', './node_modules']], // Mount a directory to a route.
    // middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};
liveServer.start(params);
