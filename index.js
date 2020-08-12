const express = require("express");
const exphbs = require("express-handlebars");
const items = require("./Items");
const PORT = process.env.PORT || 3000;

const app = express();



app.engine('handlebars', exphbs({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');

app.get("/", (req, res) => {
    res.render("home", {
        items
    });
})

app.get("/cards", (req, res) => {
    res.render("cards", {
        items
    })
})

app.get("/list", (req, res) => {
    res.render("list", {
        items
    })
})

app.listen(PORT, ()=>{
    console.log(`Server started listening on port ${PORT}`);
})