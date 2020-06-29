import routes from "./routes";

// 전역변수로 만들어 주는 미들웨어
export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id : 1
    }
    next();
};