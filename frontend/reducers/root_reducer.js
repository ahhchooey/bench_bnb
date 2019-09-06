import entitiesReducer from './entities_reducer';
import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import filtersReducer from './filters_reducer.js';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  filters: filtersReducer
})


export default rootReducer;
