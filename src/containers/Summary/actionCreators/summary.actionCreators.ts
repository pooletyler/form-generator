import {
  ISetArrayAction,
  ISetStringAction,
} from '../../../types/actions';
import {
  SET_EMAIL,
  SET_LAST_VISIT,
  SET_NAME,
  SET_SYMPTOMS
} from '../actionTypes/summary.actionTypes';

export const setName = (name: string): ISetStringAction => {
  return { type: SET_NAME, payload: name };
};

export const setEmail = (email: string): ISetStringAction => {
  return { type: SET_EMAIL, payload: email };
};

export const setSymptoms = (symptoms: string[]): ISetArrayAction => {
  return { type: SET_SYMPTOMS, payload: symptoms };
};

export const setLastVisit = (lastVisit: string): ISetStringAction => {
  return { type: SET_LAST_VISIT, payload: lastVisit };
};


