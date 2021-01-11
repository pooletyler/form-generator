import FormReducerState from '../classes/FormReducerState';
import {
  SET_CONFIG,
  SET_FORM_STATE,
  SET_PAGE,
} from '../actionTypes/form.actionTypes';

const initialState = new FormReducerState();

const FormReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CONFIG:
      return { ...state, config: action.payload };
    case SET_PAGE:
      return { ...state, page: action.payload };
    case SET_FORM_STATE:
      return action.payload;
    default:
      return state;
  }
};

export default FormReducer;
