import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import media from './media';

const Theme = ({ children }) => (
  <ThemeProvider
    theme={{
      primaryFont: 'Arial',
      primaryColor: '#666',
      ...media,
    }}
  >
    {children}
  </ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
