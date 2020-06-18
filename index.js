import express from "express"
import morgan from "morgan" // 로깅을 해준다.
import helmet from "helmet" // 보안
import cookieParser from "cookie-parser" // 쿠키와 세션 다룸
import bodyParser from "body-parser" // 바디 다룸
const app = express();

const PORT = 4000;

const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`);
}

const handleHome = (req, res) => {
    res.send('Hello From Home');
}

const handleProfile = (req,res) => { 
    res.send("You are on My profile!!!");
}

const betweenHome = (req, res, next) => {
    console.log("between");
    next();
}

const betweenRedirect = (req, res, next) => {
    res.redirect("/");
}

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));


app.get("/",handleHome);

app.use(betweenRedirect);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);