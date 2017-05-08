import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Register from './Register';

const Main = (props) => {
    
    return (
        <Switch>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/register' component={Register}/>
        </Switch>
    );
};

export default Main;
