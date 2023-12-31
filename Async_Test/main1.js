/********* 콜백과 콜백 지옥 **********/

// a에 인자가 생겼으니까 매개변수 추가. 매개변수가 없으면 서로 다른 함수
/*
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

const c = (callback) => {
    setTimeout(()=>{
        console.log(3);
        callback();
    }, 1000)
}

const d = () => {console.log(4);}

a(()=>{
    b(()=>{
        c(()=>{
            d()
        })
    })
});
*/



// ************** Promise *************** /

/*
const a = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(1);
            resolve();
        }, 1000);      
    });
};

const b = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(2);
            resolve();
        }, 1000);      
    });
};

const c = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(3);
            resolve();
        }, 1000);      
    });
};

const d = () => {console.log(4);}

// 이전이랑 크게 달라보이지 않는다
// a().then(()=>{
//     b().then(()=>{
//         c().then(()=>{
//             d()
//         })
//     })
// })


/* 간단하게
a().then(()=>{
    return b()
}).then(()=>{
    return c()
}).then(()=>{
    return d()
    }
)
*/

/* 화살표 함수 문법으로 다 생략
a()
    .then(()=>b())
    .then(()=>c())
    .then(()=>d())
*/

// 콜백함수니까 함수 이름만
/*
a()
    .then(b)
    .then(c)
    .then(d)
    .then(()=>console.log("done"));
*/



// ************** Async, Await 패턴 *************** /
/*
const a = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(1);
            resolve();
        }, 1000);      
    });
};

const b = () => console.log(2);

//// a().then(()=>b()); 이 코드를 아래로 바꿀 수 있다

const fun = async() => {
    await a()
    b()
}
fun()
*/


// ************** Resolve, Reject, error handling *************** /
/*
const delayAdd = (num) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(num > 10){
                reject(`${num}은 10보다 클 수 없다.`)
                return
            }

            // 정상적으로 처리 됐을 때
            console.log(num)
            resolve(num + 1)
            }, 1000)
        }
    );
};
*/


// delayAdd(5)
//     .then((res)=>{console.log(res)})
//     .catch((err)=>{console.log(err)}); // 임의의 값, 함수, 함수

/*
const wrap = async() => {
    try{
    const res = await delayAdd(12)
    console.log(res);
    }
    catch(err){
        console.error(err)
    }
    finally{
        console.log("Done!")
    }
}
wrap();
*/

