import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import About from './About';
import Earnings from './Earnings';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Landing}/>
                <Route path='/about' component={About}/>
                <Route path='/earnings' component={Earnings}/>
            </Switch>
        </main>
    );
};

export default Main;