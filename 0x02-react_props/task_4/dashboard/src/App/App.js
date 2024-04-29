import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from '../CourseList/CourseList';


function App({ isLoggedIn }) {
  return (
    <div className="App">
      <div id="root-notifications">
          <Notifications displayDrawer={true} />
      </div>
      <Header />
      <div className="App-body">
        {
          isLoggedIn ? (
            <CourseList />
          ) : (
            <Login />
          )
        }
        </div>
      <Footer />
    </div>
  );
}

export default App;
 