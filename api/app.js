const express = require('express');
const app = express();

const db = require("./database.js")

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
});

app.get('/', (req, res) => {
    // get list of books

    var sql = "select * from book"
    var params = []
    
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });

    res.json({"message":"Ok"})
});


app.get('/books', (req, res) => {
    // get list of books

    const books = {}
    res.json(books);
});

app.post('/books', (req, res) => {
    newBook = {}
    // Add the new post to the list of posts
    res.json(newBook);
});




// Default response for any other request
app.use(function(req, res){
    res.status(404);
});
