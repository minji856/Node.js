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




