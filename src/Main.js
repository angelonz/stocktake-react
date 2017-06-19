import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from './Landing';
import Register from './Register';
import Login from './Login';
import AccountActivation from './AccountActivation';
import Dashboard from './Dashboard';
import Dashboard2 from './Dashboard2';
import NoMatch from './NoMatch';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import authUtil from './utils/authUtil';

class Main extends Component {

    componentDidMount() {
        if (!authUtil.isAuthenticated()) {
            this.props.dispatch({
                type: 'NOT_AUTHENTICATED'
            });
        }
    }

    render() {

        return (
            <Switch>
                <Route exact path='/' component={Landing}/>
                <ProtectedRoute path='/dashboard2' component={Dashboard2} />
                <ProtectedRoute path='/dashboard' component={Dashboard} />
                <Route path='/register' render={() => {
                    return (
                        this.props.authenticated ? <Redirect to='/dashboard' /> : <Register />
                    )
                }} />
                <Route path='/activate' component={AccountActivation}/>
                <Route path='/verify' component={Login} />
                <Route path='/login' component={Login} />
                <Route path='/logout' render={() => {
                    this.props.dispatch({
                        type: 'LOGOUT'
                    });
                    return <Redirect to='/'/>
                }} />
                <Route component={NoMatch}/>
            </Switch>
        );

    }
    
};

const mapStateToProps = (state) => {
    const { authenticated } = state.user;
    return {
        authenticated
    }
};

export default withRouter(connect(mapStateToProps)(Main));
