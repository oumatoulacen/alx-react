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

export {
    markAsRead,
    setNotificationFilter,
    boundMarkAsRead,
    boundSetNotificationFilter,
    setLoadingState
};
