import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import { markAsAread, setNotificationFilter } from "./notificationActionCreators";

describe('notificationActionCreators', () => {
    it('markAsAread', () => {
        const action = markAsAread(1);
        expect(action).toEqual({ type: MARK_AS_READ, index: 1 });
    });

    it('setNotificationFilter', () => {
        const action = setNotificationFilter(NotificationTypeFilters.URGENT);
        expect(action).toEqual({ type: SET_TYPE_FILTER, filter: NotificationTypeFilters.URGENT });
    });
});
