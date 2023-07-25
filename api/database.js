var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      console.error(err.message)
      throw err
    }else{

        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE book (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title text, 
            author text, 
            publication_year INTEGER, 
            isbn_number INTEGER UNIQUE
            )`,
            
        (err) => {
            if (err) {
                // Table already created
            }else{

                console.log("Table already exists")
            }
        });  
    }
});


module.exports = db
