import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest } from "./uiActionCreators";
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';


// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

// describe('loginRequest action', () => {
//     afterEach(() => {
//         fetchMock.restore(); // Clear all fetch mocks after each test
//     });

//     it('dispatches LOGIN_SUCCESS when login is successful', () => {
//         const expectedActions = [loginSuccess()];
//         const store = mockStore({});

//         fetchMock.getOnce('http://localhost:8564/login-success.json', { someData: 'data' });

//         return store.dispatch(loginRequest('test@example.com', 'password'))
//             .then(() => {
//                 expect(store.getActions()).toEqual(expectedActions);
//             });
//     });

//     it('dispatches LOGIN_FAILURE when login fails', () => {
//         const expectedActions = [loginFailure()];
//         const store = mockStore({});

//         fetchMock.getOnce('http://localhost:8564/login-success.json', 500); // Simulating failure with status code 500

//         return store.dispatch(loginRequest('test@example.com', 'password'))
//             .then(() => {
//                 expect(store.getActions()).toEqual(expectedActions);
//             });
//     });
// });

describe("uiActionCreators", () => {
    it("login", () => {
        const result = login("email", "password");
        const expected = {
            type: LOGIN,
            user: { email: "email", password: "password" }
        };

        expect(result).toEqual(expected);
    });

    it("logout", () => {
        const result = logout();
        const expected = {
            type: LOGOUT
        };

        expect(result).toEqual(expected);
    });

    it("displayNotificationDrawer", () => {
        const result = displayNotificationDrawer();
        const expected = {
            type: DISPLAY_NOTIFICATION_DRAWER
        };

        expect(result).toEqual(expected);
    });

    it("hideNotificationDrawer", () => {
        const result = hideNotificationDrawer();
        const expected = {
            type: HIDE_NOTIFICATION_DRAWER
        };

        expect(result).toEqual(expected);
    });

});
