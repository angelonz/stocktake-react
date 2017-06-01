import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from './Landing';
import Register from './Register';
import Login from './Login';
import AccountActivation from './AccountActivation';
import Dashboard from './Dashboard';
import NoMatch from './NoMatch';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import authUtil from './utils/authUtil';

const Main = (props) => {

    if (!authUtil.isAuthenticated()) {
        props.dispatch({
            type: 'NOT_AUTHENTICATED'
        });
    }

    return (
        <Switch>
            <Route exact path='/' component={Landing}/>
            <ProtectedRoute path='/dashboard' component={Dashboard} />
            <Route path='/register' render={() => {
                return (
                    props.authenticated ? <Redirect to='/dashboard' /> : <Register />
                )
            }} />
            <Route path='/activate' component={AccountActivation}/>
            <Route path='/verify' component={Login} />
            <Route path='/login' component={Login} />
            <Route path='/logout' render={() => {
                props.dispatch({
                    type: 'LOGOUT'
                });
                return <Redirect to='/'/>
            }} />
            <Route component={NoMatch}/>
        </Switch>
    );
};

const mapStateToProps = (state) => {
    const { authenticated } = state.user;
    return {
        authenticated
    }
};

export default withRouter(connect(mapStateToProps)(Main));
