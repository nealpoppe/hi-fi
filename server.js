const express = require('express');

const app = express();


const routes = require('./routes');

app.use((req,res,next) => {
    console.log("I run for all routes");
    next();
})

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));



// not sure where this goes
app.set('view engine', 'ejs');

app.use('/users', routes.users);




app.listen(3000, () => {
    console.log("Running on port 3000!");
});