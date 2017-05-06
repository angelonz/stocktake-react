import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Landing}/>
        </Switch>
    );
};

export default Main;