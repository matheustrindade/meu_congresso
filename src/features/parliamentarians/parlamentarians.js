import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ParlamentariansScreen} from '../../screens/parlamentarians/parlamentarians.screen';
import {useHeaderStylesOptions} from '../../hooks/style-hooks';

const ParlamentariansStack = createStackNavigator();

export const Parlamentarians = () => {
  const headerStyleOptions = useHeaderStylesOptions();

  return (
    <ParlamentariansStack.Navigator screenOptions={headerStyleOptions}>
      <ParlamentariansStack.Screen
        name="parlamentarians-list"
        component={ParlamentariansScreen}
        options={{title: 'congressistas'}}
      />
    </ParlamentariansStack.Navigator>
  );
};
