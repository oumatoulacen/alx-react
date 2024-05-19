import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";

// components
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";

// utils functions and helpers
import { getLatestNotification } from "../utils/utils";
import { AppProvider, user } from "./AppContext";

// action creators
import { hideNotificationDrawer, displayNotificationDrawer } from "../actions/uiActionCreators";
import { loginRequest, logout } from "../actions/uiActionCreators";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const cssVars = {
  mainColor: "#e01d3f",
};

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create({
  container: {
    width: "calc(100% - 16px)",
    marginLeft: "8px",
    marginRight: "8px",
  },

  app: {
    borderBottom: `3px solid ${cssVars.mainColor}`,
  },

  appBody: {
    display: "flex",
    justifyContent: "center",
  },

  footer: {
    borderTop: `3px solid ${cssVars.mainColor}`,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    bottom: 0,
    fontStyle: "italic",
    [screenSize.small]: {
      position: "static",
    },
  },
});

document.body.style.margin = 0;


class App extends Component {
  render() {
    const {
      isLoggedIn,
      displayDrawer, displayNotificationDrawer,
      hideNotificationDrawer, logIn 
    } = this.props;

    return (
      <>
          <Notifications
            displayDrawer={displayDrawer}
            handleDisplayDrawer={ displayNotificationDrawer }
            handleHideDrawer={ hideNotificationDrawer }
          />
          <div className={css(styles.container)}>
            <div className={css(styles.app)}>
              <Header />
            </div>
            <div className={css(styles.appBody)}>
              { !isLoggedIn ? (
                <BodySectionWithMarginBottom title="Log in to continue">
                  <Login logIn={logIn}/>
                </BodySectionWithMarginBottom>
              ) : (
                <BodySectionWithMarginBottom title="Course list">
                  <CourseList listCourses={listCourses} />
                </BodySectionWithMarginBottom>
              )}
            </div>
            <BodySection title="News from the School">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </BodySection>

            <div className={css(styles.footer)}>
              <Footer />
            </div>
          </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  logIn: PropTypes.func,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: true,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  logIn: () => {},
  logOut: () => {},
};

export const mapStateToProps = (state) => ({
  isLoggedIn: state.ui.get('isUserLoggedIn'),
  displayDrawer: state.ui.get('isNotificationDrawerVisible'),
});

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  logIn: loginRequest,
  logOut: logout,
};

export { App as StatelessApp };
export default connect(mapStateToProps, mapDispatchToProps)(App);
