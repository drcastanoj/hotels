import { Request, Response, NextFunction, Express } from "express";
import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import { default as config, ENV } from "../config";

export function appMiddleware(app: Express) {
    return (req: Request, res: Response, next: NextFunction) => {
        // Serve static server only in production mode. In any other modes, treat this as a standalone API server.
        if (config.environment === ENV.prod) {
            app.use(express.static(path.join(__dirname, "../../../../client/dist")));
        }
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        // Website you wish to allow to connect
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:5000");

        // Request methods you wish to allow
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

        // Request headers you wish to allow
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");

        next();
    };
}