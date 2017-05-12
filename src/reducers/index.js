import { assign } from 'lodash';
import { reducer as formReducer } from 'redux-form';

const toggleHeader = (state = true, action) => {
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
        registrationStatus: 'success',
        email: action.email
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

export default reducers ;
