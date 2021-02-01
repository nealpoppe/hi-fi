const express = require('express');
const app = express();

// not sure where this goes
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log("Running on port 3000!");
});