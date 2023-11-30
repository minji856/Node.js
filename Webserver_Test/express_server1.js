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
// 서버 생성 후 MiddleWare

/* 등록해주는 함수 */
app.use((req, res, next)=>{
    const start = Date.now();
    console.log(`start : ${req.method} ${req.url}`);
    next();
    
    const diffTime = Date.now() - start;
    console.log(`end : ${req.method} ${req.url} ${diffTime}ms`);
}) 

// 미들웨어를 추가
app.use(express.json());

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

app.post("/users", (req, res)=>{
    //// console.log('req.body.name : ' + req.body.name);
    /* 항상 꼼꼼하게 body가 없을 때 대비 */
    if(!req.body.name){
        return res.status(400).json({error: "Missing user name"}) // return으로 끊어주기
    }

    const newUser = {
        id : Users.length, // 자동으로 추가되게끔}
        name : req.body.name
    }
    Users.push(newUser);
    res.json(newUser);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);