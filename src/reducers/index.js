import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { assign } from 'lodash';
import thunkMiddleware from 'redux-thunk';

const toggleHeader = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_HEADER':
      return action.value;
    default:
      return state;
  }
};

const userRegistration = (state = {}, action) => {
  switch (action.type) {
    case 'REGISTER':
      return assign({}, state, {
        registrationInProgress: true
      });
    case 'REGISTER_SUCCESS':
      return assign({}, state, {
        registrationInProgress: false,
        registrationStatus: 'success'
      });
    case 'REGISTER_FAILED':  
      return assign({}, state, {
        registrationInProgress: false,
        registrationStatus: 'failed'
      });
    default:
      return state;
  }
}

const reducers = {
  showHeader: toggleHeader,
  registration: userRegistration,
  form: formReducer
};

const rootReducer = combineReducers(reducers);

const store = createStore(
  rootReducer, 
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
