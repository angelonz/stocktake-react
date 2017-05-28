import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authUtil from './utils/authUtil';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    
    return (
        <Route {...rest} render={(props) => {
            let returnElement = <Component {...props}/>;
            if (!authUtil.isAuthenticated()) {
                returnElement = (
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}/>
                );
            }

            return returnElement;
            
        }}/>
    )
};

export default ProtectedRoute;

