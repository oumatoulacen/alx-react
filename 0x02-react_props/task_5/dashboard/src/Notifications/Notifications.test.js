import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } }
];

describe("Notification component tests", () => {
  it("renders Notification component without crashing", () => {
    const notification = shallow(<Notifications/>);

    expect(notification).toBeDefined();
  });

  it("renders without notifications list", () => {
    const notification = shallow(<Notifications listNotifications={[]}/>);

    expect(notification.find(NotificationItem)).toHaveLength(1);
  });

  it("renders three list items", () => {
    const notification = shallow(<Notifications listNotifications={listNotifications}/>);

    expect(notification.find(NotificationItem)).toHaveLength(3);
  });

  it("renders correct text", () => {
    const notification = shallow(<Notifications listNotifications={listNotifications}/>);
    expect(notification.find("p").at(1).text()).toBe("Here is the list of Notifications");
  });

  it("check if first NotificationItem renders without crashing", () => {
    const notification = shallow(<Notifications listNotifications={listNotifications}/>);
    expect(notification.find(NotificationItem).at(0).html()).toBe('<li data="default">New course available</li>');
  });

  it("check if second NotificationItem renders without crashing", () => {
    const notification = shallow(<Notifications listNotifications={listNotifications}/>);
    expect(notification.find(NotificationItem).at(1).html()).toBe('<li data="urgent">New resume available</li>');
  });

  it("check if third NotificationItem renders without crashing", () => {
    const notification = shallow(<Notifications listNotifications={listNotifications}/>);
    expect(notification.find(NotificationItem).at(2).html()).toBe('<li data="urgent"><strong>Urgent requirement</strong> - complete by EOD</li>');
  });

});