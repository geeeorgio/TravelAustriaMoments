import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.liquidBckgd,
    paddingHorizontal: wp(20),
  },
  content: {
    width: '100%',
    alignItems: 'center',
    paddingTop: hp(24),
    borderRadius: wp(14),
    backgroundColor: COLORS.liquidBckgd,
  },
  textContainer: {
    width: '80%',
  },
  title: {
    fontSize: sp(16),
    textAlign: 'center',
    color: COLORS.black,
    marginBottom: hp(20),
  },
  description: {
    fontSize: sp(12),
    textAlign: 'center',
    color: COLORS.black,
    marginBottom: hp(20),
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: COLORS.liquidBckgd,
    borderTopWidth: wp(1),
  },
  confirmButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(16),
  },
  confirmButtonText: {
    fontFamily: FONTS.MontserratBold,
    fontSize: sp(14),
    color: COLORS.green,
    textAlign: 'center',
  },
  cancelButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(16),
    borderRightWidth: wp(1),
    borderColor: COLORS.liquidBckgd,
  },
  cancelButtonText: {
    fontFamily: FONTS.MontserratBold,
    fontSize: sp(14),
    color: COLORS.red,
    textAlign: 'center',
  },
});
