import express from "express";
import routes from "../routes";
import { search, home } from "../controllers/videoController";
import { getJoin, login, logout, postJoin, getLogin, postLogin } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);


globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter; // 전체를 익스포트 한다는 뜻