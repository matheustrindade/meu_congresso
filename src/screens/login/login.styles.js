import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '$colors.bg.primary',
    flex: 1,
    paddingHorizontal: '$sizes.md',
    justifyContent: 'center',
  },
  inputSection: {
    paddingHorizontal: '$sizes.lg',
    width: '100%',
  },
});
