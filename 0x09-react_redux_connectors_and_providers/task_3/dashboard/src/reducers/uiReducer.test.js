import uiReducer, { initialState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { Map } from 'immutable';

describe('reducer', function () {
  it('initial state', function () {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('SELECT_COURSE', function () {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state).toEqual(initialState);
  });

  it('DISPLAY_NOTIFICATION_DRAWER', function () {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state).toEqual( initialState.set('isNotificationDrawerVisible', true));
  });

  it('HIDE_NOTIFICATION_DRAWER', function () {
    const state = uiReducer(undefined, { type: 'HIDE_NOTIFICATION_DRAWER' });
    expect(state).toEqual(initialState);
  });

  it('LOGIN', function () {
    const state = uiReducer(undefined, { type: 'LOGIN', user: { email: 'email', password: 'password' } });
    expect(state).toEqual(initialState.set('isUserLoggedIn', true).set('user', { email: 'email', password: 'password' }));
  });

  it('LOGOUT', function () {
    const state = uiReducer(undefined, { type: 'LOGOUT', user: null });
    expect(state).toEqual(initialState.set('isUserLoggedIn', false).set('user', null));
  });
});