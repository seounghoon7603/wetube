import express from "express"
import morgan from "morgan" // 로깅을 해준다.
import helmet from "helmet" // 보안
import cookieParser from "cookie-parser" // 쿠키와 세션 다룸
import bodyParser from "body-parser" // 바디 다룸
import { localsMiddleware } from "./middlewares"
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
const app = express();

app.use(helmet());
app.set("view engine","pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(localsMiddleware);

app.use(routes.home, globalRouter); 
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app; // 날 호출하면 app을 주겠다. ( 위에선언한 app 덩어리들 주겠다. 
                    // - init에서 호출함)