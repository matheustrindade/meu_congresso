import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useTheme} from './src/utils/theme';
import {AppNavigation} from './src/components/app-navigation/app-navigation.component';
import SplashScreen from 'react-native-splash-screen';
import {AuthenticationProvider} from './src/services/authentication.service';

const styles = EStyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '$colors.ui.primary',
  },
});

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useTheme();

  return (
    <AuthenticationProvider>
      <SafeAreaView style={styles.pageContainer}>
        <AppNavigation />
      </SafeAreaView>
    </AuthenticationProvider>
  );
};

export default App;
