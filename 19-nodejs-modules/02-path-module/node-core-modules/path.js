const { log } = require("console");
const path = require("path");

const myFilePath = "subfolder/anotherfolder/index.js";

// basename()
const base1 = path.basename(myFilePath);
const base2 = path.basename(myFilePath, ".js");

// extname()
const ext = path.extname(myFilePath);

//dirname()
const dir = path.dirname(myFilePath);

// join()
const myPath = path.join("subfolder", "anotherfolder", "index.js");

// resolve()
const myPath2 = path.resolve("subfolder", "anotherfolder", "index.js");

console.log(myPath);
console.log(myPath2);

// __dirname
console.log(__dirname);

// __filename
console.log(__filename);
