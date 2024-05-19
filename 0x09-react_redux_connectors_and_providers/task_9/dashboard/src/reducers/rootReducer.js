import courseReducer, { initialCourseState } from "./courseReducer";
import notificationReducer, { initialNotificationState, } from "./notificationReducer";
import uiReducer, { initialUiState } from "./uiReducer";
import { combineReducers } from "redux";

import { Map } from "immutable";

export const initialState = {
  courses: initialCourseState,
  notifications: initialNotificationState,
  ui: initialUiState,
};

const rootReducer = combineReducers({
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
});

export default rootReducer;
