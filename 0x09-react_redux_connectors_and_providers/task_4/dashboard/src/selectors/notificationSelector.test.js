import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { Map } from 'immutable';

describe('notificationSelector', () => {
    it('filterTypeSelected', () => {
        const state = Map({
            filter: 'DEFAULT'
        });
        expect(filterTypeSelected(state)).toEqual('DEFAULT');
    });
    
    it('getNotifications', () => {
        const state = Map({
            notifications: []
        });
        expect(getNotifications(state)).toEqual([]);
    });
    
    it('getUnreadNotifications', () => {
        const state = Map({
            notifications: [
                { isRead: false },
                { isRead: true },
                { isRead: false }
            ]
        });
        expect(getUnreadNotifications(state)).toEqual([
            { isRead: false },
            { isRead: false }
        ]);
    });
});
