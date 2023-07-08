const express = require("express");
const app = express();
const PORT = 3000;


app.use("/", (req,res) => {
    res.send('hello')
});

app.listen(PORT, () => {
    console.log(`Listen : ${PORT}`);
    console.log(`지금 서버 실행중`);
});