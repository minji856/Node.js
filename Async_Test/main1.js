/********* 콜백과 콜백 지옥 **********/

// a에 인자가 생겼으니까 매개변수 추가. 매개변수가 없으면 서로 다른 함수
const a = (callback) => {
    setTimeout(()=>{
        console.log(1);
        callback();
    }, 1000);
};

// 비동기적으로 처리함
const b = (callback) => {
    setTimeout(()=>{
        console.log(2);
        callback();
    }, 1000);
};

const c = () => {console.log(3);}

a(()=>{
    b(()=>{
        c()
    })
});

