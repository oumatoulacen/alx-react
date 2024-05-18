import { shallow } from "enzyme";
import React from "react";
import { StatelessNotificationItem } from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";

describe("<Notifications />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("NotificationItem renders without crashing", () => {
    const wrapper = shallow(<StatelessNotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  });
});
