import { createSelector } from 'reselect';

// for notifications reducer
export const filterTypeSelected = state => state.get('filter');
export const getNotifications = state => state.get('notifications');

// for root reducer
export const getNotificationsSelector = (state) => state.notifications;
export const filterTypeSelector = state => state.notifications.get('filter');

// memoized selector
export const getUnreadNotificationsByType = createSelector(
  getNotificationsSelector,
  filterTypeSelector,
  (notifications, filter) => {
    const notificationsArray = notifications.get('notifications').valueSeq().toArray();

    return notificationsArray.filter((notification) => {
      if (filter === 'DEFAULT') {
        return notification.isRead === false;
      } else if (filter === 'URGENT') {
        return notification.isRead === false && notification.type === 'urgent';
      }
    });
  }
);