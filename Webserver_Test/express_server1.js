// npm install express
const express = require("express");
const usersRouter = require("./routes/users.routes");
const postsRouter = require("./routes/posts.routes");
const path = require("path"); // 절대경로

// CONSTANTS 포트, 서버 상수준비
const PORT = 4000;
const HOST = "0.0.0.0" // 모든 IP를 허락하겠다

const app = express();

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

// hbs middleWare 사용 설정
app.set("view engine", 'hbs'); 
app.set("views", path.join(__dirname, 'views'));

// static을 추가하겠다
app.use('/static', express.static(path.join(__dirname, 'public'))); 
// http://localhost:4000/static/index.html


app.use("/users", usersRouter);
app.use("/posts", postsRouter);

// 메인으로 접속할때만
app.get("/", (req, res)=>{
    res.render('index', {
        imageTitle : "This is a Forest.....",
        title: "Main Page"
    }); // 어떤 파일을 그려줄지 render('파일명', {보내줄 데이터이름})
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);