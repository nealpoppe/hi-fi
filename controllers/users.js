const User = require('../models').User;

const index = (req, res) => {
    res.render('users/index.ejs')
};

const renderSignup = (req, res) => {
    res.render('users/signup.ejs')
}

const renderLogin = (req, res) => {
    res.render('users/login.ejs')
}

module.exports = {
    index,
    renderSignup,
    renderLogin,
    
}