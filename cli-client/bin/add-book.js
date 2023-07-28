#!/usr/bin/env node

import axios from 'axios';
import fetch from 'node-fetch';
import inquirer from 'inquirer';
import { showTitle } from "./show-title.js";


showTitle("Add Book");

async function getBookData(){

  await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Book Title:",
    },
    {
      type: "input",
      name: "author",
      message: "Book author:",
    },
    {
      type: "number",
      name: "publication_year",
      message: "Year of Publication:",
    },
    {
      type: "input",
      name: "isbn_number",
      message: "Book ISBN Number:",
    },
  ])
  .then(userInput => {
    console.log(makePostRequest(userInput));
  });;

}

// function makePostRequest(userInput){
//   const url = "http://localhost:5000/books";

//   var bookData = {
//     "title":userInput.title,
//     "author":userInput.author,
//     "publication_year":userInput.publication_year,
//     "isbn_number":userInput.isbn_number
//   };
  
//     var res = fetch()
//     // var res = axios.post(url, bookData, { headers: { Accept: "application/json" } });
//     return res;
//   }

  

  

  async function makePostRequest(userInput) {

    const url = "http://localhost:5000/books";
    
    var bookData = {
      "title":userInput.title,
      "author":userInput.author,
      "publication_year":userInput.publication_year,
      "isbn_number":userInput.isbn_number
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    
      body: JSON.stringify(bookData), 
    });

    return response.json(); 
  }
  



getBookData()




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
