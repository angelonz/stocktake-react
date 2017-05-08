import { createStore } from 'redux';
import { connect } from 'react-redux';

let initialState = {
  show: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_HEADER':
       return Object.assign({}, state, {
            show: action.value
        });
    default:
      return state;
  }
};

const store = createStore(rootReducer);

const mapStateToProps = (state) => {
  return {
    showHeader: state.show
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleHeader: (show) => {
      dispatch({
        type: 'TOGGLE_HEADER',
        value: show
      })
    }
  }
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export { connector, store };