import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notification component tests", () => {
  it("renders Notification component without crashing", () => {
    const notification = shallow(<Notifications />);

    expect(notification).toBeDefined();
  });

  it("renders ul", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("ul")).toBeDefined();
  });

  it("renders three list items", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("NotificationItem")).toHaveLength(3);
  });

  it("renders correct text", () => {
    const notification = shallow(<Notifications />);
    expect(notification.find("p").text()).toBe("Here is the list of notifications");
  });

  it("check if first NotificationItem renders without crashing", () => {
    const notification = shallow(<Notifications />);
    expect(notification.find(NotificationItem).at(0).html()).toBe('<li data="default">New course available</li>');
  });

  it("check if second NotificationItem renders without crashing", () => {
    const notification = shallow(<Notifications />);
    expect(notification.find(NotificationItem).at(1).html()).toBe('<li data="urgent">New resume available</li>');
  });

  it("check if third NotificationItem renders without crashing", () => {
    const notification = shallow(<Notifications />);
    expect(notification.find(NotificationItem).at(2).html()).toBe('<li data="urgent"><strong>Urgent requirement</strong> - complete by EOD</li>');
  });

});