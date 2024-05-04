import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { shallow, render } from 'enzyme';
import React from 'react'


describe('App', () => {
    
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />)
    })
    test('App should not rash', () => {
        expect(wrapper.length).toBe(1)
    });

    // test("App renders a div with the class: App-header", () => {
    //     wrapper.setProps({isLoggedIn: true})
    //     // console.debug(wrapper.html())
    //     expect(wrapper.find('.App-header').length).toBe(1)
    // });

    test("App renders a div with the class: App-body", () => {
        wrapper.setProps({isLoggedIn: true})
        expect(wrapper.find('.App-body').length).toBe(1);
    });

    test("App renders a div with the class: App-footer", () => {
        wrapper.setProps({isLoggedIn: true})
        expect(wrapper.find('.App-footer').length).toBe(1);
    });

    // should work if we pass the correct props to the Notifications component
    // test("check if App component contain the Notifications component", () => {
    //     wrapper.setProps({isLoggedIn: true, displayDrawer: true})
    //     console.debug(wrapper.html())
    //     expect(wrapper.contains(<Notifications />)).toBeTruthy()
    // })

    test("check if App component contain the Header component", () => {
        wrapper.setProps({isLoggedIn: true})
        expect(wrapper.contains(<Header />)).toBeTruthy()
    })
    test("check if App component contain the Login component", () => {
        wrapper.setProps({isLoggedIn: false})
        expect(wrapper.contains(<Login />)).toBeTruthy()
    })
    test("check if App component contain the Footer component", () => {
        wrapper.setProps({isLoggedIn: true})
        expect(wrapper.contains(<Footer />)).toBeTruthy()
    })
    test("check that CourseList is not displayed ", () => {
        wrapper.setProps({isLoggedIn: false})
        expect(wrapper.contains(<CourseList />)).toBeFalsy()
    })

    describe("when isLoggedIn prop is true", () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<App isLoggedIn={true} />)
        })
        test("verify that the Login component is not included", () => {
            expect(wrapper.contains(<Login />)).toBeFalsy()
        })
        test("verify that the CourseList component is included", () => {
            expect(wrapper.find('CourseList').length).toBe(1)
        })
    })

    describe("when isLoggedIn prop is false", () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<App isLoggedIn={false} />)
        })
        test("verify that the Login component is included", () => {
            expect(wrapper.contains(<Login />)).toBeTruthy()
        })
        test("verify that the CourseList component is not included", () => {
            expect(wrapper.find('CourseList').length).toBe(0)
        })
    })

    test("that logOut is when pressing ctrl + h", () => {
        const logOut = jest.fn();
        const wrapper = shallow(<App logOut={logOut} />);
        const event = {key: 'h', ctrlKey: true, preventDefault: jest.fn()};
        wrapper.instance().handleKeyPress(event);
        expect(logOut).toHaveBeenCalled();
        expect(event.preventDefault).toHaveBeenCalled();
    });

    test("test alert is called with Logging you out", () => {
        const logOut = jest.fn();
        const wrapper = shallow(<App logOut={logOut} />);
        const event = {key: 'h', ctrlKey: true, preventDefault: jest.fn()};
        global.alert = jest.fn();  // Ensure `alert` is mocked
        wrapper.instance().handleKeyPress(event);
        expect(global.alert).toHaveBeenCalledWith('Logging you out');
    });

    test("test that the event listener is removed on componentWillUnmount", () => {
        const wrapper = shallow(<App />);
        const instance = wrapper.instance();
        const removeEventListener = jest.spyOn(document, 'removeEventListener');
        instance.componentWillUnmount();
        expect(removeEventListener).toHaveBeenCalledWith('keydown', instance.handleKeyPress);
    });

    test("test that the event listener is added on componentDidMount", () => {
        const wrapper = shallow(<App />);
        const instance = wrapper.instance();
        const addEventListener = jest.spyOn(document, 'addEventListener');
        instance.componentDidMount();
        expect(addEventListener).toHaveBeenCalledWith('keydown', instance.handleKeyPress);
    });
});