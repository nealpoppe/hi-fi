const Record = require('../models').Record;

// index
const index = (req, res) => {
    Record.findAll()
    .then(records => {
        console.log('index');
        res.render('records/index.ejs', {
            records: records
        });
    })
}

// show
const show = (req, res) => {
    Record.findByPK(req.params.id, {
        include: [{
            model: users,
            attributes: ['name']
        }]
    })
    .then(record => {
        res.render('show.ejs', {
            record: record
        });
    })
}

// renderNew
// postRecord
// renderEdit
// editRecord
// deleteRecord

module.exports = {
    index,
    show,
    
}