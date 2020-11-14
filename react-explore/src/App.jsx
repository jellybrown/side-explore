import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './containers/Header/header';

import LoginContainer from './containers/LoginContainer/loginContainer';
import '@fortawesome/fontawesome-free/js/all';
import HomeContainer from "./containers/HomeContainer/homeContainer";
import SignupContainer from './containers/SignupContainer/signupContainer';
import { MuiThemeProvider } from "@material-ui/core";

function App() {
  return (
    <MuiThemeProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomeContainer />
          </Route>
          <Route path="/login">
            <LoginContainer />
          </Route>
          <Route path="/signup">
            <SignupContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
