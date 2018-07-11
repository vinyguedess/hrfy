import React from "react";
import { expect } from "chai";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as sinon from "sinon";
import SearchBar from "../../../../../resources/app/components/Home/components/SearchBar";


describe("Test/Unit/Components/Home/Components/SearchBarTest", () => 
{

    before(() => 
    {
        Enzyme.configure({ adapter: new Adapter });
    });

    it("Should render SearchBar", () => 
    {
        const callback = sinon.spy();
        const wrapper = Enzyme.shallow(<SearchBar setSearchTerm={callback} />);

        expect(wrapper).to.be.lengthOf(1);
    });

});