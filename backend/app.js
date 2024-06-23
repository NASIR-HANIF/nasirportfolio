import express from "express";
import path from "path"
import cookieParser from "cookie-parser";
export const app = express();
app.use(cookieParser())
app.use(express.json({limit : "50mb"}))
app.use(express.urlencoded({extended : true,limit:"50mb"}))
import { userRouter } from "./routes/User.js";
app.use("/api/v1",userRouter);



app.use(express.static(path.resolve("./frontend/build")));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});