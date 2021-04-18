import SummaryReducerState from '../classes/SummaryReducerState';
import {
  SET_EMAIL,
  SET_LAST_VISIT,
  SET_SYMPTOMS,
  SET_NAME
} from '../actionTypes/summary.actionTypes';

const initialState = new SummaryReducerState();

const SummaryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    case SET_SYMPTOMS:
      return { ...state, symptoms: action.payload };
    case SET_LAST_VISIT:
      return { ...state, lastVisit: action.payload };
    default:
      return state;
  }
};

export default SummaryReducer;
