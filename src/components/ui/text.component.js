import React, {forwardRef} from 'react';
import {Text as NativeText} from 'react-native';
import textStyle from './text.styles';

export const Text = forwardRef(
  (
    {children, color = 'primary', size = 'body', style, family = 'body'},
    ref,
  ) => {
    return (
      <NativeText
        style={[textStyle({size, color, family}).text, style]}
        ref={ref}>
        {children}
      </NativeText>
    );
  },
);
