const fs = require("fs/promises");
const content = "Hello World!!!";

async function helloWorld (){
    try{
        await fs.writeFile("./hello.txt", content);
        const data = await fs.readFile("./Hello.txt", "utf-8");
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

// 함수로 만들었으니까 호출해주기
helloWorld();