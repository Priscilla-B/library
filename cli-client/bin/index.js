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

console.log(chalk.blue.bold("Here are a list of commands available to explore the book management system"));
console.log("-- get-books: to get a list of books available");
console.log("-- create-book: to add a new book");