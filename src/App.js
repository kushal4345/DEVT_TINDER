const express = require("express");
const app = express();

app.use('/test', (req, res) => {
    res.send("Hello Kushal Sharma here for your help");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});