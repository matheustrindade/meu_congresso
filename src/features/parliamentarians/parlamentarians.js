import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {ParlamentariansScreen} from '../../screens/parlamentarians/parlamentarians.screen';
import {useHeaderStylesOptions} from '../../hooks/style-hooks';
import {ParliamentaryDetails} from '../../screens/parlamentarians/parliamentaryDetails.screen';
const ParlamentariansStack = createStackNavigator();

export const Parlamentarians = () => {
  const headerStyleOptions = useHeaderStylesOptions();

  return (
    <ParlamentariansStack.Navigator
      screenOptions={{
        ...headerStyleOptions,
        ...TransitionPresets.FadeFromBottomAndroid,
      }}>
      <ParlamentariansStack.Screen
        name="parlamentarians-list"
        component={ParlamentariansScreen}
        options={{title: 'congressistas', headerShown: false}}
      />
      <ParlamentariansStack.Screen
        name="parlamentary-details"
        component={ParliamentaryDetails}
        options={{title: 'congressista'}}
      />
    </ParlamentariansStack.Navigator>
  );
};
