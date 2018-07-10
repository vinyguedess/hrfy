import { expect } from "chai";
import Axios from "axios";
import { app } from "../../src";


describe("Test/Integrations/HumansTest", () => 
{

    const server = { http: null };
    before(() => 
    {
        server.http = app.listen(3000);
    });


    describe("List", () => 
    {
        it("Should get list of humans", done => 
        {
            Axios.get("http://localhost:3000/api/humans")
                .then(({ status }) => 
                {
                    expect(status).to.be.equal(200);
                })
                .then(done);
        });
    });

    after(() => 
    {
        server.http.close();
    });

});