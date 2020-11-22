import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './containers/Header/header';

import LoginContainer from './containers/LoginContainer/loginContainer';
import '@fortawesome/fontawesome-free/js/all';
import HomeContainer from "./containers/HomeContainer/homeContainer";
import SignupContainer from './containers/SignupContainer/signupContainer';
import HeaderContext from "./contexts/header";

function App() {
  const [headerVisible, setHeaderVisible] = useState(true);

  return (
    <BrowserRouter>
      <HeaderContext.Provider value={{
        headerVisible,
        setHeaderVisible
      }}>
        <Header/>
        <Switch>
          <Route exact path="/">
            <HomeContainer/>
          </Route>
          <Route path="/login">
            <LoginContainer/>
          </Route>
          <Route path="/signup">
            <SignupContainer/>
          </Route>
        </Switch>
      </HeaderContext.Provider>
    </BrowserRouter>
  );
}

export default App;
