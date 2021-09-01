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
  activeIcon: {backgroundColor: 'green', padding: 8, borderRadius: 5},
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarTitle: {color: 'white', fontSize: 12},
});
