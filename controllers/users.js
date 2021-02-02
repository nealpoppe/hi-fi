const User = require('../models').User;

const index = (req, res) => {
    res.render('users/index.ejs')
}



module.exports = {
    index,
   
}