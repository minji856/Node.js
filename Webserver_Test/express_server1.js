const express = require("express");

// Data
const Users = [
    {
        id:0,
        name: 'Jack'
    },
    {
        id:1,
        name: 'Jeniffer'
    }
]

// CONSTANTS 포트, 서버 상수준비
const PORT = 4000;
const HOST = "0.0.0.0" // 모든 IP를 허락하겠다

const app = express();
app.get("/", (req, res)=>{
    res.send("Hello World~~");
});

app.get("/users", (req, res)=>{
    res.send(Users);
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);