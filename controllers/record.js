const Record = require("../models").Record;

const index = (req, res) => {
    Record.findAll()
    .then(records => {
        res.render("records/index.ejs", {
            records: records
        });
    })
}

module.exports = {
    index,
}