import { createContext } from 'react';

const HeaderContext = createContext({
  headerVisible: true,
  updateHeaderVisible: () => {}
});

export default HeaderContext;
