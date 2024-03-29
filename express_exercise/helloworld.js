const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World from Express");
});

const port = process.env.port || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
