const Record = require("../models").Record;
const User = require("../models").User;

// index
const index = (req, res) => {
    Record.findAll()
    .then(records => {
        console.log("inside index")
        res.render("records/index.ejs", {
            records: records
        });
    })
}

// show
const show = (req, res) => {
    Record.findByPk(req.params.id, {
        include: [
            {
                model: User,
                attributes: ["name"]
            }
        ]
    })
    .then(record => {
        res.render("records/show.ejs", {
            record: record
        });
    })
}

// renderNew
const renderNew = (req, res) => {
    res.render("records/new.ejs");
}

// postRecord
const postRecord = (req, res) => {
    Record.create(req.body)
    .then(newRecord => {
        res.redirect("records") // not sure about this
    })
}

// renderEdit
const renderEdit = (req, res) => {
    Record.findByPk(req.params.id, {
        include: [
            {
                model: User,
                attributes: ["name"]
            }
        ]
    })
    .then(record => {
        User.findAll()
        .then(allUsers => {
            res.render("records/edit.ejs", {
                record: record,
                users: allUsers
            });
        })
    })
}

// editRecord
const editRecord = (req,res) => {
    Record.update(req.body, {
        where: { id: req.params.id },
        returning: true
    })
    .then(record => {
        res.redirect("/records");
    })
}

// deleteRecord
const deleteRecord = (req, res) => {
    Record.destroy({
        where: { id: req.params.id}
    })
    .then(() => {
        res.redirect("/records");
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