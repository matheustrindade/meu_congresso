import EStyleSheet from 'react-native-extended-stylesheet';
import sizes from '../../utils/theme/sizes.json';
import colors from '../../utils/theme/colors.dark.json';

export default EStyleSheet.create({
  container:
    () =>
    (minWidth = 0) => ({
      borderWidth: sizes.xs / 2,
      borderColor: colors.ui.secondary,
      borderRadius: 5,
      height: sizes.xl,
      justifyContent: 'center',
      minWidth: minWidth + sizes.sm * 2,
      paddingHorizontal: sizes.sm,
      position: 'relative',
    }),
  label: {
    color: '$colors.ui.secondary',
  },
  labelContainer:
    () =>
    (top = false) => ({
      backgroundColor: colors.ui.primary,
      left: sizes.sm,
      position: 'absolute',
      top: '50%',
      transform: [{translateY: top ? -sizes.lg - sizes.sm : -sizes.sm}],
    }),
  input: {
    color: '$colors.ui.secondary',
    fontFamily: '$fontFamily.body',
    fontSize: '$fontSizes.body * 1.375',
    fontWeight: 'bold',
    padding: 0,
  },
});
