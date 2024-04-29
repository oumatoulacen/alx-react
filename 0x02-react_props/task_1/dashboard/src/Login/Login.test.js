import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";

describe("Login tests", () => {
    it("renders without crashing", () => {
        const component = shallow(<Login />);
        expect(component).toBeDefined();
    });

    it('verfies Login exists', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('form')).toHaveLength(1);
    });

    it('verfies Footer exists', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('p')).toHaveLength(1);
    });
});