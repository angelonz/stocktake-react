import { assign } from 'lodash';
import { reducer as formReducer } from 'redux-form';

const uiState = {
  showHeader: false
};

const userState = {
  authenticated: false,
  registered: false,
  verified: false
};

const toggleHeader = (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE_HEADER':
      return action.value;
    default:
      return state;
  }
};

const registrationInitState = {
  registrationInProgress: false,
  registrationStatus: 'failed',
};

const userRegistration = (state = registrationInitState, action) => {
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
};

const verificationInitState = {
  verificationInProgress: false,
  verificationStatus: 'failed',
};

const verification = (state = verificationInitState, action) => {
  switch (action.type) {
    case 'VERIFY':
      return assign({}, state, {
        verificationInProgress: true
      });
    case 'VERIFY_SUCCESS':
      return assign({}, state, {
        verificationInProgress: false,
        verificationStatus: 'success'
      });
    case 'VERIFY_FAILED':
      return assign({}, state, {
        verificationInProgress: false,
        verificationStatus: 'failed'
      });
    default:
      return state;
  }
};

const loginInitState = {
  loginInProgress: false,
  authenticated: false
};

const login = (state = loginInitState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return assign({}, state, {
        loginInProgress: true
      });
    case 'LOGIN_SUCCESS':
      return assign({}, state, {
        loginInProgress: false,
        authenticated: true
      });
    case 'LOGOUT':  
    case 'LOGIN_FAILED':
      return assign({}, state, {
        loginInProgress: false,
        authenticated: false
      });
    default:
      return state;
  }
};

const reducers = {
  showHeader: toggleHeader,
  registration: userRegistration,
  verification: verification,
  login: login,
  form: formReducer
};

export default reducers ;
