import * as path from "path";
import * as pug from "pug";
import { get } from "../../Core/Routes";


export default class AppController 
{

    @get("/*")
    indexAction(request, response) 
    {
        response.send(pug.renderFile(path.resolve("resources/views", "app.pug")));
    }

}