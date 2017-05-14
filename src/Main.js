import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Register from './Register';
import Login from './Login';
import AccountActivation from './AccountActivation';
import NoMatch from './NoMatch';

const Main = () => {
    
    return (
        <Switch>
            <Route exact path='/' component={Landing}/>
            <Route path='/register' component={Register} />
            <Route path='/activate' component={AccountActivation}/>
            <Route path='/verify' component={Login} />
            <Route path='/login' component={Login} />
            <Route component={NoMatch}/>
        </Switch>
    );
};

export default Main;
