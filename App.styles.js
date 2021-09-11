import EStyleSheet from 'react-native-extended-stylesheet';
import spaces from './src/utils/theme/spaces.json';
export default EStyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  marginLeftXS: {
    marginLeft: 2,
  },
  marginLeftSM: {
    marginLeft: spaces.sm,
  },
  marginLeftMD: {
    marginLeft: spaces.md,
  },
  marginLeftLG: {
    marginLeft: spaces.lg,
  },
  marginLeftXL: {
    marginLeft: spaces.xl,
  },
  marginLeftXXL: {
    marginLeft: spaces.xxl,
  },
  marginRightXS: {
    marginRight: 2,
  },
  marginRightSM: {
    marginRight: spaces.sm,
  },
  marginRightMD: {
    marginRight: spaces.md,
  },
  marginRightLG: {
    marginRight: spaces.lg,
  },
  marginRightXL: {
    marginRight: spaces.xl,
  },
  marginRightXXL: {
    marginRight: spaces.xxl,
  },
});
