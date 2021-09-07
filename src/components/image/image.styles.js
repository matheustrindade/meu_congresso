import EStyleSheet from 'react-native-extended-stylesheet';

export default rounded =>
  EStyleSheet.create({
    image: {
      width: '100%',
      height: '100%',
      ...(rounded && {borderRadius: 50}),
    },
  });
