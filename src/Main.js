import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from './Landing';
import Register from './Register';
import Login from './Login';
import AccountActivation from './AccountActivation';
import Dashboard from './Dashboard';
import NoMatch from './NoMatch';
import authUtil from './utils/authUtil';

const Main = () => {
    
    return (
        <Switch>
            <Route exact path='/' component={Landing}/>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/register' component={Register} />
            <Route path='/activate' component={AccountActivation}/>
            <Route path='/verify' component={Login} />
            <Route path='/login' component={Login} />
            <Route path='/logout' render={() => {
                authUtil.logout();
                return <Redirect to='/'/>
            }} />
            <Route component={NoMatch}/>
        </Switch>
    );
};

export default Main;
