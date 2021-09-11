import React from 'react';
import {View} from 'react-native';
import separatorStyles from './separator.styles';

export const Separator = () => {
  return (
    <View style={separatorStyles.separatorContainer}>
      <View style={separatorStyles.separator} />
    </View>
  );
};
