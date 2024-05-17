import uiReducer, { initialUiState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { Map } from 'immutable';

describe('reducer', function () {
  it('initial state', function () {
    const state = uiReducer(initialUiState, {});
    expect(state).toBe(initialUiState);
  });

  it('DISPLAY_NOTIFICATION_DRAWER', function () {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state).toEqual( initialUiState.set('isNotificationDrawerVisible', true));
  });

  it('HIDE_NOTIFICATION_DRAWER', function () {
    const state = uiReducer(undefined, { type: 'HIDE_NOTIFICATION_DRAWER' });
    expect(state).toEqual(initialUiState);
  });

  it('LOGIN', function () {
    const state = uiReducer(undefined, { type: 'LOGIN', user: { email: 'email', password: 'password' } });
    expect(state).toEqual(initialUiState.set('isUserLoggedIn', true).set('user', { email: 'email', password: 'password' }));
  });

  it('LOGOUT', function () {
    const state = uiReducer(undefined, { type: 'LOGOUT', user: null });
    expect(state).toEqual(initialUiState.set('isUserLoggedIn', false).set('user', null));
  });
});