import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

//Приватный route для авторизации (в параметр state - перадем состояние в данном случае это )
export const PrivateRoute = ({ state: value, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (value) {
          return <Component {...props} />;
        } else {
          return <Redirect to={
            {
              pathname: "/",
              state: {
                from: props.location
              }
            }
          } />
        }

      }}
    />
  );
};