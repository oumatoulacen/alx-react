import { shallow } from "enzyme";
import React from "react";
import Header from "./Header";

describe("App tests", () => {
    it("renders without crashing", () => {
        const component = shallow(<Header />);
        expect(component).toBeDefined();
    });

    it('verfies img exists', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img')).toHaveLength(1);
    });

    it('verfies h1 exists', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('h1')).toHaveLength(1);
    });
});