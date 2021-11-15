import React from 'react';
import {TouchableOpacity} from 'react-native';
import buttonStyles from './button.styles';
import {Text} from './text.component';

export const Button = ({onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles.button}>
      <Text size="body" family="body">
        {children}
      </Text>
    </TouchableOpacity>
  );
};
