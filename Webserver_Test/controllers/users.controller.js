const Users = require("../models/users.model");

/* 모든 사용자 조회 */
function getUsers(req, res){
    res.send(Users);
}

/* 특정 사용자 조회 */
function getUser(req, res){
    const userId = req.params.userId // 가급적이면 변수이름 매칭 시켜주면 좋다
    const user = Users[userId]
    if(user)
        res.send(user);
    else    
        res.sendStatus(404).end();
};

/* 특정 사용자를 등록하는 기능 */
function postUser(req, res){
    if(!req.body.name){
        return res.status(400).json({error: "Missing user name"}) // return으로 끊어주기
    }

    const newUser = {
        id : Users.length, // 자동으로 추가되게끔}
        name : req.body.name
    }

    Users.push(newUser);
    res.json(newUser);
};

/*** 다른데서 쓸 수 있게 export ***/
module.exports = {
    getUser,
    getUsers,
    postUser
}