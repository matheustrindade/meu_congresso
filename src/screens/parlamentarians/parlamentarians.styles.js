import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$colors.bg.primary',
  },
  listTitle: {
    color: '$colors.text.primary',
    fontSize: '$sizes.md',
    fontFamily: '$fontFamily.monospace',
    paddingLeft: '$spaces.md',
  },
  titleContainer: {
    backgroundColor: '$colors.ui.tertiary',
    paddingVertical: '$spaces.xs',
  },
});
