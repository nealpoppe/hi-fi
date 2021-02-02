const Record = require("../models").Record;

// index
const index = (req, res) => {
    Record.findAll()
    .then(records => {
        console.log("index");
        res.render("records/index.ejs", {
            records: records
        });
    })
}

// show

// renderNew

// postRecord

// renderEdit

// editRecord

// deleteRecord

module.exports = {
    index,
}