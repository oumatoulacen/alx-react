import React, {Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList'
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';

const listCourses = [
  {id: 1, name: "ES6", credit: 60},
  {id: 2, name: "Webpack", credit: 20},
  {id: 3, name: "React", credit: 40}
]
const listNotifications = [
  {id: 1, type:'default', value:"New course available"},
  {id: 2, type:'urgent', value:"New resume available"},
  {id: 3, type:'urgent', html:{__html: getLatestNotification() }}
]
class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(event) {
    event.preventDefault();
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render () {
    return (
      <React.Fragment>
        <Notifications listNotifications={listNotifications} displayDrawer/>
        <div className={css(styles.App)}>
            <Header />
            <div className={css(styles.AppBody)}>
              {this.props.isLoggedIn ?
                <BodySectionWithMarginBottom title="Course list"><CourseList listCourses={listCourses}/></BodySectionWithMarginBottom>
              : 
                <BodySectionWithMarginBottom title="Log in to continue"><Login /></BodySectionWithMarginBottom>
              }
              <BodySection title="News from the School">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et neque ex. Praesent pharetra, mi eget volutpat vehicula, nisl ligula porta turpis, ac euismod arcu dui et dui
                </p>
              </BodySection>
            </div>
        </div>
        <div className={css(styles.AppFooter)}>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

const styles = StyleSheet.create({
  App: {
    height: "100vh",
    maxWidth: "100vw",
    position: "relative",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  AppBody: {
    minHeight: "100%",
  },
  AppFooter: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    borderTop: "3px solid #ce314b",
  }
});
export default App;
