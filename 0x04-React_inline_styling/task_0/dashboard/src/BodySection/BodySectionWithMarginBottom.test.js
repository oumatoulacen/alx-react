import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe("<BodySectionWithMarginBottom />", () => {
    it("renders a <BodySectionWithMarginBottom /> component", () => {
        const wrapper = shallow(<BodySectionWithMarginBottom />);
        expect(wrapper).toHaveLength(1);
    });
    
    it("renders a <BodySection /> component", () => {
        const wrapper = shallow(<BodySectionWithMarginBottom />);
        expect(wrapper.find(BodySection)).toHaveLength(1);
    });
    
    it("renders a <BodySection /> with props", () => {
        const wrapper = shallow(
        <BodySectionWithMarginBottom title="test title">
            <p>test children node</p>
        </BodySectionWithMarginBottom>
        );
        expect(wrapper.find(BodySection).props().title).toEqual("test title");
        expect(wrapper.find(BodySection).contains(<p>test children node</p>)).toEqual(true);
    });
});
