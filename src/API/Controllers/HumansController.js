import { get } from "./../../Core/Routes";
import DAO from "../../Core/DAO";


export default class HumansController 
{

    @get("/api/humans")
    indexAction(request, response) 
    {
        let humansDao = new DAO("humans");

        return Promise.all([
            humansDao.count(JSON.parse(request.query.search)),
            humansDao.find(
                JSON.parse(request.query.search),
                request.query.limit,
                request.query.offset
            )
        ])
            .then(([total, results]) =>
                response.header("X-Total-Count", total)
                    .json(results)
                    .status(200));
    }

}