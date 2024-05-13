import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "../../../../task_5/dashboard/src/actions/uiActionTypes";

const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password }
  };
};

const logout = () => {
    return {
        type: LOGOUT
    };
};

const displayNotificationDrawer = () => {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER
    };
};

const hideNotificationDrawer = () => {
    return {
        type: HIDE_NOTIFICATION_DRAWER
    };
};

const boundLogin = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
  };
};

const boundLogout = () => {
  return (dispatch) => {
    dispatch(logout());
  };
};

const boundDisplayNotificationDrawer = () => {
  return (dispatch) => {
    dispatch(displayNotificationDrawer());
  };
};

const boundHideNotificationDrawer = () => {
  return (dispatch) => {
    dispatch(hideNotificationDrawer());
  };
};

export { login, logout, displayNotificationDrawer, hideNotificationDrawer, boundLogin, boundLogout, boundDisplayNotificationDrawer, boundHideNotificationDrawer };
