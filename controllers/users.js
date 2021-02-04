const User = require("../models").User;
const Record = require("../models").Record;
const UserRecord = require("../models").UserRecord;


const index = (req, res) => {
    res.render("users/index.ejs")
};


const renderSignup = (req, res) => {
    res.render("users/signup.ejs")
}
const signup = (req, res) => {
    User.create(req.body)
    .then(newUser => {
        res.redirect(`/users/profile/${newUser.id}`);
    })
};


const renderLogin = (req, res) => {
    res.render("users/login.ejs")
}
const login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundUser => {
        res.redirect(`/users/profile/${foundUser.id}`);
    })
};

const renderProfile = (req, res) => {
    User.findByPk(req.params.id, {
        include: [{
            model: Record,
            attributes: ["id", "title"]
        }]
    })
    .then(userProfile => {
        Record.findAll()
        .then(allRecords => {
            res.render("users/profile.ejs", {
                user: userProfile,
                records: allRecords
            })        
        })
     })
};

const editProfile = (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.id
        },
        returning: true
    })
    .then(updatedUser => {          
                res.redirect(`/users/profile/${req.params.id}`);  
            })    
}

const addRecord = (req, res) => {
    Record.findByPk(req.body.recordId)
        .then(foundRecord => {
            User.findByPk(req.params.id)
            .then(foundUser => {
                foundUser.addRecord(foundRecord);  
                res.redirect(`/users/profile/${req.params.id}`);
            })
        })
}
        

const removeRecord = (req, res) => {
    UserRecord.destroy({
        where: { recordId: req.body.removeRecId } })
        .then(() => {
            console.log(req.body.removeRecId)
            res.redirect(`/users/profile/${req.params.id}`);
        })
}

const deleteUser = (req, res) => {
    User.destroy({ 
        where: { id: req.params.id } })
    .then(() => {
        res.redirect('/users');
    })
};



module.exports = {
    index,
    renderSignup,
    signup,
    renderLogin,
    login,
    renderProfile,
    deleteUser,
    editProfile,
    removeRecord,
    addRecord,

}