import React, {useCallback} from 'react';
import {Animated, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './navigation.styles';
import {TabBar} from '../../components/tab-bar/tab-bar.component';
import {Parlamentarians} from '../parliamentarians/parlamentarians';
import {Input} from '../../components/ui/input.component';

const Home = () => {
  let scale = React.useRef(new Animated.Value(1)).current;
  const [shrink, setShrink] = React.useState(true);

  const animateView = useCallback(() => {
    Animated.timing(scale, {
      toValue: shrink ? 1.1 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setShrink(!shrink);
    });
  }, [scale, shrink]);

  return (
    <View style={styles.pageContainer}>
      {/* <Animated.View
        style={{
          backgroundColor: 'red',
          padding: 20,
          transform: [{scaleX: scale}],
        }}>
        <Text style={{color: 'white'}}>view animada hahaha</Text>
      </Animated.View>
      <Text style={styles.title}>meu congresso</Text>
      <TouchableOpacity onPress={animateView}>
        <Text style={{color: 'white'}}>press me</Text>
      </TouchableOpacity> */}
      <Input label="label text" />
    </View>
  );
};

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
    <Tab.Navigator tabBar={getTabBar} screenOptions={getScreenOptions}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="congressistas" component={Parlamentarians} />
      <Tab.Screen name="votações" component={Home} />
      <Tab.Screen name="perfil" component={Home} />
    </Tab.Navigator>
  );
};
