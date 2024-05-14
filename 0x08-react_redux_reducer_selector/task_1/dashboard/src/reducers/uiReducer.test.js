import { initialState } from "./uiReducer";
import uiReducer from "./uiReducer";

describe("uiReducer", () => {
    it("should return the initial state", () => {
        const state = uiReducer(initialState, {});
        expect(state).toEqual(initialState);
    });

    it("should handle DISPLAY_NOTIFICATION_DRAWER", () => {
        const state = uiReducer(initialState, { type: "DISPLAY_NOTIFICATION_DRAWER" });
        expect(state).toEqual({ ...initialState, isNotificationDrawerVisible: true });
    });

    it("should handle HIDE_NOTIFICATION_DRAWER", () => {
        const state = uiReducer(initialState, { type: "HIDE_NOTIFICATION_DRAWER" });
        expect(state).toEqual({ ...initialState, isNotificationDrawerVisible: false });
    });

    it("should handle LOGIN_SUCCESS", () => {
        const state = uiReducer(initialState, { type: "LOGIN_SUCCESS" });
        expect(state).toEqual({ ...initialState, isUserLoggedIn: true });
    });

    it("should handle LOGIN_FAILURE", () => {
        const state = uiReducer(initialState, { type: "LOGIN_FAILURE" });
        expect(state).toEqual({ ...initialState, isUserLoggedIn: false });
    });

    it("should handle LOGIN", () => {
        const state = uiReducer(initialState, { type: "LOGIN" });
        expect(state).toEqual({ ...initialState, isUserLoggedIn: true });
    }); 

    it("should handle LOGOUT", () => {
        const state = uiReducer(initialState, { type: "LOGOUT" });
        expect(state).toEqual({ ...initialState, isUserLoggedIn: false });
    });

    it("should return the current state if the action is not recognized", () => {
        const state = uiReducer(initialState, { type: "SELECT_COURSE" });
        expect(state).toEqual(initialState);
    });

});