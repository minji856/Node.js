/* 
모듈
------
- npm i cookie-parser
- npm i express-session
*/

const express = require('express');
const cookieparser = require("cookie-parser");
const session = require("express-session");

const app = express();
app.set('port', process.env.PORT || 9999);

// session 보다 먼저
app.use(cookieparser("1111")); // 패스워드를 쿠키에 저장하면 안 된다.

/** 
 * session 미들웨어 등록 
 */
app.use(session({
    secret: "1111",
    resave: false, // 새로운 요청 시 세션에 변동사항이 없어도 다시 저장할지 설정
    saveUninitialized: true, // 세션에 저장할 내용이 없어도 저장할지 설정
    cookie:{
        httpOnly : true // JS로 접근 불가
    }
}));

app.use(express.json());

app.get("/", (req, res)=>{
    let output;
    if(req.session.name){
        output = `
            <h2>로그인한 사용자입니다.</h2>
            <p>${req.session.name}님 안녕하세요.</p>`
    }
    else {
    output = `<h2>로그인 하지 않은 사용자 입니다.</h2>
        <p>로그인 해 주세요</p>`
    }

    res.send(output);
})

app.get("/login", (req, res) => {
    console.log("session : ", req.session);
    // res.cookie("name", "hong");

    req.session.name = "홍길동";
    res.end("Login OK");
})

app.get("/logout", (req, res) =>{
    res.clearCookie('connect.sid');
    res.end('Logout OK');
})

app.listen(app.get('port')); // 메세지 안 넣어주면 아무것도 안 뜬다. 당황X