const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const _ = require("lodash");

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World from Express");
});

app.post("/create", (req, res) => {
    let add = req.body.a + req.body.b;
    res.send(String(add));
});

app.post("/createarray", (req, res) =>{
    let newArray = [];
    let a = req.body.a;
    newArray.push(a);
    res.send(newArray);
});

app.delete("/delete", (req, res) => {
    let myArray = [16, 9232, 6, 122];
    let a = req.body.a;
    let removed = _.pullAt(myArray, a);
    let returned = {
        "answer1" : removed,
        "answer2" :myArray
    }
    res.send(returned);
})

app.put("/update/:a", (req,res) => {
    let updateArray = [16, 9232, 6, 122];
    let a = req.params.a;
    let b = req.body.b;
    _.set(updateArray, a, b);
    res.send(updateArray);
})


const port = process.env.port || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
