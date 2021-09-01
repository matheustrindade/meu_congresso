import React from 'react';
import {SafeAreaView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useTheme} from './src/utils/theme';
import {Navigation} from './src/components/navigation/navigation.component';

const styles = EStyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '$colors.ui.primary',
  },
});

const App = () => {
  useTheme();

  return (
    <SafeAreaView style={styles.pageContainer}>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
