import express from "express";
import routes from "../routes";
import { home, search, videos, postUpload, videoDetail, editVideo, deleteVideo, getUpload } from "../controllers/videoController";

const videoRouter = express.Router();

// videoRouter.get(routes.home,videos);
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.videoDetail(),videoDetail);
videoRouter.get(routes.editVideo,editVideo);
videoRouter.get(routes.deleteVideo,deleteVideo);

export default videoRouter; // 전체를 익스포트 한다는 뜻