import { LOGIN, LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './uiActionTypes';

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

const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS
    };
}

const loginFailure = () => {
    return {
        type: LOGIN_FAILURE
    };
}

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

// const loginRequest = (email, password) => async dispatch => {
//   dispatch({ type: 'LOGIN' }); // Dispatch login action

//   try {
//     const response = await fetch('http://localhost:8564/login-success.json');
//     if (response.ok) {
//       dispatch(loginSuccess()); // Dispatch login success action
//     } else {
//       dispatch(loginFailure()); // Dispatch login failure action
//     }
//   } catch (error) {
//     dispatch(loginFailure()); // Dispatch login failure action on error
//   }
// };

const loginRequest = (email, password) => {
  return (dispatch) => {
      dispatch(login(email, password));

      return fetch('http://localhost:8564/login-success.json')
          .then((res) => { res.json() })
          .then(() => { dispatch(loginSuccess()) })
          .catch(() => { dispatch(loginFailure()) })
  }
}

// const loginRequest = loginSuccess

export {
  login, logout, loginSuccess, loginFailure,
  displayNotificationDrawer, hideNotificationDrawer,
  boundLogin, boundLogout, boundDisplayNotificationDrawer,
  boundHideNotificationDrawer, loginRequest
};