import { shallow, mount } from "enzyme";
import React from "react";
import App from "./App";
import { StyleSheetTestUtils } from "aphrodite";
import { logOut } from "./AppContext";

describe("<App />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("should contain the Notifications component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });
  it("should contain the Header component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Header")).toHaveLength(1);
  });
  it("should contain the Login component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Login")).toHaveLength(1);
  });
  it("should contain the Footer component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Footer")).toHaveLength(1);
  });
  it("CourseList is not displayed with isLoggedIn false by default", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: { isLoggedIn: false } });
    wrapper.update();
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });

  it("when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out", () => {
    const events = {};

    document.addEventListener = jest.fn((event, cb) => {
      events[event] = cb;
    });

    window.alert = jest.fn();

    const wrapper = shallow(<App />);
    const logout = jest.spyOn(wrapper.instance(), "logOut");

    events.keydown({ key: "h", ctrlKey: true });

    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    expect(logout).toHaveBeenCalled();

    jest.restoreAllMocks();
  });

  it("Has default state for displayDrawer false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it("displayDrawer changes to true when calling handleDisplayDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    const instance = wrapper.instance();

    instance.handleDisplayDrawer();

    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it("displayDrawer changes to false when calling handleHideDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    // const instance = wrapper.instance();

    wrapper.instance().handleDisplayDrawer();

    expect(wrapper.state().displayDrawer).toEqual(true);

    wrapper.instance().handleHideDrawer();

    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it("logOut resets the user to the default state", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      user: {
        email: "",
        password: "",
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    });

    wrapper.instance().logOut();

    expect(wrapper.state().user).toEqual({
      email: "",
      password: "",
      isLoggedIn: false,
    });
  })

  it("logIn sets the user to the correct email and password", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    });

    wrapper.instance().LogIn("usename", "password");

    expect(wrapper.state().user).toEqual({
      email: "usename",
      password: "password",
      isLoggedIn: true,
    });
  });

  it("checks if markNotificationAsRead removes the notification from the list of notifications", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      listNotifications: [
        {
          id: 1,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          type: "urgent",
          value: "New resume available",
        },
      ],
    });

    wrapper.instance().markNotificationAsRead(1);

    expect(wrapper.state().listNotifications).toEqual([
      {
        id: 2,
        type: "urgent",
        value: "New resume available",
      },
    ]);
  });
  
});
