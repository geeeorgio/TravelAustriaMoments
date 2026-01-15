import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: wp(12),
    marginTop: hp(12),
  },
  button: {
    flex: 1,
    paddingVertical: wp(12),
    backgroundColor: COLORS.blackBckgd,
    borderWidth: wp(1),
    borderColor: COLORS.lightBorder,
    borderRadius: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    fontSize: sp(11),
    fontFamily: FONTS.Ultra,
  },
});
