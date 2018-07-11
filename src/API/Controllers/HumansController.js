import { get } from "./../../Core/Routes";
import DAO from "../../Core/DAO";


export default class HumansController 
{

    @get("/api/humans")
    indexAction(request, response) 
    {
        let humansDao = new DAO("humans");
        
        const search = JSON.parse(request.query.search || "{}");
        return Promise.all([
            humansDao.count(search),
            humansDao.find(
                search,
                request.query.limit,
                request.query.offset
            )
        ])
            .then(([total, results]) =>
                response.header("X-Total-Count", total)
                    .json(results));
    }

    @get("/api/humans/:id")
    viewAction(request, response)
    {
        let humansDao = new DAO("humans");

        const human = humansDao.findById(request.params.id);
        if (!human)
            return response.status(404).json({
                message: "Human not found",
                errors: { human: [ "not found" ] }
            });

        return response.json(human);
    }

}