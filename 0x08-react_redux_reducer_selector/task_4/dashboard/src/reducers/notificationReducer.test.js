import notificationReducer from "./notificationReducer";
import { FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";

describe("notificationReducer", () => {
    it("should return the initial state", () => {
        expect(notificationReducer(undefined, {})).toEqual({
            notifications: [],
            filter: "DEFAULT"
        });
    });
    
    it("should handle FETCH_NOTIFICATIONS_SUCCESS", () => {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
                { id: 1, type: "default", value: "New course available" },
                { id: 2, type: "urgent", value: "New resume available" },
                { id: 3, type: "urgent", value: "New data available" }
            ]
        };

        const expectedState = {
            notifications: [
                { id: 1, type: "default", value: "New course available", isRead: false },
                { id: 2, type: "urgent", value: "New resume available", isRead: false },
                { id: 3, type: "urgent", value: "New data available", isRead: false }
            ],
            filter: "DEFAULT"
        };

        expect(notificationReducer(undefined, action)).toEqual(expectedState);
    });
    
    it("should handle MARK_AS_READ", () => {
        const initialState = {
            notifications: [
            { id: 1, type: "default", value: "New course available", isRead: false },
            { id: 2, type: "urgent", value: "New resume available", isRead: false },
            { id: 3, type: "urgent", value: "New data available", isRead: false }
            ],
            filter: "DEFAULT"
        };

        const action = {
            type: "MARK_AS_READ",
            index: 2
        };
        
        const expectedState = {
            notifications: [
                { id: 1, type: "default", value: "New course available", isRead: false },
                { id: 2, type: "urgent", value: "New resume available", isRead: true },
                { id: 3, type: "urgent", value: "New data available", isRead: false }
            ],
            filter: "DEFAULT"
        };

        expect(notificationReducer(initialState, action)).toEqual(expectedState);
    });
    
    it("should handle SET_TYPE_FILTER", () => {
        const initialState = {
            notifications: [
                { id: 1, type: "default", value: "New course available", isRead: false },
                { id: 2, type: "urgent", value: "New resume available", isRead: false },
                { id: 3, type: "urgent", value: "New data available", isRead: false }
            ],
            filter: "DEFAULT"
        };

        const action = {
            type: "SET_TYPE_FILTER",
            filter: "URGENT"
        };

        const expectedState = {
            notifications: [
                { id: 1, type: "default", value: "New course available", isRead: false },
                { id: 2, type: "urgent", value: "New resume available", isRead: false },
                { id: 3, type: "urgent", value: "New data available", isRead: false }
            ],
            filter: "URGENT"
        };
        
        expect(notificationReducer(initialState, action)).toEqual(expectedState);
    });
});
