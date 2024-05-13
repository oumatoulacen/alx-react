import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";

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
