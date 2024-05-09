import { mount, shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext from "../App/AppContext";

describe("<Footer />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })

  it("Footer renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("Verify that when the user is logedout the Contact us link is not displayed", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("a").exists()).toEqual(false);
  });

  it("Verify that when the user is logedin the Contact us link is displayed", () => {
    const context = { user: { isLoggedIn: true } };
    const wrapper = mount(<AppContext.Provider value={context}><Footer /></AppContext.Provider>);
    expect(wrapper.find("a").exists()).toEqual(true);
    expect(wrapper.text()).toContain("Contact us");
  });
});
