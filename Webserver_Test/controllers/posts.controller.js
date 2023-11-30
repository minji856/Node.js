const path = require("path"); // 경로에 대한 모든것을 mapping 시켜주는 라이브러리

// 절대경로 __dirname
function getPost(req, res){ 
    res.render('posts', {
        tempName: "post",
        title: "Post Page"
    })
}

module.exports = { getPost };