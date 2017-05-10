import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = {
  showHeader: false,
  form: {} 
}

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_HEADER':
       console.log('state', state);
       console.log('action', action.value);
       return Object.assign({}, state, {
            showHeader: action.value
        });
    default:
      return state;
  }
};

const reducers = {
  showHeader: headerReducer,
  form: formReducer
};

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer);

export { store };
