import {
    ADD_USER_LABEL_FETCH,
    DELETE_USER_LABEL_FETCH,
    EDIT_USER_LABEL_FETCH,
} from '../constants';
import { LabelAction } from './actions';

export interface LabelState {
    labelAdded: boolean;
    labelDeleted: boolean;
    labelEdited: boolean;
}

export const initialLabelState: LabelState = {
    labelAdded: false,
    labelDeleted: false,
    labelEdited: false,
};

export const labelReducer = (state = initialLabelState, action: LabelAction) => {
    switch (action.type) {
      case ADD_USER_LABEL_FETCH:
          return {
              ...state,
              labelAdded: true,
          };
      case DELETE_USER_LABEL_FETCH:
          return {
              ...state,
              labelDeleted: true,
          };
      case EDIT_USER_LABEL_FETCH:
          return {
              ...state,
              labelEdited: true,
          };
      default:
          return {
              ...state,
          };
    }
};
