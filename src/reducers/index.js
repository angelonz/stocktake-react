import { assign } from 'lodash';
import { reducer as formReducer } from 'redux-form';
import authUtil from '../utils/authUtil';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const uiState = {
  showHeader: true
};

const userState = {
  authenticated: authUtil.isAuthenticated(),
  email: undefined
} 

const userStateReducer = (state = userState, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      return assign({}, state, {
        email: action.email
      });
    case 'LOGIN_SUCCESS':
      return assign({}, state, {
        authenticated: true
      });
    case 'LOGIN_FAILED':
      return assign({}, state, {
        authenticated: false
      });
    case 'LOGOUT':
      authUtil.logout();
      return assign({}, state, {
        authenticated: false
      });  
    default:
      return state;
  }
}

const uiStateReducer = (state = uiState, action) => {
  switch (action.type) {
    case 'TOGGLE_HEADER':
      return assign({}, state, {
        showHeader: action.value
      });
    case 'LOGOUT':
      authUtil.logout();
      return assign({}, state, {
        showHeader: false
      });  
    default:
      return state;
  }
};

const registrationInitState = {
  registrationInProgress: false,
  registrationStatus: '',
  errorMessage: ''
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
        registrationStatus: 'success'
      });
    case 'REGISTER_FAILED':  
      console.log('failed', action);
      return assign({}, state, {
        registrationInProgress: false,
        registrationStatus: 'failed',
        errorMessage: action.errorMessage
      });
    default:
      return state;
  }
};

const verificationInitState = {
  verificationInProgress: false,
  verificationStatus: '',
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
  loginInProgress: false
};

const login = (state = loginInitState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return assign({}, state, {
        loginInProgress: true
      });
    case 'LOGIN_SUCCESS':
      return assign({}, state, {
        loginInProgress: false
      });
    case 'LOGIN_FAILED':
      return assign({}, state, {
        loginInProgress: false
      });
    default:
      return state;
  }
};

const appReducer = combineReducers({
  ui: uiStateReducer,
  user: userStateReducer,
  registration: userRegistration,
  verification: verification,
  login: login,
  form: formReducer,
  router: routerReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
}

export default rootReducer ;
