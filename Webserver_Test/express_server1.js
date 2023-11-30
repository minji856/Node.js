// npm install express
const express = require("express");
const userControllers = require("./controllers/users.controller");

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

app.get("/users", userControllers.getUsers); /* 전체 회원 조회 */
app.get("/users:userId", userControllers.getUser); /* 특정 사용자만 조회하겠다 */
app.post("/users", userControllers.postUser);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);