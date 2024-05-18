export const filterTypeSelected = state => state.get('filter');

export const getNotifications = state => state.get('notifications');

export const getUnreadNotifications = (state) => {
  const notifications = state.notifications.get("notifications").valueSeq().toArray();
  if (notifications) {
    // console.log('notifications unfiltered: ', notifications);
    const filtered = notifications
      .filter((value) => value.isRead === false);
    // console.log('filtered: ', filtered);
    return filtered;
  }

  return [];
};
