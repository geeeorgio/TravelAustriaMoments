import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: wp(1),
    borderColor: COLORS.white,
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: wp(24),
    backgroundColor: COLORS.black,
  },
  imageContainer: {
    width: '100%',
    height: hp(120),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageText: {
    fontSize: sp(12),
    fontFamily: FONTS.Ultra,
    letterSpacing: wp(1),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.transparentBckgd,
    paddingLeft: wp(10),
    paddingVertical: hp(2),
  },
  content: {
    width: '100%',
    justifyContent: 'space-between',
    padding: wp(10),
    gap: hp(6),
  },
  title: {
    fontSize: sp(16),
  },
  description: {
    fontSize: sp(12),
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(6),
    paddingRight: wp(16),
  },
  footerText: {
    fontSize: sp(12),
  },
  btnsContainer: {
    width: '100%',
    height: hp(48),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: wp(10),
  },
  openBtn: {
    flex: 0.6,
    padding: 0,
    height: '100%',
  },
  btnText: {
    fontSize: sp(12),
    fontFamily: FONTS.Ultra,
    letterSpacing: wp(1),
  },
  smallBtnsContainer: {
    height: '100%',
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: wp(10),
  },
  smallBtn: {
    borderWidth: wp(1),
    borderColor: COLORS.white,
  },
  smallBtnLiked: {
    backgroundColor: COLORS.red,
  },
});
