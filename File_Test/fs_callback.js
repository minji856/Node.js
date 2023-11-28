const fs = require("fs");
const content = "Hello World!!!";

// 파일에 저장하는 2번째 인자는 어떤 내용
fs.writeFile("./hello.txt", content, (err)=>{
    if(err){
        console.log(err)
    }
    // 비동기방식
    fs.readFile("./hello.txt", "utf-8", (err, data)=>{
        if(err){
            console.log(err)
        }
        console.log(data);
    })
});