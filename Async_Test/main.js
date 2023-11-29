// console.log(1);
// setTimeout(()=>{console.log(2)}, 1000);
// console.log(3);

// 비동기
// const btnEl = document.querySelector("h1");
// btnEl.addEventListener("click", ()=>{
//     console.log("Clicked!");
// });

// console.log("Hello World");

// *************************************************

/*
const getMovies = (movieName, cb) => {
    fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            cb();
        })
    }

getMovies('frozen', ()=>{
    console.log("겨울 왕국");
    getMovies('avengers', ()=>{
        console.log("어벤져스");
        getMovies('avatar', ()=>{console.log("아바타");});
    });
});
*/



/* 정상적으로 처리 됐을 때
const getMovies = (movieName) => {
    return new Promise(resolve => {
        fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                resolve();
            })
        });
    }
*/

// getMovies('frozen').then(() => 
//     {console.log("겨울 왕국")
//     return getMovies('avengers');
// }).then(() => {
//     console.log("어벤져스")
//     return getMovies('avatar');
// }).then(() => 
//     {console.log("아바타")});


// 위 코드를 async, await 쓴 버전
/*
const wrap = async() => {
    await getMovies('frozen')
    console.log("겨울 왕국")
    
    await getMovies('avengers')
    console.log("어벤져스")

    await getMovies('avatar')
    console.log("아바타")
}
wrap();
*/

// ****************** reject 버전 **************************
/*
const getMovies = (movieName) => {
    return new Promise((resolve, reject) => {
        fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
            .then(res => res.json())
            .then(json => {
                // console.log(json); 확인차
                if(json.Response == "False"){
                    reject(json.Error)
                }

                resolve(json);
            })
            .catch(err => {reject(err)})
        });
    }
    
// async 없이
getMovies('avengers')
    .then(movies => {console.log("영화 목록: ", movies)})
    .catch(error => 
        {
            console.log("에러 발생: ", error)
            loading = false;
        })

// async 로
const wrap = async() => {
    try{
        const movies = await getMovies('avengers')
        console.log("영화 목록 : ", movies)
    }
    catch(err){
        console.log("에러 발생 : ", err)
    }
}
wrap();
*/

// ************** 반복문에서 비동기 처리 *************** /
const getMovies = (movieName) => {
    return new Promise(resolve => {
        fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                resolve();
            })
        });
    }

const titles = ['frozen', 'avengers', 'avatar']

    /* *** 매번 순서가 달라서 삭제
    titles.forEach(async title => {
        const movies = await getMovies(title)
        console.log(title, movies)
    })
    */

const wrap = async()=>{
    for(const title of titles){
        const movies = await getMovies(title)
        console.log(title, movies)
    }
}
wrap();