import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App';
import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root'),
);
