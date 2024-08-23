import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isObjectEmpty } from '../scenes/MainScene';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const loggedUser = useSelector((appReducer) => appReducer.loggedUser) || {};

  const isAuthenticated = !isObjectEmpty(loggedUser);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
};

export default PrivateRoute;
