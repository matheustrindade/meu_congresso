import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  tabContainer: {
    backgroundColor: '$colors.ui.primary',
    borderTopColor: 'rgba(255,255,255,.1)',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    height: 60,
  },
  activeIcon: {
    backgroundColor: '$colors.ui.secondary',
    padding: 8,
    borderRadius: 5,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarTitle: {
    color: '$colors.text.primary',
    fontSize: 12,
    fontFamily: '$fontFamily.body',
  },
  iconFocused: {color: '$colors.ui.quaternary'},
  iconWithoutFocus: {color: '$colors.ui.secondary'},
});
