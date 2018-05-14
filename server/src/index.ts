import * as express from "express";
import { apiRouter } from "./api";
import { appMiddleware, errorHandler } from "./middleware";
import logger from "./util/logger";
import * as path from "path";

const app = express();
app.use(appMiddleware(app));
app.use("/api", apiRouter);
app.use(errorHandler);
app.use(express.static(path.join(__dirname, "../", "/public")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../", "/public/index.html"));
});


export default app;
