import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Login} from '../../screens/login/login.component';

const LoginStack = createStackNavigator();

export const LoginNavigation = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
    </LoginStack.Navigator>
  );
};
