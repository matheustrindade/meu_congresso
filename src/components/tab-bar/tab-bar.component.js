import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {useCheckKeyboardOpened} from '../../hooks/kayboard-opened';
import styles, {hiddenAnimation} from './tab-bar.styles';

const TAB_ICONS = {
  home: 'home',
  votações: 'vote-yea',
  perfil: 'user-circle',
  congressistas: 'user-tie',
};

export const TabBar = ({state, descriptors, navigation}) => {
  const isKeyboardOpen = useCheckKeyboardOpened();

  const animation = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isKeyboardOpen ? 60 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isKeyboardOpen, animation]);

  const onPress = useCallback(
    ({route, isFocused}) =>
      () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          // The `merge: true` option makes sure that the params inside the tab screen are preserved
          navigation.navigate({name: route.name, merge: true});
        }
      },
    [navigation],
  );

  const onLongPress = useCallback(
    ({route}) =>
      () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      },
    [navigation],
  );

  return (
    <Animated.View
      style={[styles.tabContainer, hiddenAnimation(animation).hidden]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress({isFocused, route})}
            onLongPress={onLongPress({route})}
            style={styles.iconContainer}
            key={`${label}-${index}`}>
            <View style={[isFocused && styles.activeIcon]}>
              <Icons
                name={TAB_ICONS[route.name]}
                style={isFocused ? styles.iconFocused : styles.iconWithoutFocus}
                size={24}
              />
            </View>
            {!isFocused && <Text style={styles.tabBarTitle}>{label}</Text>}
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
};
