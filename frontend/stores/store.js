import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = (state, middleware) => {
  return createStore(rootReducer, state, middleware)
}

export default configureStore