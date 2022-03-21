import LoginPage from '@modules/Login';
// import useLogin from '@modules/Login/hooks/useLogin';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navigation from '../components/Navigation';

export default function AppRouter() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/home"
            render={() => {
              return true ? <Navigation /> : <Redirect to="/" />;
            }}
          >
            <Navigation />
          </Route>
          <Route path="/" exact={true}>
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
