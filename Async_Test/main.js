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

fetch('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => res.json())
    .then(res => {
        console.log(res);
        console.log(1);
        console.log(2);
        console.log(3);
    })


