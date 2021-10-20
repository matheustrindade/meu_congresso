import React from 'react';
import {Text as NativeText} from 'react-native';
import textStyle from './text.styles';

export const Text = ({
  children,
  color = 'primary',
  size = 'body',
  style,
  family = 'body',
}) => {
  return (
    <NativeText style={[textStyle({size, color, family}).text, style]}>
      {children}
    </NativeText>
  );
};
