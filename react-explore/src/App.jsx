import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './containers/Header/header';
import JoinContainer from './containers/JoinContainer/joinContainer';
import LoginContainer from './containers/LoginContainer/loginContainer';
import '@fortawesome/fontawesome-free/js/all';
import HomeContainer from "./containers/HomeContainer/homeContainer";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/">
        <HomeContainer />
      </Route>
      <Route path="/login">
        <LoginContainer />
      </Route>
      <Route path="/join">
        <JoinContainer />
      </Route>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
