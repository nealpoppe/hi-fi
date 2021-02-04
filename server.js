const express = require('express');
const app = express();
const methodOverride = require('method-override');

const routes = require('./routes');

app.use((req,res,next) => {
    console.log("I run for all routes");
    next();
})

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

// not sure where this goes
app.set('view engine', 'ejs');

app.use('/users', routes.users);
app.use('/records', routes.records);

app.get('/',(req,res) => {
    res.render('users/index.ejs');
})

app.listen(process.env.PORT, () => {
    console.log("Running on port 3000!");
});