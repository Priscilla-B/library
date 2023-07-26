const express = require('express');
const app = express();

const db = require("./database.js")

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
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });

});



app.post('/books', (req, res) => {
    // var values = [req.body.]
    var query = `INSERT INTO book (title, author, publication_year, isbn_number)
     VALUES (?, ?, ?, ?)`

    var data = req.body
    console.log("datattaaaaaaaaaaaaaaaa", data)
    
    var params = [
        data.title,
        data.author,
        data.publication_year,
        data.isbn_number
    ]
    
    db.run(query, params, (err, result) => {
      if (err){
        res.status(400).json({"error": err.message})
          return;
      }
      res.json({
        "message":"success",
        "data":data,
        "id":this.lastID
      })
    })

});

function validateBookData(data){
  if (data.isbn_number == null){

  }
}




// Default response for any other request
app.use(function(req, res){
    res.status(404);
});
