import App from "./App";
import React from "react";
import { shallow } from "enzyme";

describe("App tests", () => {
    it("renders without crashing", () => {
        const component = shallow(<App />);
        expect(component).toBeDefined();
    });

    it('verfies Header exists', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Header')).toHaveLength(1);
    });

    it('verfies Login exists', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Login')).toHaveLength(1);
    });

    it('verfies Footer exists', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Footer')).toHaveLength(1);
    });
});