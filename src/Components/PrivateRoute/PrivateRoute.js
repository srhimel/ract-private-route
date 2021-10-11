import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return (
        <Route
            // এখানে সব কিছু রুট এর পেটে আছে 
            {...rest}
            render={({ location }) => user.email ?
                children
                :
                <Redirect
                    // এখানে সব কিছু রিডাইরেক্ট এর পেটে আছে 
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />
            }
        />
    );
};

export default PrivateRoute;