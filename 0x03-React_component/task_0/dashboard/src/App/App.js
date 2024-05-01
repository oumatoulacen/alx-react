import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';
  
class App extends Component {
  constructor(props) {
    super(props);
  }

  listCourses = [
    {id: 1, name: "ES6", credit: 60},
    {id: 2, name: "Webpack", credit: 20},
    {id: 3, name: "React", credit: 40}
  ];
  
  listNotifications = [
    {id: 1, type: "default", value: "New course available"},
    {id: 2, type: "urgent", value: "New resume available"},
    {id: 3, type: "urgent", html: { __html: getLatestNotification() }}
  ];

  render () {
    const { isLoggedIn } = this.props
    return (
      <div className="App">
        <div id="root-notifications">
            <Notifications displayDrawer={true} listNotifications={listNotifications} />
        </div>
        <Header />
        <div className="App-body">
          {
            isLoggedIn ? (
              <CourseList listCourses={listCourses}/>
            ) : (
              <Login />
            )
          }
          </div>
        <Footer />
      </div>
    );
  }
}

// Defining propTypes for the class component
App.propTypes = {
  isLoggedIn: PropTypes.bool, // `PropTypes` to define expected types
  logOut: PropTypes.func,
};

// Providing default props
App.defaultProps = {
  isLoggedIn: false, // Default value if prop is not provided
  logOut: () => null, // Default value if prop is not provided
};

export default App;
 