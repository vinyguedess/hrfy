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

    describe("Find by Id", () => 
    {
        it("Should find a Human by ID", done => 
        {
            Axios.get("http://localhost:3000/api/humans/5ada2d7d501a3320b1bdc4d2")
                .then(({ status }) => 
                {
                    expect(status).to.be.equal(200);
                })
                .then(done);
        });

        it("Should return error in case it's not found", done => 
        {
            Axios.get("http://localhost:3000/api/humans/any_id_unknown")
                .catch(err => err.response)
                .then(({ data, status }) => 
                {
                    expect(status).to.be.equal(404);
                    expect(data.message).to.be.a("string");
                    expect(data.errors).to.be.an("object");
                })
                .then(done);
        });
    });

    after(() => 
    {
        server.http.close();
    });

});