import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Register from './Register';

const Main = () => {
    
    return (
        <Switch>
            <Route exact path='/' component={Landing}/>
            <Route path='/register' component={Register}/>
        </Switch>
    );
};

export default Main;
