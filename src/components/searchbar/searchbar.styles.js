import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    backgroundColor: '$colors.ui.primary',
    paddingHorizontal: '$spaces.md',
    height: '$sizes.xl',
  },
  inputContainer: {
    position: 'relative',
  },
  inputSearch: {
    backgroundColor: '$colors.ui.tertiary',
    color: '$colors.text.primary',
    fontSize: '$sizes.md',
    height: '$sizes.lg + $sizes.sm',
    lineHeight: '$sizes.lg + $sizes.sm',
    paddingLeft: '$sizes.md',
    paddingRight: '$sizes.lg + $spaces.sm',
  },
  iconContainer: {
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    right: '$spaces.sm',
    zIndex: 2,
  },
  icon: {
    color: '$colors.text.secondary',
  },
});
