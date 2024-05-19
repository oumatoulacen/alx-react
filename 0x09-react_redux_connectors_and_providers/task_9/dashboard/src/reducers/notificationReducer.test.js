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
});