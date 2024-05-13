import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "../../../../task_5/dashboard/src/actions/notificationActionTypes";

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

export { markAsRead, setNotificationFilter, boundMarkAsRead, boundSetNotificationFilter };
