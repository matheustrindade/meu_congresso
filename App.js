import React, {useCallback} from 'react';
import {SafeAreaView, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useTheme} from './src/utils/theme';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  home: 'home',
  votações: 'vote-yea',
  perfil: 'user-circle',
  congressistas: 'user-tie',
};

const styles = EStyleSheet.create({
  tab: {
    backgroundColor: 'green',
  },
});

const Home = () => <Text style={styles.title}>meu congresso</Text>;
const App = () => {
  useTheme();

  const getTabStyles = useCallback(() => {
    return styles.tab;
  }, []);

  const getScreenOptions = useCallback(
    ({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        return <Icons name={TAB_ICONS[route.name]} color={color} size={size} />;
      },
      tabBarStyle: getTabStyles(),
    }),
    [getTabStyles],
  );

  return (
    <SafeAreaView>
      <NavigationContainer>
        <Tab.Navigator screenOptions={getScreenOptions}>
          <Tab.Screen name="home" component={Home} />
          <Tab.Screen name="congressistas" component={Home} />
          <Tab.Screen name="votações" component={Home} />
          <Tab.Screen name="perfil" component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
