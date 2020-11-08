import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './container/Header/header';
import JoinContainer from './container/JoinContainer/joinContainer';
import LoginContainer from './container/LoginContainer/loginContainer';
import '@fortawesome/fontawesome-free/js/all';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path={["/", "/login"]}>
      <LoginContainer />
      </Route>
      <Route path="/join">
        <JoinContainer/>
      </Route>

    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
