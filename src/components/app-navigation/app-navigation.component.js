import React, {useContext} from 'react';
import {LoginNavigation} from '../../features/navigation/login-navigation.component';
import {Navigation} from '../../features/navigation/navigation.component';
import {AuthenticationContext} from '../../services/authentication.service';
import {NavigationContainer} from '@react-navigation/native';

export const AppNavigation = () => {
  const {isAuthenticated} = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <Navigation /> : <LoginNavigation />}
    </NavigationContainer>
  );
};
