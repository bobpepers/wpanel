import * as actions from './actions';
import { changeUserReducer, initialChangeUserState } from './reducer';

describe('Change user reducer', () => {
    it('should handle CHANGE_USER_OTP_FETCH', () => {
        const expectedState = {
            ...initialChangeUserState,
            OTPChanged: true,
        };
        const payload = {
            uid: '',
            otp: false,
        };
        expect(changeUserReducer(initialChangeUserState, actions.changeUserOTP(payload))).toEqual(expectedState);
    });

    it('should handle CHANGE_USER_ROLE_FETCH', () => {
        const expectedState = {
            ...initialChangeUserState,
            roleChanged: true,
        };
        const payload = {
            uid: '',
            role: '',
        };
        expect(changeUserReducer(initialChangeUserState, actions.changeUserRole(payload))).toEqual(expectedState);
    });

    it('should handle CHANGE_USER_STATE_FETCH', () => {
        const expectedState = {
            ...initialChangeUserState,
            stateChanged: true,
        };
        const payload = {
            uid: '',
            state: '',
        };
        expect(changeUserReducer(initialChangeUserState, actions.changeUserState(payload))).toEqual(expectedState);
    });
});
