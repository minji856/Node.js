/* 
모듈
-----
- npm i express
- npm i morgan
*/
const morgan = require('morgan');
const express = require('express');

const app = express();
app.set('port', process.env.PORT || 9999); // 포트번호가 없으면 이걸로 써라

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true})); // 아스키코드로 바꿔줘야한다

let boardList = [];
let board_id = 0;

app.get("/", (req, res) => {
    res.send("<h1>게시판 연습</h1>");
})

app.get("/board", (req, res)=>{
    res.send(boardList);
});

app.post("/board", (req, res)=>{
    const board = { // boardlist에 저장할 객체 생성 (classDTO로도 만들어도됨)
        "id" : ++board_id, // 자동 증가
        "user_id" : req.body.user_id, // 미들웨어가 필요한 이유 express.json
        "date" : new Date(),
        "title" : req.body.title,
        "content" : req.body.content
    } 
    boardList.push(board);

    res.redirect('/board'); // 새로고침
});

app.delete("/board/:id", (req,res)=>{
    const findItem = boardList.find((item)=>{
        return item.id == +req.params.id
    }) // 받은 id랑 같은지 봐주는 함수
    
    const idx = boardList.indexOf(findItem); // 위치를 찾아야한다
    boardList.splice(idx, 1);
    
    res.redirect('/board'); // 새로고침
});

/* 수정(삭제 후 새로입력) */
app.put("/board/:id", (req, res)=>{
    const findItem = boardList.find((item)=>{
        return item.id == req.params.id;
    })
    
    const idx = boardList.indexOf(findItem); // 어떤걸 수정할건지 찾는
    boardList.splice(idx, 1);
    
    const board = { 
        "id" : req.params.id, // 새로만드는게 아니니까 
        "user_id" : req.body.user_id, 
        "date" : new Date(),
        "title" : req.body.title,
        "content" : req.body.content
    } 
    boardList.push(board);
    res.redirect('/board');
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번에서 서버 실행중 ...')
})

