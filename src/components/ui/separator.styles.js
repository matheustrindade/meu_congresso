import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  separatorContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  separator: {
    backgroundColor: '$colors.ui.tertiary',
    height: '$sizes.xs / 2',
    width: '100%',
  },
});
