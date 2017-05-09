import { createStore } from 'redux';

let initialState = {
  showHeader: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_HEADER':
       return Object.assign({}, state, {
            showHeader: action.value
        });
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export { store };
