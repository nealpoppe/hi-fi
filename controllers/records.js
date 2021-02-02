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
const show = (req, res) => {
    Record.findByPk(req.params.id)
    .then(record => {
        console.log(req.params.id);
        res.render("records/show.ejs", {
            record: record
        });
    })
}

// renderNew
const renderNew = (req, res) => {
    res.render("new.ejs");
}

// postRecord
const postRecord = (req, res) => {
    Record.create(req.body)
    .then(newRecord => {
        res.redirect("record") // not sure about this
    })
}

// renderEdit
const renderEdit = (req, res) => {
    Record.findByPk(req.params.id)
    .then(record => {
        console.log(req.params);
        res.render("records/edit.ejs", {
            record: record
        });
    })
}

// editRecord
const editRecord = (req,res) => {
    Record.update(req.body, {
        where: { id: req.params.id },
        returning: true
    })
    .then(record => {
        res.redirect("/record");
    })
}

// deleteRecord
const deleteRecord = (req, res) => {
    Record.destroy({
        where: { id: req.params.id}
    })
    .then(() => {
        res.redirect("/pokemon");
    })
}

module.exports = {
    index,
    show,
    renderNew,
    postRecord,
    renderEdit,
    editRecord,
    deleteRecord
}