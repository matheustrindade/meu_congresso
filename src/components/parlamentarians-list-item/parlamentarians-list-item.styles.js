import EStyleSheet from 'react-native-extended-stylesheet';
import sizes from '../../utils/theme/sizes.json';
import spaces from '../../utils/theme/spaces.json';
export default EStyleSheet.create({
  listItemContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: spaces.md,
    paddingVertical: spaces.sm,
  },
  imageContainer: {
    backgroundColor: '$colors.ui.tertiary',
    borderRadius: 50,
    height: sizes.xl + sizes.sm,
    width: sizes.xl + sizes.sm,
    padding: spaces.xs,
  },
  identificationContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingLeft: spaces.md,
  },
  name: {
    color: '$colors.text.primary',
    fontSize: '$sizes.md',
    fontFamily: '$fontFamily.body',
  },
  party: {
    color: '$colors.text.secondary',
    fontFamily: '$fontFamily.monospace',
  },
  favouriteContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: '$spaces.md',
  },
  favourite: {
    color: '$colors.ui.secondary',
  },
  notFavourite: {
    color: '$colors.ui.disabled',
  },
  role: {
    color: '$colors.text.primary',
    fontFamily: '$fontFamily.body',
    fontSize: '$sizes.md',
  },
});
