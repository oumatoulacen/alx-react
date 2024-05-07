import React from "react";
import BodySection from "./BodySection";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

describe("<BodySection />", () => {
    beforeAll(() => {
        StyleSheetTestUtils.suppressStyleInjection();
      });
      afterAll(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
      });

    it("BodySection renders without crashing", () => {
        const wrapper = shallow(<BodySection />);
        expect(wrapper.exists()).toEqual(true);
    });
    
    it("Shallowing the component should render correctly a BodySection component and that the props are passed correctly to the child component", () => {
        const wrapper = shallow(<BodySection title="test title"/>);

    
        const h2 = wrapper.find("h2");
    
        expect(h2).toHaveLength(1);
        expect(h2.text()).toEqual("test title");
    });
});