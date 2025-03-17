const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World! Node.js app deployed on AWS EC2!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
