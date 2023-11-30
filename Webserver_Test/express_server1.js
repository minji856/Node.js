// npm install express
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
    res.send("<h1>Hello World~~</h1>");
});

app.get("/users", (req, res)=>{
    res.send(Users);
})

/* 특정 사용자만 조회하겠다 */
app.get("/users:userId", (req, res)=>{
    const userId = req.params.userId // 가급적이면 변수이름 매칭 시켜주면 좋다
    const user = Users[userId]
    if(user)
        res.send(user);
    else    
        res.sendStatus(404).end();
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);