import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Register from './Register';
import AccountActivation from './AccountActivation';

const Main = () => {
    
    return (
        <Switch>
            <Route exact path='/' component={Landing}/>
            <Route path='/register' component={Register}/>
            <Route path='/activate' component={AccountActivation}/>
        </Switch>
    );
};

export default Main;
