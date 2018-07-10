import express from "express";
import { getRoutes } from "./Core/Routes";
import Loader from "./Config/Loader";


Loader.controllers();


export const app = express();

app.use(express.static("public"));
app.use(getRoutes());