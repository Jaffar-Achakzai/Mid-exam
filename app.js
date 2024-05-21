import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbconnection } from "./database/dbconnection.js";
import {errorMiddleware} from "./error/error.js";
import reservationRouter  from "./router/reservationRoute.js";


const app = express();
dotenv.config({path: "./config/config.env"});

//For connecting frontend with backend 
app.use(
    cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["post"],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({entended: true}));
app.use('/api/v1/reservation',reservationRouter)


dbconnection();
app.use(errorMiddleware);
export default app;