import { get } from "./../../Core/Routes";
import DAO from "../../Core/DAO";


export default class HumansController
{

    @get("/api/humans")
    indexAction(request, response)
    {
        let humansDao = new DAO("humans");

        return response.json(humansDao.find()).status(200);
    }

}