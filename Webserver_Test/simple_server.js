/**
 * Node로 서버생성
 */
const http = require("http");
const PORT = 3000; // 포트번호 상수로 저장. 자주 수정되니까

const targetObject = {a:"a", b: "b"};
const server = http.createServer((req, res)=>{ // 매개변수는 알기 쉽게 작성함 req, res
    if(req.method === "POST" && req.url === "/home"){
        /**  사용자가 보내온 데이터 req로 받을 준비 **/
        req.on('data', (data) => {
            const strData = data.toString()
            Object.assign(targetObject, JSON.parse(strData)); // 복사본을 저장, JSON 형식으로 바꿔줌
        });

    }
    else { // else문 안은 전부 GET방식
        if(req.url === "/home"){   /* 라우팅 부분 */
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            /* 어떤 데이터를 보낼꺼다. Header부분 */
            //// res.writeHead(200, {"content-Type":"application/json"}); // 옵션 추가 - 성공적 처리 : 200
            res.end(JSON.stringify(targetObject));
        }
        else if (req.url === "/about"){
            res.setHeader("Content-Type", "text/html");
            res.write("<html>");
            res.write("<body>");
            res.write("<h1>About Page</h1>");
            res.write("</body>");
            res.write("</html>");
            res.end();
        }
        else{
            res.statusCode = 404;
            res.end();
    }}
});

server.listen(PORT, ()=>{
    console.log(`Listening on prot ${PORT}`);
}); // 포트번호. 서버에서 확인하기 위해 콜백함수(콘솔창) 추가