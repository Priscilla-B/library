#!/usr/bin/env node


import axios from 'axios';
import { showTitle } from "./show-title.js";

showTitle("All Books");

// function showData(data){
//   const dataOptions = {
//     margin: 1,
//     borderStyle: "round",
//     borderColor: "blue",
//    };

//    var dataBox = boxen( `${data}`, dataOptions );
//    return dataBox;

// }

const url = "http://localhost:5000/books";

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
