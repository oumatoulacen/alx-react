import React from 'react';
import { shallow } from 'enzyme';
import { StatelessApp, mapStateToProps } from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';


describe('<App />', () => {
  let app;
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    app = shallow(<StatelessApp displayDrawer={false} />);
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('App renders without crashing', () => {
    expect(app.exists()).toBe(true);
  });
  it('App contain Notifications component', () => {
    const component = app.find(Notifications);
    expect(component).toHaveLength(1);
  });
  it('App contain Header component', () => {
    const component = app.find(Header);
    expect(component).toHaveLength(1);
  });
  it('App contain Login component', () => {
    const component = app.find(Login);
    expect(component).toHaveLength(1);
  });
  it('App contain Footer component', () => {
    const component = app.find(Footer);
    expect(component).toHaveLength(1);
  });
  it('CourseList is not displayed', () => {
    const component = app.find(CourseList);
    expect(component).toHaveLength(0);
  });
  it('the default state for displayDrawer is false', () => {
    const displayDrawer = app.props().children[0].props.displayDrawer;
    expect(displayDrawer).toBe(false);
  });
});

describe('<App /> isLoggedIn true:', () => {
  let app;
  beforeEach(() => {
    app = shallow(<StatelessApp isLoggedIn={true} />);
  });
  it('Login is not displayed', () => {
    const component = app.find(Login);
    expect(component).toHaveLength(0);
  });
  it('CourseList is displayed', () => {
    const component = app.find(CourseList);
    expect(component).toHaveLength(1);
  });
  it('verify that markNotificationAsRead works as intended', () => {
    const notificationsBeforeRemove = app.state().listNotifications;
    app.instance().markNotificationAsRead(0);
    const notificationsAfterRemove = app.state().listNotifications;
    expect(notificationsAfterRemove).not.toBe(notificationsBeforeRemove);
  });
});

describe('Test mapStateToProps ', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  
  it('verify that the function returns the right object', () => {
    let state = {
      ui: fromJS({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: true,
      }),
    };
    expect(mapStateToProps(state)).toEqual({
      isLoggedIn: true,
      displayDrawer: false,
    });
  });
});