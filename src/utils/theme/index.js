import {useCallback, useRef} from 'react';
import spaces from './spaces.json';
import fonts from './fonts.json';
import colorsDark from './colors.dark.json';
import colorsLight from './colors.light.json';
import {useColorScheme} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const useTheme = () => {
  const activeTheme = useColorScheme();
  let prevTheme = useRef(null);

  const transformTheme = useCallback(theme => {
    let transformedTheme = {};
    for (let key of Object.keys(theme)) {
      const newKey = `$${key}`;
      transformedTheme[newKey] = theme[key];
    }
    return transformedTheme;
  }, []);

  const getTheme = useCallback(() => {
    if (prevTheme.current === activeTheme) {
      return;
    }

    const theme = {
      spaces,
      ...fonts,
      colors: activeTheme === 'dark' ? colorsDark : colorsLight,
    };

    const transformedTheme = transformTheme(theme);

    console.log('theme: ', transformedTheme);

    prevTheme.current = activeTheme;

    EStyleSheet.build(transformedTheme);
  }, [activeTheme, transformTheme]);

  return getTheme();
};

module.hot.accept(() => {
  EStyleSheet.clearCache();
  EStyleSheet.build();
});
