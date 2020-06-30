import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import GithubState from "./context/github/GithubState";
import "./App.css";

function App() {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Alert />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Fragment>
                  <Search />
                  <Users />
                </Fragment>
              )}
            />

            <Route exact path="/user/:login" component={User} />
          </Switch>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
