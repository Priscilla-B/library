var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      console.error(err.message)
      throw err
    }else{

        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE book (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL, 
            author TEXT, 
            publication_year INTEGER, 
            isbn_number TEXT NOT NULL UNIQUE
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
