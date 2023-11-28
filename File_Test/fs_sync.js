// 동기식
const fs = require("fs");
const content = "Hello World!!!";

try{
    fs.writeFileSync("./hello.txt", content);
}
catch(err){
    console.log(err);
}

try{
    const data = fs.readFileSync("./Hello.txt", "utf-8");
    console.log(data);
}
catch(err){
    console.log(err);
}