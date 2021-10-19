import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$colors.bg.secondary',
    position: 'relative',
    zIndex: 1,
  },
  header: {
    backgroundColor: '$colors.bg.primary',
    height: 160,
    position: 'relative',
    width: Dimensions.get('window').width,
    zIndex: 1,
  },
  imgBg: {
    backgroundColor: '$colors.ui.tertiary',
    height: '$sizes.xxl',
  },
  imgContainer: {
    borderRadius: 50,
    height: 120,
    padding: '$spaces.sm',
    position: 'absolute',
    top: '$sizes.lg',
    left: '$spaces.lg',
    width: 120,
  },
  img: {
    borderWidth: 2,
    borderColor: '$colors.ui.quaternary',
  },
  name: {
    color: '$colors.text.primary',
    fontFamily: '$fontFamily.heading',
    fontSize: '$sizes.md + $sizes.xs',
  },
  identification: {
    backgroundColor: '$colors.bg.primary',
    paddingBottom: '$spaces.md',
    paddingHorizontal: '$spaces.md',
  },
  commonText: {
    color: '$colors.text.primary',
    fontSize: '$fontSizes.body',
  },
  ableToRun: {
    alignItems: 'center',
    height: '$sizes.lg + $sizes.xs',
    flexDirection: 'row',
  },
  ableToRunText: {
    color: '$colors.text.primary',
  },
  ableToRunIcon: {
    color: '$colors.ui.success',
    marginLeft: '$spaces.sm',
  },
  sectionTitle: {
    color: '$colors.text.primary',
    fontFamily: '$fontFamily.heading',
    fontSize: '$fontSizes.title',
    marginBottom: '$spaces.sm',
  },
  section: {
    backgroundColor: '$colors.bg.primary',
    paddingHorizontal: '$spaces.md + $spaces.xs',
    paddingVertical: '$spaces.md',
    marginTop: '$spaces.md',
  },
  aboutIcon: {
    color: '$colors.ui.quaternary',
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '$colors.ui.tertiary',
    borderRadius: 50,
    height: '$sizes.lg + $sizes.sm',
    justifyContent: 'center',
    padding: '$spaces.sm + $spaces.xs',
    width: '$sizes.lg + $sizes.sm',
  },
  sectionInfoContainer: {
    flexDirection: 'row',
  },
  info: {
    color: '$colors.text.primary',
  },
  infoTitle: {
    fontWeight: 'normal',
  },
  infoText: {
    fontSize: '$fontSizes.body',
    fontWeight: 'bold',
  },
});
