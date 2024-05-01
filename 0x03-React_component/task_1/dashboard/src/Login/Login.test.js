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

    it('verfies Login button exists', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('verfies Email input exists', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('label')).toHaveLength(2);
    });

    it('verfies Password input exists', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toHaveLength(2);
    });

});