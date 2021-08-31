import React, {useCallback} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
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
  pageContainer: {
    flex: 1,
    backgroundColor: '$colors.ui.primary',
  },
  tab: {
    backgroundColor: '$colors.ui.primary',
  },
  tabContainer: {
    backgroundColor: '$colors.ui.primary',
    borderTopColor: 'rgba(255,255,255,.1)',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    height: 60,
  },
});

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                ...(isFocused
                  ? {backgroundColor: 'green', padding: 8, borderRadius: 5}
                  : {}),
              }}>
              <Icons
                name={TAB_ICONS[route.name]}
                color={isFocused ? 'white' : 'green'}
                size={24}
              />
            </View>
            {!isFocused && (
              <Text style={{color: 'white', fontSize: 12}}>{label}</Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Home = () => (
  <View style={styles.pageContainer}>
    <Text style={styles.title}>meu congresso</Text>
  </View>
);
const App = () => {
  useTheme();

  const getTabBar = useCallback(props => <TabBar {...props} />, []);

  return (
    <SafeAreaView style={styles.pageContainer}>
      <NavigationContainer>
        <Tab.Navigator tabBar={getTabBar}>
          <Tab.Screen
            name="home"
            component={Home}
            options={{headerShown: false}}
          />
          <Tab.Screen name="congressistas" component={Home} />
          <Tab.Screen name="votações" component={Home} />
          <Tab.Screen name="perfil" component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
