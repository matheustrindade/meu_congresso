import React, {useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './navigation.styles';
import {TabBar} from '../tab-bar/tab-bar.component';
import {Parlamentarians} from '../../features/parliamentarians/parlamentarians';

const Home = () => (
  <View style={styles.pageContainer}>
    <Text style={styles.title}>meu congresso</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  const getTabBar = useCallback(props => <TabBar {...props} />, []);
  const getScreenOptions = useCallback(
    () => ({
      headerShown: false,
    }),
    [],
  );

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={getTabBar} screenOptions={getScreenOptions}>
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="congressistas" component={Parlamentarians} />
        <Tab.Screen name="votações" component={Home} />
        <Tab.Screen name="perfil" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
