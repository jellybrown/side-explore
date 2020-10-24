import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from "./styles/GlobalStyles";
import './index.css';
import App from './App';
import Theme from "./styles/theme";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyles />
      <Theme>
          <App />
      </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
