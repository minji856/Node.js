const fs = require("fs/promises");
const content = "Hello World!!!";

async function helloWorld (){
    try{
        await fs.writeFile(process.env.FILE_PATH, content);
        const data = await fs.readFile(process.env.FILE_PATH, "utf-8");
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

// 함수로 만들었으니까 호출해주기
helloWorld();