const express = require('express');
const app = express();

const db = require("./database.js");
const { apiResponse, statusOptions} = require('./api-response.js');

app.use(express.json());

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
});


app.get('/books', (req, res) => {
    // get list of books

    var sql = "select * from book"
    var params = []
    
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json(
            apiResponse(statusOptions.failed,res.statusCode,"failed to get list of books"));
          return;
        }
        res.status(200).json(
            apiResponse(statusOptions.success,res.statusCode,"list of books returned",rows));
      });

});



app.post('/books', (req, res) => {
    // var values = [req.body.]
    var query = `INSERT INTO book (title, author, publication_year, isbn_number)
    VALUES (?, ?, ?, ?)`

    var data = req.body
    
    var params = [
        data.title,
        data.author,
        data.publication_year,
        data.isbn_number
    ]

    var validationResults  = validateBookData(data)

    if (validationResults==true){
        db.run(query, params, (err, result) => {
            if (err){
                res.status(400).json(
                    apiResponse(statusOptions.failed,res.statusCode,"failed to create book"));
                return;
            }
            res.status(201).json(
                apiResponse(statusOptions.success,res.statusCode,"New book created",data));
          })

    }else{
        res.status(400).json(
            apiResponse(statusOptions.failed,res.statusCode,"Request data validation returned error", validationResults));
    }
    
    
});

function isEmptyObject(obj) {
    console.log(obj)
    console.log("title", obj["title"])
    for (var key in obj) {
      if (obj[key] != null ) {
        console.log("key is not empty", key, `|${obj[key].trim().replace(" ","")}|`)
        return false;
      }
    }
    return true;
}

function validateBookData(data){
    var validationErrors = [];
    
    if (isEmptyObject(data)){
        console.log("empttytytytyyyyyyyyyyyyyyyyyyyyyyyy")
        return validationErrors.push({"data":"Request data cannot be empty"})
    }
    if (data.title == null){
        validationErrors.push({"title":"book title is required"})
    };

    if (data.isbn_number == null){
        validationErrors.push({"isbn_number":"isbn_number is required"})
    };

    if (data.isbn_number.length != 10 || data.isbn_number.length != 13){
        validationErrors.push({"isbn_number":"length should be 10 or 13 characters"})
    };

    if (data.publication_year.length > 4){
        validationErrors.push({"publication_year":"publication year cannot be more than 4 characters"})
    };

    if (validationErrors.length > 0){
        return validationErrors;
    };

    return true;
  };




// Default response for any other request
app.use(function(req, res){
    res.status(404);
});
