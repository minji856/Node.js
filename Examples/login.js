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

app.get("/", (req, res)=>{
    const output = `<h2>로그인 하지 않은 사용자 입니다.</h2>
        <p>로그인 해 주세요</p>`

    res.send(output);
})

app.listen(app.get('port')); // 메세지 안 넣어주면 아무것도 안 뜬다. 당황X