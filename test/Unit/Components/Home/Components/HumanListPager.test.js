import React from "react";
import { expect } from "chai";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as sinon from "sinon";
import HumansListPager from "../../../../../resources/app/components/Home/components/HumansListPager";


describe("Test/Unit/Components/Home/Components/HumanListPagerTest", () => 
{

    before(() => 
    {
        Enzyme.configure({ adapter: new Adapter() });
    });

    it("Should render HumanListPager", () => 
    {
        const callback = sinon.spy();
        const wrapper = Enzyme.shallow(<HumansListPager total={100} limit={10} fetchHumans={callback} />);

        wrapper.find("button").at(1).simulate("click");

        expect(wrapper).to.be.lengthOf(1);
        expect(callback.called).to.be.true;

        sinon.restore();
    });

});