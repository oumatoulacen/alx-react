import {
    MARK_AS_READ, SET_TYPE_FILTER,
    NotificationTypeFilters,
    SET_LOADING_STATE
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

const fetchNotifications = () => {
    return (dispatch) => {
        dispatch(setLoadingState(true));
        return fetch('/notifications.json')
            .then((response) => response.json())
            .then((data) => {
                dispatch(setNotifications(data));
                dispatch(setLoadingState(false));
            })
            .catch((error) => console.log(error));
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
