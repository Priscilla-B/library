#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const yargs = require("yargs");
const axios = require("axios");

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .argv;

const greeting = chalk.white.bold(`Hello, ${options.name}!`);

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
 backgroundColor: "#555555"
};
const msgBox = boxen( greeting, boxenOptions );

console.log(msgBox);

const url = "https://priscilla-b-zany-space-winner-6wrvjpvrwrg3rgxw-5000.preview.app.github.dev/books";

axios.get(url, { headers: { Accept: "application/json" } })
 .then(res => {
   console.log(res.data);
 });

// The url depends on searching or not
// const searchUrl = options.search ? `https://icanhazdadjoke.com/search?term=${escape(options.search)}` : "https://icanhazdadjoke.com/";

// axios.get(searchUrl, { headers: { Accept: "application/json" } })
//  .then(res => {
//    if (options.search) {
//      // if searching for jokes, loop over the results
//      res.data.results.forEach( j => {
//        console.log("\n" + j.joke);
//      });
//      if (res.data.results.length === 0) {
//        console.log("no jokes found :'(");
//      }
//    } else {
//      console.log(res.data.joke);
//    }
//  });
