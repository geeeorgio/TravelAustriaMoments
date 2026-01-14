import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(12),
    marginTop: hp(6),
  },
  circle: {
    width: wp(40),
    height: wp(40),
    borderRadius: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightGrayBorder,
  },
  circleActive: {
    backgroundColor: COLORS.white,
  },
  circleVisited: {
    backgroundColor: COLORS.green,
  },
  text: {
    fontSize: sp(16),
    fontFamily: FONTS.MontserratBold,
    color: COLORS.black,
  },
  textActive: {
    color: COLORS.black,
  },
  textVisited: {
    color: COLORS.white,
  },
  line: {
    flex: 1,
    height: wp(1.5),
    backgroundColor: COLORS.white,
  },
  lineVisited: {
    backgroundColor: COLORS.green,
  },
});
