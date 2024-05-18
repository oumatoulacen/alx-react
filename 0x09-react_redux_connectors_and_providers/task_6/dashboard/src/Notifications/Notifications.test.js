import { shallow, mount } from "enzyme";
import React from "react";
import { StatelessNotifications } from "./Notifications";
import { getLatestNotification } from "../utils/utils";
import { StyleSheetTestUtils } from "aphrodite";
import notificationsNormalizer from "../schema/notifications";
import { Map, fromJS } from "immutable";

describe("<Notifications />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("Notifications renders without crashing", () => {
    const wrapper = shallow(<StatelessNotifications />);
    expect(wrapper.exists()).toEqual(true);
  });

});