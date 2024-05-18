import { notificationsNormalizer } from "../schema/notifications";
import {
    MARK_AS_READ, SET_TYPE_FILTER,
    NotificationTypeFilters,
    SET_LOADING_STATE,
    FETCH_NOTIFICATIONS_SUCCESS
} from "./notificationActionTypes";

const markAsRead = (index) => {
    return {
        type: MARK_AS_READ,
        index
    };
};

const setNotificationFilter = (filter) => {
    return {
        type: SET_TYPE_FILTER,
        filter
    };
};

const boundMarkAsRead = (index) => {
    return (dispatch) => {
        dispatch(markAsRead(index));
    };
};

const boundSetNotificationFilter = (filter) => {
    return (dispatch) => {
        dispatch(setNotificationFilter(filter));
    };
};

const setLoadingState = (loading) => {
    return {
        type: SET_LOADING_STATE,
        loading
    };
}

const setNotifications = (data) => {
    return {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        data
    };
}

import notificationReducer from "../reducers/notificationReducer";
const fetchNotifications = () => {
    return (dispatch) => {
        dispatch(setLoadingState(true));
        return fetch('http://localhost:8564/notifications.json')
            .then((response) => response.json())
            .then((data) => {
                console.log('data from fetchNotif: ', Object.values(notificationsNormalizer(data))[0]);
                dispatch(setNotifications(data));
                // const state = notificationReducer(undefined, setNotifications(data));
                // console.log('state from fetchNotif: ', Object.values(state.get('notifications').toJS()));
            })
            .catch((error) => console.log(error.message))
            .finally(() => dispatch(setLoadingState(false)));
    };
}

export {
    markAsRead,
    setNotificationFilter,
    boundMarkAsRead,
    boundSetNotificationFilter,
    setLoadingState,
    setNotifications,
    fetchNotifications
};
