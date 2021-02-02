const Record = require("../models").Record;

// index
const index = (req, res) => {
    Record.findAll()
    .then(records => {
        res.render("records/index.ejs", {
            records: records
        });
    })
}

// show

// renderNew

// postRecord

// render Edit

module.exports = {
    index,
}