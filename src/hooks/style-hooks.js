import {useMemo} from 'react';
import {useTheme} from '../utils/theme';

export const useHeaderStylesOptions = () => {
  const theme = useTheme({themeAsObject: true});
  return useMemo(
    () => ({
      headerStyle: {
        backgroundColor: theme.colors.bg.primary,
        borderBottomColor: theme.colors.ui.secondary,
        borderBottomWidth: 2,
      },
      headerTintColor: theme.colors.text.primary,
      headerTitleStyle: {
        fontFamily: theme.fontFamily.body,
      },
    }),
    [theme],
  );
};
