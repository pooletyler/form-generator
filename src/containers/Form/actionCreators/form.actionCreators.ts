import {
  ISetAnyAction,
  ISetArrayAction,
  ISetNumberAction,
} from '../../../types/actions';
import { PageConfig } from '../../../types/form';
import {
  SET_CONFIG,
  SET_PAGE,
  SET_FORM_STATE,
} from '../actionTypes/form.actionTypes';
import FormReducerState from '../classes/FormReducerState';

export const setConfig = (config: PageConfig[]): ISetArrayAction => {
  return { type: SET_CONFIG, payload: config };
};

export const setPage = (page: number): ISetNumberAction => {
  return { type: SET_PAGE, payload: page };
};

export const setFormState = (state: FormReducerState): ISetAnyAction => {
  return { type: SET_FORM_STATE, payload: state };
};
