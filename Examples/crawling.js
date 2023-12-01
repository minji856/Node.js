/*
cheerio
----------
- load() : html을 cheerio 객체로 반환
- children() : 선택된 html 문자열에 해당하는 모든 태그를 반환
- each() : 반복해서 콜백함수 실행
- find()

모듈 설치
-----------
- npm i axios
- npm i cheerio
*/
const axios = require("axios");
const cheerio = require("cheerio");

const getHtml = async() => {
    try{
    return await axios.get("https://roadbook.co.kr/category/%EC%8B%A0%EA%B0%84%EC%86%8C%EA%B0%9C");
    }
    catch(err){
        console.log(err);
    }
};

// console.log(getHtml());
getHtml()
    .then((html)=>{
        let ulList = [];
        const $ = cheerio.load(html.data);
        // console.log($);
        $bodyList = $("div#searchList ol").children("li"); // css문법 자식에게 접근할 때 공백. 자식중에 내가 원하는 태그

        $bodyList.each(function (i, elem){
            ulList[i] = {
                booklist: $(this).find('a').text(),
                url: $(this).find('a').attr('href')
                }
        }); // cheerio API 실제데이터는 두번째 인자에서 받음
        // console.log(ulList);
        // const blist = ulList.filter((n)=>n.booklist);
        return ulList;
    })
    .then((res)=>{
        console.log(res[0].booklist);
    })
