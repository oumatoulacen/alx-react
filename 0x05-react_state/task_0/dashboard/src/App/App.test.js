import React from 'react';
import { shallow, mount } from 'enzyme';
import { jest } from '@jest/globals';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Test App.js', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App />);
  });

  it('Renders App without crashing', () => {
    expect(wrapper.exists());
  });

  it('App component contains Notifications component', () => {
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it('App component contains Header component', () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it('App component contains Login component', () => {
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it('App component contains Footer component', () => {
    expect(wrapper.find("Footer")).toHaveLength(1);
  });

  it('test to check that CourseList is not displayed inside App', () => {
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
});

describe("Testing <App isLoggedIn={true} />", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App isLoggedIn={true}/>);
  });

  it("the Login component is not included", () => {
    expect(wrapper.find('Login')).toHaveLength(0);
  });

  it("the CourseList component is included", () => {
    expect(wrapper.find('CourseList').exists());
  });
});

describe("Testing <App logOut={function} />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it("verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out", () => {
    const wrapper = mount(<App />);
    const logout = jest.fn();
    wrapper.setProps({ logOut: logout });
    window.alert = jest.fn();
    const alert = jest.spyOn(window, 'alert');
    const event = new KeyboardEvent('keydown', {bubbles:true, ctrlKey: true, key: 'h'});
    document.dispatchEvent(event);
    expect(alert).toBeCalledWith("Logging you out");
    expect(logout).toBeCalled();
    alert.mockRestore();
  });
});

describe("Testing <App displayDrawer={true} />", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App displayDrawer={true}/>);
  });

  it("test that displayDrawer is set to false by default", () => {
    wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  })

  it("test that handleDisplayDrawer sets the displayDrawer state to true", () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  })

  it("test that handleHideDrawer sets the displayDrawer state to false", () => {
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  })
}); 