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
        authenticated: true,
        firstName: action.firstName,
        lastName: action.lastName
      });
    case 'LOGIN_FAILED':
    case 'NOT_AUTHENTICATED':
    case 'LOGOUT':
      authUtil.logout();
      localStorage.removeItem('reduxPersist:sites');
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
  loginInProgress: false,
  redirectToReferrer: false,
  errorMessage: undefined
};

const setLoginState = (loginInProgress, redirectToReferrer, errorMessage) => {
  return {
    loginInProgress,
    redirectToReferrer,
    errorMessage
  }
}

const login = (state = loginInitState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return assign({}, state, {
        loginInProgress: true
      });
    case 'LOGIN_SUCCESS':
      return assign({}, state, setLoginState(false, true, undefined));
    case 'NOT_AUTHENTICATED':
      return assign({}, state, setLoginState(false, false, action.errorMessage));
    case 'LOGIN_FAILED':
      return assign({}, state, setLoginState(false, false, action.errorMessage));

    default:
      return state;
  }
};

const sitesInitialState = {
  sites: [],
  balances: []
};

const sitesReducer = (state = sitesInitialState, action) => {
  switch (action.type) {
    case 'ADD_SITE_SUCCESS':
    case 'SITES_FETCHED':
      return assign({}, state, {
        sites: action.sites
      });  
    case 'SITE_BALANCE_FETCHED':

      // set isBalanceBeingFetched to false
      const enhancedSites = state.sites.map((site) => {
          return {
              ...site,
              isBalanceBeingFetched: false
          }
      });

      const balancesCopy = state.balances.map((obj) => {
        return obj;
      });

      const existingBalanceForSite = balancesCopy.find((obj) => {
        return obj.site === action.site;
      });

      if (existingBalanceForSite) {
        existingBalanceForSite.balance = action.balance;
      } else {
        balancesCopy.push({
          site: action.site,
          balance: action.balance
        });
      }

      return assign({}, state, {
        sites: enhancedSites,
        balances: balancesCopy
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
  sites: sitesReducer,
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
