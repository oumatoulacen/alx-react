import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

export const initialState = Map({
    notifications: {},
    filter: 'DEFAULT'
});

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            // this function won't work as expected if the data was as notifications.json but with the data as in previous tasks
            const normalizedNotifications = notificationsNormalizer(action.data);
            // normalizedNotifications is an object with the following structure: { notifications: { 1: { ... }, 2: { ... }, ... } }
            Object.keys(normalizedNotifications.notifications).forEach((key) => {
                normalizedNotifications.notifications[key].isRead = false;
            });
            return state.merge(normalizedNotifications);
        case MARK_AS_READ:
            return state.setIn(['notifications', String(action.index), 'isRead'], true);
        case SET_TYPE_FILTER:
            return state.set('filter', action.filter);
        default:
            return state;
    }
}

export default notificationReducer;
