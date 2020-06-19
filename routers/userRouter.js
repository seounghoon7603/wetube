import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.home,(req,res)=>res.send("HomeTest"));
userRouter.get("/test",(req,res)=>res.send('Test'));

export default userRouter;