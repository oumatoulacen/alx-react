import { shallow, mount } from "enzyme";
import React from "react";
import { StatelessApp, listNotificationsInitialState, mapStateToProps } from "./App";
import { StyleSheetTestUtils } from "aphrodite";

import { fromJS } from "immutable";
import { createStore } from "redux";
import { Provider } from "react-redux";
import uiReducer, { initialState } from "../reducers/uiReducer";

const store = createStore(uiReducer, initialState);

describe("App testcases", () => {
    beforeAll(() => {
      StyleSheetTestUtils.suppressStyleInjection();
    });
    afterAll(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    it("verifies that App renders without crashing", () => {
        const wrapper = shallow(<StatelessApp />);
        expect(wrapper.exists()).toEqual(true);
    });
  });