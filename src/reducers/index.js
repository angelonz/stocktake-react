import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = {
  showHeader: false
}

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_HEADER':
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

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export { store };
