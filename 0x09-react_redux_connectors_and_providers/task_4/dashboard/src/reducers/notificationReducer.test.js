import notificationReducer, { initialNotificationState } from "./notificationReducer";
import { FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";
import { Map } from "immutable";
import { notificationsNormalizer } from "../schema/notifications";

const data = [
      {
        id: 1,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available"
      }
];
  
const normalizedData = notificationsNormalizer(data);

describe("notificationReducer", () => {
    it("should return the initial state for the reducer", () => {
        const state = notificationReducer(undefined, {});
        expect(state).toEqual(initialNotificationState);
    });

    it("should return the data from FETCH_NOTIFICATIONS_SUCCESS", () => {
        const state = notificationReducer(undefined, {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data
        });
        expect(state.toJS()).toEqual({
            notifications: {
                1: { id: 1, isRead: false, type: "default", value: "New course available" },
                2: { id: 2, isRead: false, type: "urgent", value: "New resume available" },
                3: { id: 3, isRead: false, type: "urgent", value: "New data available" }
            },
            filter: "DEFAULT"
        });
    });

    it("should return the data from FETCH_NOTIFICATIONS_SUCCESS with isRead set to true", () => {
        const state = notificationReducer(undefined, {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data
        });
        const newState = notificationReducer(state, {
            type: "MARK_AS_READ",
            index: 2
        });
        expect(newState.toJS()).toEqual({
            notifications: {
                1: { id: 1, isRead: false, type: "default", value: "New course available" },
                2: { id: 2, isRead: true, type: "urgent", value: "New resume available" },
                3: { id: 3, isRead: false, type: "urgent", value: "New data available" }
            },
            filter: "DEFAULT"
        });
    });

    it("should return the data from FETCH_NOTIFICATIONS_SUCCESS with filter set to 'URGENT'", () => {
        const state = notificationReducer(undefined, {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data
        });
        const newState = notificationReducer(state, {
            type: "SET_TYPE_FILTER",
            filter: "URGENT"
        });
        expect(newState.toJS()).toEqual({
            notifications: {
                1: { id: 1, isRead: false, type: "default", value: "New course available" },
                2: { id: 2, isRead: false, type: "urgent", value: "New resume available" },
                3: { id: 3, isRead: false, type: "urgent", value: "New data available" }
            },
            filter: "URGENT"
        });
    });
});