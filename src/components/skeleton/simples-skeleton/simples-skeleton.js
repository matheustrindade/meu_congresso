import React, {useCallback, useState} from 'react';
import {Animated, View} from 'react-native';
import simpleSkeletonStyles from './simple-skeleton.styles';
export const SimpleSkeleton = ({rounded = false}) => {
  const [animation] = useState(new Animated.Value(0));

  const initSkeleton = useCallback(
    event => {
      const {width} = event.nativeEvent.layout;
      Animated.loop(
        Animated.timing(animation, {
          toValue: width,
          duration: 1000,
          useNativeDriver: true,
        }),
      ).start();
    },
    [animation],
  );

  return (
    <View
      onLayout={initSkeleton}
      style={simpleSkeletonStyles(rounded).container}>
      <Animated.View style={simpleSkeletonStyles(rounded, animation).loading} />
    </View>
  );
};
