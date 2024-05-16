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


const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

document.body.style.margin = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyCombination = this.handleKeyCombination.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.LogIn = this.LogIn.bind(this);
    this.logOut = this.logOut.bind(this);

    this.state = {
      user: user,
      logOut: this.logOut,
      listNotifications: listNotifications,
    };
  }

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter(
        (notification) => notification.id !== id
      ),
    });
  }

  logOut(){
    // Reset the user in the local state
    this.setState({
      user: user,
    });
  };
  
  LogIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  }
  
  handleKeyCombination(e) {
    if (e.key === "h" && e.ctrlKey) {
      alert("Logging you out");
      this.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyCombination);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyCombination);
  }

  render() {
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;
    return (
      <>
        <AppProvider
          value={{
            user: this.state.user,
            logOut: this.state.logOut,
          }}
        >
          <Notifications
            listNotifications={this.state.listNotifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={ displayNotificationDrawer }
            handleHideDrawer={ hideNotificationDrawer }
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <div className={css(styles.container)}>
            <div className={css(styles.app)}>
              <Header />
            </div>
            <div className={css(styles.appBody)}>
              { isLoggedIn ? (
                <BodySectionWithMarginBottom title="Log in to continue">
                  <Login logIn={this.LogIn}/>
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
        </AppProvider>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: true,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};



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


export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get("isUserLoggedIn"),
    displayDrawer : state.get("isNotificationDrawerVisible"),
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
  };
}

// inject the state of the store as props to the App component
export default connect(mapStateToProps, mapDispatchToProps)(App);
