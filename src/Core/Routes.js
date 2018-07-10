import { Router } from "express";


const routes = Router();
export const get = (route) =>
    (controller, action) => routes.get(route, controller[action].bind(controller));


export const getRoutes = () => routes;