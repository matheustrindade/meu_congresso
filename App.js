import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useTheme} from './src/utils/theme';

const App = () => {
  useTheme();

  return (
    <SafeAreaView>
      <Text style={styles.title}>meu congresso</Text>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  title: {
    color: '$colors.text.error',
  },
});

export default App;
