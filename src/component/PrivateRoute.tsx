// src/component/PrivateRoute.js
import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, openModal, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component {...rest} /> : openModal()}
    />
  );
};

export default PrivateRoute;
