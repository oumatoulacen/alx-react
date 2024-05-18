import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    NotificationTypeFilters,
    FETCH_NOTIFICATIONS_SUCCESS,
    SET_LOADING_STATE,
  } from '../actions/notificationActionTypes';
  import { fromJS } from 'immutable';
  import { notificationsNormalizer } from '../schema/notifications';
  
  export const initialNotificationState = fromJS({
    notifications: {},
    filter: NotificationTypeFilters.DEFAULT,
    loading: false,
  });
  
  const notificationReducer = (state = initialNotificationState, action) => {
    switch (action?.type) {
      case FETCH_NOTIFICATIONS_SUCCESS:
        return state.mergeDeep({ notifications: notificationsNormalizer(action.data) });
      case MARK_AS_READ:
        return state.setIn(['notifications', action.index, 'isRead'], true);
      case SET_TYPE_FILTER:
        return state.set('filter', action.filter);
      case SET_LOADING_STATE:
        return state.set('loading', action.loading);
      default:
        return state;
    }
  };
  
  export default notificationReducer;