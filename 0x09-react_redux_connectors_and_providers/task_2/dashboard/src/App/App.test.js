import { shallow, mount } from "enzyme";
import React from "react";
import App, { listNotificationsInitialState, mapStateToProps } from "./App";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "./AppContext";

import { fromJS } from "immutable";
import { createStore } from "redux";
import { Provider } from "react-redux";
import uiReducer, { initialState } from "../reducers/uiReducer";

const store = createStore(uiReducer);

describe("<App />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("render App component without crashing", () => {
    const wrapper = shallow(<Provider store={store}><App /></Provider>);
    expect(wrapper.exists()).toEqual(true);
  });

  it("verify that the mapStateToProps returns the right object", () => {
    let state = fromJS({
      isUserLoggedIn: true
    });

    const result = mapStateToProps(state);
    expect(result).toEqual({ isLoggedIn: true });
  });
  
  it('verify that the mapStateToProps returns the right object', () => {
    let state = fromJS({
      isNotificationDrawerVisible: false
    });

    const result = mapStateToProps(state);
    expect(result).toEqual({ displayDrawer: false });
  });
});