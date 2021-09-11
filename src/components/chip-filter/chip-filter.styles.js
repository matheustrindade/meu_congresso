import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    borderBottomColor: '$colors.ui.secondary',
    borderBottomWidth: 2,
    flexDirection: 'row',
    height: '$sizes.xl + $sizes.xs',
  },
  content: {
    alignItems: 'center',
  },
  chip: {
    backgroundColor: '$colors.ui.tertiary',
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'transparent',
    fontSize: '$sizes.md',
    marginLeft: '$spaces.xs',
    paddingHorizontal: '$spaces.md',
    paddingVertical: '$spaces.sm',
  },
  chipText: {
    color: '$colors.text.primary',
  },
  selected: {
    backgroundColor: '$colors.ui.secondary',
    borderColor: 'transparent',
  },
  first: {
    marginLeft: '$spaces.md',
  },
});
