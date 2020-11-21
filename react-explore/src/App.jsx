import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './containers/Header/header';

import LoginContainer from './containers/LoginContainer/loginContainer';
import '@fortawesome/fontawesome-free/js/all';
import HomeContainer from "./containers/HomeContainer/homeContainer";
import SignupContainer from './containers/SignupContainer/signupContainer';

function App() {
  const [isHeaderVisible, setHeaderVisible] = useState(true);

  return (
    <BrowserRouter>
      { isHeaderVisible && <Header />}
      <Switch>
        <Route exact path="/">
          <HomeContainer setHeaderVisible={setHeaderVisible} />
        </Route>
        <Route path="/login">
          <LoginContainer setHeaderVisible={setHeaderVisible}/>
        </Route>
        <Route path="/signup">
          <SignupContainer setHeaderVisible={setHeaderVisible} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
