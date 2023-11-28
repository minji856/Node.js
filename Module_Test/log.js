const log = {
    info: function(info){
        console.log("Info : " + info);
    },
    warning : function(warning){
        console.log("Warning : " + warning);
    },  
    error : (error) => {
        console.log("Error : " + error);
    }
};

module.exports = log; // default

// 상수 export
module.exports.A = 100;

// 함수 export
exports.test1 = function (data){ // module은 생략 가능
    return "data";
}