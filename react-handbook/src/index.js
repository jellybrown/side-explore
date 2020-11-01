import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import GlobalStyles from './styles/globalStyles';
import Theme from './styles/theme';
import '@fortawesome/fontawesome-free/js/all';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root'),
);
