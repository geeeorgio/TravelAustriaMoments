import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  imgContainer: {
    width: '100%',
    height: hp(160),
    borderWidth: wp(1),
    borderColor: COLORS.white,
    borderRadius: wp(32),
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  infoContainer: {
    width: '100%',
    height: hp(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(20),
    gap: wp(10),
    backgroundColor: COLORS.transparentBckgd,
  },
  infoText: {
    fontSize: sp(14),
  },
  infoButton: {
    padding: 0,
    height: '75%',
    width: wp(100),
  },
  infoButtonText: {
    fontSize: sp(11),
    fontFamily: FONTS.Ultra,
    letterSpacing: wp(1),
  },
});
