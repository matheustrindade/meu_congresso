import EStyleSheet from 'react-native-extended-stylesheet';

export default ({color, size, family}) =>
  EStyleSheet.create({
    text: {
      color: `$colors.text.${color}`,
      fontSize: `$fontSizes.${size}`,
      fontFamily: `$fontFamily.${family}`,
    },
  });
