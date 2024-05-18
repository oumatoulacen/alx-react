import { initialState } from '../reducers/rootReducer';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { Map, fromJS, toJS } from 'immutable';

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
    
    // it('getUnreadNotifications', () => {
    //     const state = fromJS({});
    //     const initialState = {
    //         notifications: state.mergeDeep({
    //             notifications: {
    //                 1: {
    //                     guid: 1,
    //                     isRead: false
    //                 },
    //                 2: {
    //                     guid: 2,
    //                     isRead: true
    //                 }
    //             }
    //         })
    //     };
    //     expect(getUnreadNotifications(initialState)).toEqual([{
    //         guid: 1,
    //         isRead: false
    //     }]);
    // });
});
