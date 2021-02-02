const User = require("../models").User;

const index = (req, res) => {
    res.render("users/index.ejs")
};


const renderSignup = (req, res) => {
    res.render("users/signup.ejs")
}
const signup = (req, res) => {
    User.create(req.body)
    .then(newUser => {
        console.log(newUser);
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
    User.findByPk(req.params.id)
    .then(userProfile => {
        res.render("users/profile.ejs", {
            user: userProfile
        })
     })
};




module.exports = {
    index,
    renderSignup,
    signup,
    renderLogin,
    login,
    renderProfile,

}