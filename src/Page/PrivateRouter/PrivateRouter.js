import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRouter = ({ children, ...rest }) => {

    const { user, isLoading } = useAuth()

    if (isLoading) {
        return <Spinner animation="border" variant="warning" />
    }

    return (
        <div>

            <Route
                {...rest}

                render={({ location }) => user.email ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                ></Redirect>}
            >

            </Route>
        </div>
    );
};

export default PrivateRouter;