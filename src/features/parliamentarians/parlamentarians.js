import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ParlamentariansScreen} from '../../screens/parlamentarians/parlamentarians.screen';

const ParlamentariansStack = createStackNavigator();

export const Parlamentarians = () => {
  return (
    <ParlamentariansStack.Navigator>
      <ParlamentariansStack.Screen
        name="parlamentarians-list"
        component={ParlamentariansScreen}
        options={{title: 'parlamentares'}}
      />
    </ParlamentariansStack.Navigator>
  );
};
