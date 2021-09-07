import EStyleSheet from 'react-native-extended-stylesheet';

export default (rounded, anim) =>
  EStyleSheet.create({
    container: {
      backgroundColor: '$colors.ui.tertiary',
      ...(rounded && {borderRadius: 50}),
      height: '100%',
      overflow: 'hidden',
      position: 'relative',
      width: '100%',
    },
    loading: {
      backgroundColor: '#fefefe',
      height: '100%',
      left: 0,
      opacity: 0.05,
      position: 'absolute',
      transform: [{translateX: anim}],
      width: '45%',
    },
  });
