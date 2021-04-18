import { combineReducers } from 'redux';
import SummaryReducer from 'src/containers/Summary/reducers/summary.reducer';
import FormReducer from '../containers/Form/reducers/form.reducer';

export default combineReducers({
  form: FormReducer,
  summary: SummaryReducer
});
