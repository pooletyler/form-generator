import { combineReducers } from 'redux';
import FormReducer from '../containers/Form/reducers/form.reducer';

export default combineReducers({
  form: FormReducer,
});
