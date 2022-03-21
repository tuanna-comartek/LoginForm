import HomePage from '@modules/Home';
import TodoList from '@modules/TodoList/TodoList';
import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light my-navbar">
          <div className="container-fluid my-navbar-content">
            <div className="navbar-brand content-left">
              <img
                src="https://comartek.com/wp-content/uploads/2021/07/concept_logo-web.png"
                alt="Comartek"
                style={{ width: '50%' }}
              />
            </div>
            <div className="collapse navbar-collapse content-right" id="navbarNavAltMarkup">
              <div className="navbar-nav ">
                <div className="nav-link active" aria-current="page">
                  <Link
                    className="item-nav"
                    to="/home"
                    style={{ textDecoration: 'none', paddingRight: 20, fontSize: 24 }}
                  >
                    HomePage
                  </Link>
                  <Link
                    className="item-nav"
                    to="/todo-list"
                    style={{ textDecoration: 'none', paddingRight: 20, fontSize: 24 }}
                  >
                    Todo List
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/todo-list">
            <TodoList />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
