import * as actions from './actions';

describe('ChangeUser actions', () => {
    it('should check changeUserOTP action creator', () => {
        const payload = {
            uid: '',
            otp: false,
        };
        const expectedAction = { type: 'CHANGE_USER_OTP_FETCH', payload };
        expect(actions.changeUserOTP(payload)).toEqual(expectedAction);
    });

    it('should check changeUserRole action creator', () => {
        const payload = {
            uid: '',
            role: '',
        };
        const expectedAction = { type: 'CHANGE_USER_ROLE_FETCH', payload };
        expect(actions.changeUserRole(payload)).toEqual(expectedAction);
    });

    it('should check changeUserState action creator', () => {
        const payload = {
            uid: '',
            state: '',
        };
        const expectedAction = { type: 'CHANGE_USER_STATE_FETCH', payload };
        expect(actions.changeUserState(payload)).toEqual(expectedAction);
    });
});
