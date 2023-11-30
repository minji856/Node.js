const express = require("express");
const userControllers = require("../controllers/users.controller");
const usersRouter = express.Router();

// server 페이지에 /users로 되어있으니 비워주기
usersRouter.get("/", userControllers.getUsers); /* 전체 회원 조회 */
usersRouter.get("/:userId", userControllers.getUser); /* 특정 사용자만 조회하겠다 */
usersRouter.post("/", userControllers.postUser);

module.exports = usersRouter;