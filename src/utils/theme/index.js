import React, {createContext, useMemo} from 'react';
import spaces from './spaces.json';
import fonts from './fonts.json';
import colorsDark from './colors.dark.json';
import colorsLight from './colors.light.json';

export const ThemeContext = createContext({});

export const ThemeProvider = ({children}) => {
  const theme = useMemo(() => {
    const colors = true ? colorsLight : colorsDark;
    return {
      spaces,
      ...fonts,
      ...colors,
    };
  }, []);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
