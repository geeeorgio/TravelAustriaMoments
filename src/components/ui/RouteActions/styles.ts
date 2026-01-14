import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: wp(12),
    marginTop: hp(16),
  },
  button: {
    flex: 1,
    paddingVertical: wp(12),
    backgroundColor: COLORS.black,
    borderWidth: wp(1),
    borderColor: COLORS.white,
    borderRadius: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: sp(14),
    fontFamily: FONTS.Ultra,
    color: COLORS.white,
  },
});
