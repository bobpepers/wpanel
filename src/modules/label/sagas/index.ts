import {takeEvery, takeLatest} from 'redux-saga/effects';
import {
    ADD_USER_LABEL_FETCH,
    DELETE_USER_LABEL_FETCH,
    EDIT_USER_LABEL_FETCH,
} from '../../constants';
import { addUserLabelSaga } from './addUserLabelSaga';
import { deleteUserLabelSaga } from './deleteUserLabelSaga';
import { editUserLabelSaga } from './editUserLabelSaga';

export function* rootLabelSaga() {
    yield takeLatest(ADD_USER_LABEL_FETCH, addUserLabelSaga);
    yield takeEvery(DELETE_USER_LABEL_FETCH, deleteUserLabelSaga);
    yield takeEvery(EDIT_USER_LABEL_FETCH, editUserLabelSaga);
}
